// Client behaviour: discipline filter (dims non-matching projects) and
// ←/→ keyboard navigation through the (filtered) project list.
// Module-level listeners are attached once per hard load; per-page state
// is re-applied on every astro:page-load (fires on initial load too).
import { navigate } from 'astro:transitions/client';

const FILTER_KEY = 'vj-filter';

const getFilter = () => sessionStorage.getItem(FILTER_KEY) || '';
const setFilter = (value) =>
  value ? sessionStorage.setItem(FILTER_KEY, value) : sessionStorage.removeItem(FILTER_KEY);

const matches = (item, filter) =>
  !filter || (item.dataset.disciplines || '').split('|').includes(filter);

function applyFilter() {
  const filter = getFilter();
  document.querySelectorAll('.vj-filter-tag').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.filter === filter));
  });
  document.querySelectorAll('.vj-project-item').forEach((item) => {
    item.classList.toggle('is-dimmed', !matches(item, filter));
  });
}

document.addEventListener('click', (e) => {
  const btn = e.target instanceof Element && e.target.closest('.vj-filter-tag');
  if (!btn) return;
  setFilter(getFilter() === btn.dataset.filter ? '' : btn.dataset.filter);
  applyFilter();
});

// Playable feature tiles: first click swaps the still for the film —
// a self-hosted <video> (data-video) or a YouTube embed (data-youtube).
document.addEventListener('click', (e) => {
  const tile = e.target instanceof Element && e.target.closest('.vj-tile-playable');
  if (!tile || tile.dataset.playing) return;
  tile.dataset.playing = 'true';
  let player;
  if (tile.dataset.video) {
    player = document.createElement('video');
    player.src = tile.dataset.video;
    player.controls = true;
    player.autoplay = true;
    player.playsInline = true;
  } else {
    player = document.createElement('iframe');
    player.src = `https://www.youtube-nocookie.com/embed/${tile.dataset.youtube}?autoplay=1&rel=0`;
    player.allow = 'autoplay; fullscreen; encrypted-media; picture-in-picture';
    player.allowFullscreen = true;
    player.title = tile.getAttribute('aria-label') || 'Film';
  }
  player.className = 'vj-tile-player';
  tile.replaceChildren(player);
});

document.addEventListener('keydown', (e) => {
  if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
  if (document.body.dataset.view !== 'project') return;
  if (e.target instanceof Element && ['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

  const filter = getFilter();
  const items = [...document.querySelectorAll('.vj-project-item')].filter((el) => matches(el, filter));
  if (!items.length) return;

  const activeId = document.body.dataset.activeId;
  const i = items.findIndex((el) => el.dataset.id === activeId);
  const next =
    i === -1
      ? items[0]
      : e.key === 'ArrowRight'
        ? items[(i + 1) % items.length]
        : items[(i - 1 + items.length) % items.length];
  navigate(next.getAttribute('href'));
});

document.addEventListener('astro:page-load', applyFilter);

// Vicky & Josh — portfolio content. THE single source of truth.
// Every project page, rail entry, sitemap entry and SEO tag derives from this
// file. To add a project, append an object here and drop its images in
// public/assets/imagery/ — see README "Adding a new project".
//
// Copy is transcribed verbatim from the studio deck (VJ(3)new.pdf).

export const PROJECTS = [
  {
    id: 'lenovo-beb',
    index: '01',
    client: 'Lenovo',
    title: 'Backing Every Business',
    disciplines: ['B2B', 'Film'],
    description:
      'After 4 years of working on Lenovo’s successful small business initiative in North America, we were tasked in taking it global. The line “Backing Every Business” was born and we launched with expert entrepreneur, Eva Longoria.',
    stats: [
      { figure: '53k', label: 'Website Visits' },
      { figure: '295', label: 'Earned Coverage' },
      { figure: '240', label: 'Feature Stories' },
    ],
    hero: 'assets/imagery/eva-hero-w.jpg',
    youtube: 'OvqD0lj0bkg', // "Lenovo Backing Every Business with Eva Longoria" (Lenovo)
    images: ['assets/imagery/eva-2-w.jpg', 'assets/imagery/eva-d-w.jpg'],
    press: ['independent', 'people', 'dailymail', 'aol', 'yahoo', 'bustle'],
    pressLinks: {
      independent: 'https://www.independent.co.uk/news/business/lenovo-eva-longoria-hollywood-american-japan-b2940219.html',
      people: 'https://people.com/eva-longoria-credits-strong-women-for-her-success-exclusive-11936013',
      aol: 'https://www.aol.com/articles/eva-longoria-says-growing-around-173606876.html',
      yahoo: 'https://www.yahoo.com/entertainment/celebrity/articles/eva-longoria-says-growing-around-173606839.html',
      bustle: 'https://www.bustle.com/entertainment/eva-longoria-mentoring-entrepreneurs-lenovo',
    },
  },
  {
    id: 'sprite-freshfest',
    index: '02',
    client: 'Sprite',
    title: 'FreshFest',
    disciplines: ['Experiential'],
    description:
      'Launching Sprite’s new global branding with a street-inspired event featuring Crenshaw, Little Sims, NBA players and Michelin chefs.',
    stats: [
      { figure: '3.75M', label: 'Social Views' },
      { figure: '1,178', label: 'Earned Placements' },
      { figure: '100%', label: 'Message Pull Through' },
    ],
    hero: 'assets/imagery/sprite-a-w.jpg',
    video: 'assets/video/sprite-aftermovie.mp4',
    images: ['assets/imagery/sprite-e-w.jpg', 'assets/imagery/sprite-b-w.jpg'],
    press: ['complex', 'highsnobiety', 'adweek', 'fastcompany', 'buzzfeed', 'wsj'],
    pressLinks: {
      complex: 'https://www.complex.com/music/a/james-keith/sprite-freshfest-london-recap',
      adweek: 'https://www.adweek.com/brand-marketing/sprite-doubles-down-on-street-cred-to-win-over-gen-z/',
      fastcompany: 'https://www.fastcompany.com/91510415/sprite-rebrand-lymon',
      buzzfeed: 'https://www.buzzfeed.com/business-news/sprite-its-that-fresh-platform-oana-vlad',
      // wsj logo shown unlinked: WSJ's Sprite coverage is the NBA deal, not FreshFest
    },
  },
  {
    id: 'digital-self',
    index: '03',
    client: 'Lenovo',
    title: 'Meet Your Digital Self',
    disciplines: ['Experiential', 'Film'],
    description:
      'In a world-first, 2 young people brought their online worlds to life. Family members were then invited to chat to these digital avatars, learning more about this hidden side of them.',
    stats: [
      { figure: '2000', label: 'Pieces Global Coverage' },
      { figure: '1st', label: 'Real Time AI Avatar' },
      { figure: '58%', label: 'Increase to Shout Website' },
    ],
    hero: 'assets/imagery/digitalself-a-w.jpg',
    video: 'assets/video/digitalself-case.mp4',
    images: ['assets/imagery/digitalself-hero-w.jpg'],
    press: ['ladbible', 'metro', 'dailymirror', 'thesun', 'dailymail', 'yahoo'],
    pressLinks: {
      ladbible: 'https://www.ladbible.com/lifestyle/gen-z-online-and-offline-disconnect-lenovo-153586-20240526',
      dailymirror: 'https://www.mirror.co.uk/lifestyle/genz-living-double-life-online-32917902',
      thesun: 'https://www.thesun.co.uk/tech/28190474/gen-z-living-double-life/',
      dailymail: 'https://www.dailymail.co.uk/health/article-13476113/Gen-Z-double-life-online-shocking-survey-secret-persona.html',
      yahoo: 'https://finance.yahoo.com/news/lenovo-powers-ai-avatars-explore-174500712.html',
    },
  },
  {
    id: 'onlynans',
    index: '04',
    client: 'Ofcom',
    title: 'OnlyNans',
    disciplines: ['Social good', 'Digital'],
    description:
      'Teens don’t report harmful content. They’re Desensitized to it. So, we called in the big guns. OnlyNans saw famous Tiktoker Lewis Leigh show his gran the good, bad and ugly of social media…after all if you wouldn’t show your gran, then you should probably report it.',
    stats: [
      { figure: '5', label: 'Award Wins' },
      { figure: '45', label: 'Pieces of Tier 1 Coverage' },
      { figure: '50k', label: 'Budget' },
    ],
    hero: 'assets/imagery/onlynans-2-w.jpg',
    // the deck hero's nan stickers, overlaid on the photo
    stickers: [
      { src: 'assets/imagery/onlynans-sticker-no.png', side: 'left' },
      { src: 'assets/imagery/onlynans-sticker-fan.png', side: 'right' },
    ],
    // press clippings anchor to their headline (pos: 'top')
    images: [
      { src: 'assets/imagery/onlynans-standard-w.jpg', pos: 'top' },
      { src: 'assets/imagery/onlynans-guardian-w.jpg', fit: 'contain' },
    ],
    quote: { text: 'Some outstandingly funny copywriting', source: 'Creative Hits of the Week' },
    press: ['guardian', 'dailymail', 'eveningstandard', 'times', 'walesonline'],
    pressLinks: {
      guardian: 'https://www.theguardian.com/media/2022/jun/27/young-people-must-report-harmful-online-content-says-uk-watchdog',
      dailymail: 'https://www.dailymail.co.uk/news/article-10956397/TikTok-star-launches-OnlyNans-urging-young-users-report-offend-gran.html',
      eveningstandard: 'https://www.standard.co.uk/news/uk/tiktok-lewis-leigh-ofcom-campaign-harmful-content-online-b1008576.html',
      times: 'https://www.thetimes.com/business/technology/article/tiktok-star-lewis-leigh-launches-only-nans-safe-internet-content-campaign-rsxk6zdsn',
      walesonline: 'https://www.walesonline.co.uk/news/wales-news/welsh-tiktok-star-onlynans-campaign-24341408',
    },
  },
  {
    id: 'remotest-office',
    index: '05',
    client: 'Lenovo',
    title: 'Remotest Office in the World',
    disciplines: ['Social good', 'Experiential', 'Digital'],
    description:
      'To prove Lenovo’s tech could handle working remotely post-pandemic, we invited volunteers to do their day jobs from the infamous Robinson Crusoe Island. In their free time volunteers used their unique skills to upskill this previously disconnected community and help endangered wildlife.',
    stats: [
      { figure: '5,000', label: 'Entries Worldwide' },
      { figure: '1,000', label: 'Volunteer Hours' },
      { figure: '200x', label: 'Faster Internet' },
      { figure: '17', label: 'Critically Endangered Statuses Improved' },
    ],
    hero: 'assets/imagery/crusoe-2-w.jpg',
    images: ['assets/imagery/crusoe-e-w.jpg', 'assets/imagery/crusoe-a-w.jpg'],
    press: ['techradar', 'fastcompany', 'larepubblica', 'vanityfair', 'forbes', 'cnn'],
    pressLinks: {
      techradar: 'https://www.techradar.com/news/lenovo-may-have-solved-the-wfh-problem-for-good',
      fastcompany: 'https://www.fastcompany.com/90806247/the-future-of-the-workplace-is-changing-and-so-are-the-tools-to-support-it',
      larepubblica: 'https://www.repubblica.it/tecnologia/2022/05/18/news/lavorare_dallisola_di_robinson_crusoe_abbiamo_intervistato_i_volontari_lenovo-350067736/',
      vanityfair: 'https://www.vanityfair.it/article/smart-working-isola-robinson-crusoe',
      forbes: 'https://www.forbes.com/sites/carolinamilanesi/2022/06/27/what-lenovos-work-for-humankind-initiative-says-about-hybrid-work-and-community-impact/',
      // original CNN sponsor page is offline; archived copy
      cnn: 'https://web.archive.org/web/20250323144143/https://sponsorcontent.cnn.com/interactive/LenovoIntel/Workforhumankind/',
    },
  },
  {
    id: 'winnie-pooh',
    index: '06',
    client: 'UCB',
    title: 'Winnie-the-Pooh',
    disciplines: ['Social good'],
    description:
      'UCB is a Canadian pharma company that supports people with MG; a neurological disease that affects speech, movement and brainpower. Christopher Robin had this disease. So, for the 100-year anniversary of the original story we made a special edition giving pooh these symptoms.',
    stats: [],
    hero: 'assets/imagery/ucb-hero-w.jpg',
    images: ['assets/imagery/ucb-b-w.jpg', 'assets/imagery/ucb-flatlay-w.jpg'],
    press: [],
  },
  {
    id: 'mysurgery',
    index: '07',
    client: 'NHS',
    title: 'MySurgery',
    disciplines: ['Social good', 'Digital'],
    // No dedicated copy in the deck — shown with its supplied imagery only.
    description: '',
    stats: [],
    hero: 'assets/imagery/mysurgery-c-w.jpg',
    images: ['assets/imagery/mysurgery-b-w.jpg', 'assets/imagery/mysurgery-a-w.jpg'],
    press: [],
  },
  {
    id: 'those-few-people',
    index: '08',
    client: 'Nescafé',
    title: 'Those Few People',
    disciplines: ['Film'],
    description:
      'An amphitheatre filled with 80,000 people; everyone this lad has ever met. But only a few of them are truly special. Only a few get to sit and have coffee with him.',
    stats: [
      { figure: '1018%', label: 'Increased Website Visits' },
      { figure: '+4%', label: 'Brand Sales Growth' },
    ],
    notes: [
      'Generated more positive comments than any other previous Nescafé campaign',
      'Nescafé’s most successful campaign (at the time)',
    ],
    hero: 'assets/imagery/nescafe-hero.jpg',
    youtube: 'ls0UVO_mJt0', // Nescafé Gold "Those Few People" (Publicis Worldwide)
    images: [],
    press: [],
  },
  {
    id: 'queen-of-small',
    index: '09',
    client: 'Lenovo',
    title: 'Queen of Small',
    disciplines: ['Digital', 'B2B'],
    description:
      'We spent time. And Money. And tears. All to make an AI Queen Latifah so any small business could get a shout out from her. A-list endorsement in seconds. Then, about 5 minutes later the AI boom made this easy as pie. Ahead of our time…that’s for others to say.',
    stats: [
      { figure: '$80M', label: 'Cost of Assets Without AI' },
      { figure: '450M', label: 'Reach' },
      { figure: '+4%', label: 'Brand Awareness' },
    ],
    hero: 'assets/imagery/queenofsmall-hero-w.jpg',
    video: 'assets/video/queenofsmall-case.mp4',
    images: [],
    press: ['bet', 'people', 'fortune'],
    pressLinks: {
      bet: 'https://www.bet.com/article/w4cqcy/queen-latifah-partners-with-lenovo-for-evolve-small-campaign-to-support-small-business-owners',
      people: 'https://people.com/queen-latifah-creating-ai-versions-of-herself-exclusive-8404973',
      fortune: 'https://fortune.com/2023/12/28/queen-latifah-explains-why-monetizing-digital-avatar-image-control-ai-nervousness/',
    },
  },
  {
    id: 'level-up',
    index: '10',
    client: 'LTA',
    title: 'Level Up',
    disciplines: ['Film'],
    description:
      'We encouraged young people from all backgrounds to play tennis…not just those who grew up on strawberries and cream. We did this by showcasing all the different superpowers kids can gain from playing tennis: epic concentration, incredible balance, and super speed.',
    stats: [],
    // six looping film moments, arranged like the deck's 3×2 grid
    hero: 'assets/imagery/lta-loop-5.mp4',
    video: 'assets/video/lta-levelup.mp4',
    images: [
      'assets/imagery/lta-loop-10.mp4',
      'assets/imagery/lta-loop-LM3.mp4',
      'assets/imagery/lta-loop-3.mp4',
      'assets/imagery/lta-loop-LM6.mp4',
      'assets/imagery/lta-loop-LM1.mp4',
    ],
    press: [],
  },
];

// Filter row / legend order (matches the deck).
export const DISCIPLINES = ['Film', 'Experiential', 'Digital', 'B2B', 'Social good'];

// Press-logo filenames (white-on-transparent or white-on-black) in public/assets/press/.
export const PRESS = {
  adweek: 'adweek.png',
  aol: 'aol.png',
  bet: 'bet.png',
  bustle: 'bustle.avif',
  buzzfeed: 'buzzfeed.png',
  cnn: 'cnn.webp',
  complex: 'complex.png',
  dailymail: 'dailymail.png',
  dailymirror: 'dailymirror.webp',
  eveningstandard: 'eveningstandard.png',
  fastcompany: 'fastcompany.png',
  forbes: 'forbes.png',
  fortune: 'fortune.png',
  guardian: 'guardian.png',
  highsnobiety: 'highsnobiety.png',
  independent: 'independent.png',
  ladbible: 'ladbible.png',
  larepubblica: 'larepubblica.png',
  metro: 'metro.png',
  people: 'people.png',
  techradar: 'techradar.png',
  thesun: 'thesun.png',
  times: 'times.png',
  vanityfair: 'vanityfair.png',
  walesonline: 'walesonline.png',
  wsj: 'wsj.png',
  yahoo: 'yahoo.webp',
};

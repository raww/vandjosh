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
    images: ['assets/imagery/eva-2-w.jpg', 'assets/imagery/eva-d-w.jpg'],
    press: ['independent', 'people', 'dailymail', 'aol', 'yahoo', 'bustle'],
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
    images: ['assets/imagery/onlynans-d-w.jpg'],
    quote: { text: 'Some outstandingly funny copywriting', source: 'Creative Hits of the Week' },
    press: ['guardian', 'dailymail', 'eveningstandard', 'times', 'walesonline'],
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

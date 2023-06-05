import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';
export const pageLinks = [
  { id: 1, href: '#home', text: 'Home' },
  { id: 2, href: '#about', text: 'About' },
  { id: 3, href: '#services', text: 'Services' },
  { id: 4, href: '#tours', text: 'Tours' },
];
export const socialLinks = [
  {
    id: 1,
    href: 'https://www.facebook.com/profile.php?id=100087130862480',
    icon: 'fab fa-facebook',
  },
  {
    id: 2,
    href: 'https://twitter.com/AlexNoganTorres',
    icon: 'fab fa-twitter',
  },
  {
    id: 3,
    href: 'https://twitter.com/AlexNoganTorres',
    icon: 'fab fa-squarespace',
  },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    textInfo:
      'Lorem ipsum dolor sit amet, consecteturadipisicing elit. Cumque  vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'china',
    duration: '12 days',
    cost: 'from $1200',
  },
  {
    id: 2,
    img: tour2,
    date: 'october 1th, 2020',
    title: 'best of java',
    textInfo:
      'Lorem ipsum dolor sit amet, consecteturadipisicing elit. Cumque  vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'indonesia',
    duration: '12 days',
    cost: 'from $4500',
  },
  {
    id: 3,
    img: tour3,
    date: 'august 29th, 2020',
    title: 'explore hong kong',
    textInfo:
      'Lorem ipsum dolor sit amet, consecteturadipisicing elit. Cumque  vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: ' hong kong',
    duration: '7 days',
    cost: ' $2500 only!!!',
  },
  {
    id: 4,
    img: tour4,
    date: 'january 16th, 2020',
    title: 'kenya highlights',
    textInfo:
      'Lorem ipsum dolor sit amet, consecteturadipisicing elit. Cumque  vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Africa',
    duration: '10 days',
    cost: '$1780 one week deal !!!',
  },
];

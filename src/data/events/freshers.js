import {
  DANCETECHNODANCE,
  FRESHERART,
  FRESHERPHOTOGRAPHY,
  TECHNOIDOL,
  MRMISSFRESHER,
} from '../../constants/images';
export const freshersCompetitions = [
  {
    name: 'Mr and Ms Fresher',
    description: '',
    image: MRMISSFRESHER,
    link: '/login',
  },
  {
    name: 'Techno Idol',
    description: 'Solo Singing Competition',
    image: TECHNOIDOL,
    link: '/login',
  },
  {
    name: 'Dance Techno Dance',
    description: 'Solo Dance Competition',

    image: DANCETECHNODANCE,

    link: '/login',
  },
  {
    name: 'Photography',
    description: 'Picture perfect memories',
    image: FRESHERPHOTOGRAPHY,
    link: '/login',
  },
  { 
    name: 'Art & Craft',
    description: 'Creativity in motion',

    image: FRESHERART,

    link: '/login',
  },
];

export const navLinks = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '#freshers-about' },
  { name: 'Events', link: '#freshers-events' },
  { name: 'Gallery', link: '#freshers-gallery' },
  { name: 'Team', link: '#freshers-team' },
  { name: 'Sponsor', link: '#freshers-sponsor' },
  { name: 'Contact Us', link: '#freshers-contact' },
];

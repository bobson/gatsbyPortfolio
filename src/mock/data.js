import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: ' Slobodan',
  subtitle: "I'm a React Web Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'hello.jpg',
  paragraphOne:
    'Results-oriented Front-end Developer love using React and Material UI, dedicated to creating and optimizing interactive, user-friendly, and feature-rich websites.',
  paragraphTwo:
    'Leverage analytical skills and strong attention to detail in order to deliver original and efficient web solutions, provide technical knowledge, build new websites from start to finish.',
  paragraphThree: ' ',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'CRWNClothing.png',
    title: 'CRWN Clothing',
    info:
      'E-commece web page build with React usig Redux for state managment routing with react-router, firebase for user storage, and stripe for payment, styled with scss.',
    info2: '',
    url: 'https://crwn-clothing-ltd.netlify.app/',
    repo: 'https://github.com/bobson/crwnclothing', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'BrainsterSpace.png',
    title: 'BrainsterSpace',
    info: 'Final Project of the Braister bootcamp build with React and Bootsrap',
    info2: '',
    url: 'https://brainsterspace-slobodan.netlify.app',
    repo: 'https://github.com/bobson/BrainsterSpace.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Covid-19.png',
    title: 'Covid-19 Tracker',
    info:
      'This project is a simple COVID-19 Virus tracker app build with React.js with all the latest features like hooks, styled with Materilal UI, visualization with Charts.js',
    info2: '',
    url: 'https://covidvirustracker.netlify.app',
    repo: 'https://github.com/bobson/covid_19_tracker', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/bmarkoski',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/bobi-mar',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/slobodan-markoski-93ab0517a/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/bobson',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

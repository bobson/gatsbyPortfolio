import { nanoid } from "nanoid";

// HEAD DATA
export const headData = {
  title: "", // e.g: 'Name | Developer'
  lang: "", // e.g: en, es, fr, jp
  description: "", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hello, my name is",
  name: " Slobodan",
  subtitle: "I'm a React Web Developer",
  cta: "",
};

// ABOUT DATA
export const aboutData = {
  img: "hello.jpg",
  paragraphOne:
    "Ambitious and motivated individual, proficient in both clean design and most bleeding-edge web technologies. I possess self-discipline, ability to work with a minimum of supervision and strive to perform my duties to ensure maximum accessibility.",
  paragraphTwo:
    "Results-oriented Front-end Developer love using React and Material UI, leverage analytical skills and strong attention to detail in order to deliver original and efficient web solutions, provide technical knowledge, build new websites from start to finish.",
  paragraphThree: " ",
  resume: "https://www.resumemaker.online/es.php", // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "CRWNClothing.png",
    title: "CRWN Clothing",
    info:
      "E-commece web page build with React usig Redux for state managment routing with react-router, firebase for user storage, and stripe for payment, styled with scss.",
    info2: "",
    url: "https://crwn-shop-react.netlify.app/",
    repo: "https://github.com/bobson/crwn-shop.git", // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: "AmazonClone.png",
    title: "Amazon Clone",
    info:
      "Amazon website with FULL E-Commerce Functionality build with React, firebase, stripe.",
    info2: "",
    url: "https://clone-6f1af.web.app/",
    repo: "https://github.com/bobson/amazon-clone", // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: "BrainsterSpace.png",
    title: "Brainster Space",
    info:
      "Final Project of the Braister bootcamp build with React and Bootsrap",
    info2: "",
    url: "https://brainsterspace-slobodan.netlify.app",
    repo: "https://github.com/bobson/BrainsterSpace.git", // if no repo, the button will not show u
  },

  // {
  //   id: nanoid(),
  //   img: "Carousel.png",
  //   title: "Responsive swipe Carousel ",
  //   info:
  //     "Responsie finger-folowing swipe Carousel component with infinite loop option, supports multiple slides on the screen, Supports scrolling to a selected slide,work for any HTML content, autoplay option.",
  //   info2: "",
  //   url: "https://carousel-finger-folow.netlify.app/",
  //   repo: "https://github.com/bobson/Carousel", // if no repo, the button will not show up
  // },

  {
    id: nanoid(),
    img: "virtualBanking.png",
    title: "Virtual Banking",
    info:
      "Banking landing page build with Next.js and styled components, and react scroll for smoot scroll animations ",
    info2: "",
    url: "https://next-virtula-banking-3yup2h0ni-bobson.vercel.app/",
    repo: "https://github.com/bobson/next-virtula-banking", // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: "E-commerce.png",
    title: "E-commerce",
    info:
      "This is a web shop build with react and commercejs.com, styled with material-UI. I am usig lates features on React and commercejs as a database for the products. Clean, fast, user friendly e-commerce page.",
    info2:
      "You can add as many products on the  commercejs.com and use it as a backend with wery simple API request for the products. Payment proccess with stripe",
    url: "https://re-commercejs.netlify.app",
    repo: "https://github.com/bobson/react-e-shop", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "Covid-19.png",
    title: "Covid-19 Tracker",
    info:
      "This project is a simple COVID-19 Virus tracker app build with React.js with all the latest features like hooks, styled with Materilal UI, visualization with Charts.js",
    info2: "",
    url: "https://covidvirustracker.netlify.app",
    repo: "https://github.com/bobson/covid_19_tracker", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "AdoptMe.png",
    title: "Adopt Me",
    info:
      "Pet adoption site where you can adopt various pets, from frontendmasters api call.",
    info2:
      "Build with react, parcel as bundler, it has 90% of React features, hooks, context, portal, reatch/router errorBounadry.",
    url: "https://pet-adopt.netlify.app",
    repo: "https://github.com/bobson/pet-adopt.git", // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "",
  btn: "",
  email: "",
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "twitter",
      url: "https://twitter.com/bmarkoski",
    },
    {
      id: nanoid(),
      name: "codepen",
      url: "https://codepen.io/bobi-mar",
    },
    {
      id: nanoid(),
      name: "linkedin",
      url: "https://www.linkedin.com/in/slobodan-markoski-93ab0517a/",
    },
    {
      id: nanoid(),
      name: "github",
      url: "https://github.com/bobson",
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  threejs,
  maya,
  csharp,
  flutter,
  tech_github,
  c,
  woop,
  diskyver,
  keimyung,
  redditech,
  deadlands,
  mazeRunner,
  yuri,
  marioBros,
  oldPortfolio,
  squirrel,
  walkingDragon,
  flyingDragon,
  gwenSideView,
  gwenTopView,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Game Developer",
    icon: creator,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "3D animator",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "Maya",
    icon: maya,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "github",
    icon: tech_github,
  },
  {
    name: "c",
    icon: c,
  },
];

const experiences = [
  {
    title: "React Native developer",
    company_name: "WOOP",
    icon: woop,
    iconBg: "#383E56",
    date: "October 2020 - December 2020",
    points: [
      "Harmonise all your delivery channels into a single technological solution.",
      "Boost your growth and use new tools to facilitate your carriers operations",
      "Mobile application to track the delivery of packages",
    ],
  },
  {
    title: "Flutter mobile developer",
    company_name: "Diskyver",
    icon: diskyver,
    iconBg: "#E6DEDD",
    date: "May 2021 - August 2022",
    points: [
      "Machine learning solution allows you to make the right choices to protect yourself against VoIP risks (detect cyber attacks on telephone networks).",
      "Mobile application to report and block unwanted call to feed the database",
    ],
  },
  {
    title: "Game development",
    company_name: "Keimyung University",
    icon: keimyung,
    iconBg: "#383E56",
    date: "September 2022 - Jully 2023",
    points: [
      "University based in South Korea",
      "Developement of variety of 2D/3D games with Unity, survival runner roguelike",
    ],
  },
  {
    title: "Animation development",
    company_name: "Keimyung University",
    icon: keimyung,
    iconBg: "#E6DEDD",
    date: "Febuary 2023 - Jully 2023",
    points: ["Animation using Maya software, making walk run flying animation"],
  },
];

const animations = [
  {
    name: "Flying Dragon",
    video: flyingDragon,
  },
  {
    name: "Gwen",
    video: gwenSideView,
  },
  {
    name: "Gwen",
    video: gwenTopView,
  },
  {
    name: "Squirrel animation",
    video: squirrel,
  },
  {
    name: "Walking Dragon",
    video: walkingDragon,
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "Old portolio to show my profile the work I did and my passions in ReactJS",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: oldPortfolio,
    source_code_link: "https://github.com/GregoireDuhem/MyPortfolio",
  },
  {
    name: "Redditech",
    description:
      "Mobile application who immitate reddit application fonctionnality (view post, upvote, hot/new post, search/follow a thread, go on a thread page, your profile).",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "RedditAPI",
        color: "orange-text-gradient",
      },
    ],
    image: redditech,
    source_code_link: "https://github.com/GregoireDuhem/Redditech-Epitech-",
  },
  {
    name: "DeadLands",
    description:
      "3D game where you need to survive in a post-apocalyptic world with a lot of zombies in the city. You can loot some weapons and medkit to help you survive.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "Animations",
        color: "green-text-gradient",
      },
    ],
    image: deadlands,
    source_code_link: "https://github.com/GregoireDuhem",
  },
  {
    name: "Maze Runner",
    description:
      "A parkour game with a lot of obstacles the goal is to finish the runs as quickly as possible. The game is composed of 2 levels and one special run where you need to beat a boss.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
    ],
    image: mazeRunner,
    source_code_link: "https://github.com/GregoireDuhem",
  },
  {
    name: "Yuri",
    description:
      "Yuri is a 2D roguelite where you play as a demi-god there is 5 worlds. Each world have a specific element and several levels. You can play as a melee or distance and ugrade your equipment.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "Animations",
        color: "green-text-gradient",
      },
    ],
    image: yuri,
    source_code_link: "https://github.com/GregoireDuhem",
  },
  {
    name: "MarioBros",
    description:
      "MarioBros clone, 2D parkour game where you can collect coins and avoid/kill enemies, kill the boss and reach the flag to go to the next level.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "Animations",
        color: "green-text-gradient",
      },
    ],
    image: marioBros,
    source_code_link: "https://github.com/GregoireDuhem",
  },
];

export { services, technologies, experiences, animations, projects };

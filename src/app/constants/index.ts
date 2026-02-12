const navLinks = [
  {
    name: "About me",
    link: "#about-me",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Projects",
    link: "#work",
  },
];

const words = [
  { id: "1", text: "Ideas", imgPath: "/images/ideas.svg" },
  { id: "2", text: "Patterns", imgPath: "/images/concepts.svg" },
  { id: "3", text: "Models", imgPath: "/images/designs.svg" },
  { id: "4", text: "Code", imgPath: "/images/code.svg" },
  { id: "5", text: "Ideas", imgPath: "/images/ideas.svg" },
  { id: "6", text: "Patterns", imgPath: "/images/concepts.svg" },
  { id: "7", text: "Models", imgPath: "/images/designs.svg" },
  { id: "8", text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { id: 1, value: 3, suffix: "+", label: "Years of Learning" },
  { id: 2, value: 15, suffix: "+", label: "Projects Built" },
  { id: 3, value: 1, suffix: "+", label: "Internship" },
  { id: 4, value: 4, suffix: "+", label: "Research Projects" },
];

const projects = [
  // {
  //   techStack: "React and Reducer",
  //   url: "https://github-finder-steel-nine.vercel.app/",
  //   title: "Github Finder",
  //   desc: "React app to find users on github and navigate to their profiles using github API.",
  // },
  {
    techStack: "Python, Tensorflow and Keras",
    url: "https://github.com/ShrutiSemwal/MTech.-Dissertation-UNet-with-Attention-Mechanism",
    title: "UNet with Attention-DL Model",
    desc: "Research work contributed to the integration of green building domain and deep learning domain for sustainable development using AI.",
  },
  {
    techStack: "Python, Tensorflow and Keras",
    url: "https://github.com/ShrutiSemwal/Keras-API-Project",
    title: "Keras API Project",
    desc: "Classification Model with an accuracy of 88% to predict whether or not a borrower would pay back their loan.",
  },
];

const techStackImgs = [
  {
    name: "React.js",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Next.js",
    imgPath: "/images/logos/nextjs.png",
  },
  {
    name: "SQL",
    imgPath: "/images/logos/sql.png",
  },
  {
    name: "Python",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Tensorflow",
    imgPath: "/images/logos/tf.webp",
  },
];

const techStackIcons = [
  {
    name: "React.js",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0] as [number, number, number],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0] as [number, number, number],
  },
  {
    name: "Node.js",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0] as [number, number, number],
  },
  {
    name: "Typescript",
    modelPath: "/models/",
    scale: 0.05,
    rotation: [0, 0, 0] as [number, number, number],
  },
  {
    name: "Next.js",
    modelPath: "/models/",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0] as [number, number, number],
  },
];

const expCards = [
  {
    review:
      "Displayed strong initiative and technical rigor in developing deep learning models for different problem statements during master's research.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.jpg",
    title: "Research Scholar",
    date: "August 2024 - March 2025",
    responsibilities: [
      "Engineered a deep learning pipeline using Python, TensorFlow, and OpenCV to develop a U-Net-based semantic segmentation model for urban building facades, achieving 98.1% accuracy and 87% mean Intersection over Union.",
      "Authored and presented a conference paper at the 4th International Conference on Innovative Sustainable Computational Technologies-2024 (CISCT) co-sponsored by IEEE UP Section.",
      "Authored a thesis exploring deep learning applications, with a journal under review in Evergreen.",
      "Published Patent application, demonstrating measurable air pollution levels reduction; from 500 ppm to 165 ppm, using Arduino, MQ135 sensor, and cloud-based monitoring for sustainable Urban Greening",
    ],
  },
  {
    review:
      "Achieved a performance evaluation score of 4.2/5 for consistent learning, teamwork, and project contribution.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Programmer Analyst Trainee",
    date: "January 2022 - July 2022",
    responsibilities: [
      "Completed an intensive ADM DotNet FSE internship, with an overall score of 87%.",
      "Developed and delivered a .NET Core MVC web application in a cross-functional 5-member team (60-member cohort), meeting all sprint goals in an Agile environment.",
      "Achieved a performance evaluation score of 4.2/5.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
];

const socialImgs = [
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/shrutisemwal/",
    imgPath: "/images/linkedin.png",
  },
  {
    name: "github",
    url: "https://github.com/ShrutiSemwal",
    imgPath: "/images/github.png",
  },
  {
    name: "medium",
    url: "https://medium.com/@semwalshruti450",
    imgPath: "/images/medium.png",
  },
];

export {
  words,
  projects,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};

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
  { id: "2", text: "Concepts", imgPath: "/images/concepts.svg" },
  { id: "3", text: "Designs", imgPath: "/images/designs.svg" },
  { id: "4", text: "Code", imgPath: "/images/code.svg" },
  { id: "5", text: "Ideas", imgPath: "/images/ideas.svg" },
  { id: "6", text: "Concepts", imgPath: "/images/concepts.svg" },
  { id: "7", text: "Designs", imgPath: "/images/designs.svg" },
  { id: "8", text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { id: 1, value: 3, suffix: "+", label: "Years of Learning" },
  { id: 2, value: 15, suffix: "+", label: "Projects Built" },
  { id: 3, value: 1, suffix: "+", label: "Internship" },
  { id: 4, value: 4, suffix: "+", label: "Research Projects" },
];

const projects = [
  {
    techStack: "React and Reducer",
    url: "https://github-finder-steel-nine.vercel.app/",
    title: "Github Finder",
    desc: "React app to find users on github and navigate to their profiles using github API.",
  },
  {
    techStack: "Python, Tensorflow and Keras",
    url: "",
    title: "UNet with Attention-DL Model",
    desc: "Research work contributed to the integration of green building domain and deep learning domain for sustainable development using AI.",
  },
  {
    techStack: "Python, Tensorflow and Keras",
    url: "https://github.com/ShrutiSemwal/Keras-API-Project",
    title: "Keras API Project",
    desc: "Classification Model to predict whether or not a borrower would pay back their loan.",
  },
];

const techStackImgs = [
  {
    name: "Javascript",
    imgPath: "/images/logos/js.webp",
  },
  {
    name: "React.js",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Next.js",
    imgPath: "/images/logos/nextjs.png",
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
      "Displayed strong initiative and technical rigor in developing deep learning models for building segmentation during master's research.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.jpg",
    title: "Research Scholar",
    date: "August 2024 - April 2025",
    responsibilities: [
      "Developed a robust U-Net-based building semantic segmentation model with a validation accuracy of 98.1% and mean IoU of 87%, targeting sustainable architecture applications.",
      "Authored a thesis and co-wrote multiple journals and a conference paper, focusing on deep learning for green building segmentation.",
      "Filed for a patent on a novel sustainable approach integrating edge detection and attention mechanism in U-Net architecture.",
      // "Utilized Python, TensorFlow, and OpenCV for data preprocessing, model training, and performance evaluation.",
      "Collaborated with faculty advisors to optimize models and align research output with problem statements.",
    ],
  },
  {
    review:
      "Contributed meaningfully during my tenure at Cognizant, showing a keen interest in full-stack development and collaborative problem solving.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Programmer Analyst Trainee",
    date: "January 2022 - July 2022",
    responsibilities: [
      "Completed an intensive internship under the ADM DotNet FSE React Integrated domain.",
      "Collaborated with a cross-functional cohort to design and build a functional web application using .NET Core by following Agile methodology .",
      "Published a project repository that received 7 stars on GitHub, demonstrating community recognition and code quality.",
      "Achieved a performance evaluation score of 4.2/5 for consistent learning, teamwork, and project contribution.",
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

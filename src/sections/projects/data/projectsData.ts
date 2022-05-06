import mecatronicafromscratch from "../../../assets/projects/mecatronicafromscratch.png";
import scientificmolding from "../../../assets/projects/scientificmolding.png";
import numericalmethods from "../../../assets/projects/numericalmethods.png";
import opticaltest from "../../../assets/projects/opticaltest.png";
import bomapp from "../../../assets/projects/bomsearcherpng.png";
import realtimecharts from "../../../assets/projects/realtimecharts.png";
import bitacora from "../../../assets/projects/bitacoraweb.png";
import ictanalytics from "../../../assets/projects/ictanalytics.png";
import tickets from "../../../assets/projects/ticketsportal.png";

export interface Project {
  title: string;
  description: string;
  image: string;
  buttonText?: string;
  link?: string;
}

const ProjectsList: Project[] = [
  {
    title: "Mecatronica from Scratch",
    description: "One of my first projects, created with Angular. Website blog aimed for mechatronics engineering students.",
    image: mecatronicafromscratch,
    buttonText: "Live Demo",
    link: "https://maxponmar.github.io/MecatronicaFromScratch/#/home"
  },
  {
    title: "Scientific Molding",
    description: "Created with Angular. Graphs and spredsheet tables for input data.",
    image: scientificmolding,
    buttonText: "Live Demo",
    link: "https://maxponmar.github.io/ScientificMolding/#/home"
  },
  {
    title: "Numerical Methods",
    description: "Numerical methods library and GUI with graph optioncs, aimed to help students understand how some numerical algorithms work.",
    image: numericalmethods,
    buttonText: "Source Code.",
    link: "https://github.com/maxponmar/MetodosNumericosCsharpWinForm"
  },
  {
    title: "Analysis Team Log",
    description: "Project developed using ReactJS, .NetCore and Sqlite. This project helps the analysis team to log electrical or mechanical fials found on units, in order to search from them later if needed.",
    image: bitacora,
  },
  {
    title: "Optical Test Portal",
    description: "Full-stack project that allows to query for optical test images, showing the history of the product and a list of images if they are available. It has a complete admin panel to controll all the station, giving flexibility and scalability for future optical tests implementations or changes.",
    image: opticaltest,
  },
  {
    title: "BOM Web Application",
    description: "This page retrieves the part number and description of a specific component from one product model, and also has the option to search how many (and which) components the product has from that part number.",
    image: bomapp,
  },
  {
    title: "Real-time Process Charts",
    description: "This web page shows real-time charts of a rework process. From this page the user can see the current status of the process and see the profits that have been generated (in terms of reworked units).",
    image: realtimecharts,
  },
  {
    title: "ICT Analytics",
    description: "A project that exposes the behaviour of ICT stations between two dates, base on the product model and component that the user wants to analyze, in order to make decision based on that information.",
    image: ictanalytics,
  },
  {
    title: "ICT Tickets",
    description: "Web portal that allows the user get shorts tickets in a more versatile way. Firstly developed in Windows Forms and the refactored and adapted to a web portal using ReactJs and .NetCore.",
    image: tickets,
  }
]

export default ProjectsList;
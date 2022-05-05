import Section from "../../components/Section"
import ProjectCard from "./components/ProjectCard";
import mecatronicafromscratch from "../../assets/projects/mecatronicafromscratch.png";

const Projects = () => {
  return <Section title="Projects">
    <ProjectCard title="Mecatronica from Scratch" description="Website blog aimed for mechatronics engineering students." image={mecatronicafromscratch} alt="Mechatronica from Scratch" buttonText="Live Demo" link="https://maxponmar.github.io/MecatronicaFromScratch/#/home" />
  </Section>
}

export default Projects;
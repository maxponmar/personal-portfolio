import Section from "../../components/Section"
import ProjectCard from "./components/ProjectCard";
import ProjectsList from "./data/projectsData";


const Projects = () => {
  return <Section title="Projects">
    {/* TODO: Fix responsive layout for small screens (height) */}
    <div className="flex flex-wrap items-center justify-center gap-4">
      {ProjectsList.map((project, index) =>
        <ProjectCard key={index} project={project} />
      )}
    </div>
  </Section>
}

export default Projects;
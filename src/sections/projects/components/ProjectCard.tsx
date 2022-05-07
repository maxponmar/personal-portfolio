import { Project } from "../data/projectsData";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="mx-5 max-h-[450px] sm:h-[450px] sm:mx-1 sm:hover:scale-105 bg-white shadow-md border border-gray-200 rounded-lg max-w-sm duration-75">
      <img className="rounded-t-lg w-full max-h-48 mx-auto" src={project.image} alt={project.title} />
      <div className="p-5">
        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{project.title}</h5>
        <p className="font-normal text-gray-700 mb-3">{project.description}</p>
        {project.buttonText && project.link &&
          <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center" href={project.link} target="_blank">
            {project.buttonText}
          </a>
        }
      </div>
    </div>
  )
}
export default ProjectCard;
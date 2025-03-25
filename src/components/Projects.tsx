import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <div className="mx-[10%] py-[5%] md:mx-[15%]" id="projects">
      <p className="from-stanley-black-100 to-stanley-gray-100 size-max bg-gradient-to-r bg-clip-text pb-4 text-3xl font-semibold text-transparent md:text-5xl">
        Projects
      </p>
      <div className="border-stanley-gray-300 border-b-1" />
      {projects.map(
        ({ image, name, description, icons, github, website }, index) => (
          <ProjectCard
            image={image}
            name={name}
            description={description}
            icons={icons}
            github={github}
            website={website}
            key={index}
          />
        ),
      )}
    </div>
  );
};

export default Projects;

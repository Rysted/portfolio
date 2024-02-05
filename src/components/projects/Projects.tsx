import ProjectsCard from "../common/ProjectsCard";

// Data for the projects
import { ProjectInfo } from "./ProjectInfo.ts";

// Icons
import { CodeIcon } from "../../Icons/Icons";

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-5 py-20 select-none bg-light_background dark:bg-dark_background transition-all duration-200 ease-in-out"
    >
      <header className="flex justify-start items-center gap-x-2 md:max-w-[800px] mx-auto">
        <CodeIcon height="h-8" />
        <h2 className="text-3xl font-bold text-light_text dark:text-dark_text transition-all duration-200 ease-in-out">
          Proyectos
        </h2>
      </header>
      <article className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[800px] mx-auto pt-10">
        {ProjectInfo.map(
          (
            project: {
              title: string;
              description: string;
              code: string;
              demo: string;
              image: string;
              tags: string[];
            },
            index: number
          ) => (
            <ProjectsCard
              key={index}
              title={project.title}
              description={project.description}
              code={project.code}
              demo={project.demo}
              image={project.image}
              tags={project.tags}
            />
          )
        )}
      </article>
    </section>
  );
};

export default Projects;

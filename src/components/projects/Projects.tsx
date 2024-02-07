import { useState } from "react";

import ProjectsCard from "../common/ProjectsCard";

// Data for the projects
import { ProjectData } from "./ProjectData.ts";

// Icons
import { CodeIcon } from "../../Icons/Icons";

const Projects = () => {
  const cardsInitially = 6;

  const [visibleCards, setVisibleCards] = useState<number>(cardsInitially);

  const ShowMore = () => {
    const remainingCards = ProjectData.length - visibleCards;
    const cardsToAdd = Math.min(cardsInitially, remainingCards);
    setVisibleCards(visibleCards + cardsToAdd);
  };

  return (
    <section id="projects" className="px-5 py-10 select-none">
      <header className="mt-20 flex justify-start items-center gap-x-2 md:max-w-[800px] lg:max-w-[1100px] mx-auto">
        <CodeIcon styles="w-8 h-8" colors={true} />
        <h2 className="text-3xl font-bold text-light_text dark:text-dark_text transition-all duration-200 ease-in-out">
          Proyectos
        </h2>
      </header>
      <article className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 max-w-[800px] lg:max-w-[1100px] mx-auto pt-10">
        {ProjectData.slice(0, visibleCards).map(
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
              alt={`Imagen de ${project.title}`}
            />
          )
        )}
      </article>
      {visibleCards < ProjectData.length ? (
        <button
          className="mt-10 text-lg block mx-auto text-light_text dark:text-dark_text hover:text-primary dark:hover:text-primary transition-all duration-200 ease-in-out"
          onClick={ShowMore}
          aria-label="Mostrar más proyectos"
          title="Mostrar más proyectos"
        >
          Mostrar más
        </button>
      ) : cardsInitially > 6 ? (
        <p className="mt-10 w-max block mx-auto text-light_text_secondary dark:text-dark_text_secondary">
          No hay más resultados
        </p>
      ) : null}
    </section>
  );
};

export default Projects;

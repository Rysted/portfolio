// Icons
import { CodeIcon } from "../Icons/Icons";

const Projects = () => {
  return (
    <section
      id="services"
      className="select-none px-5 md:max-w-[800px] mx-auto pt-2 pb-20"
    >
      <header className="flex justify-start items-center gap-x-2">
        <CodeIcon height="h-8" />
        <h2 className="text-3xl font-bold">Proyectos</h2>
      </header>
      <article>
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h3>Title</h3>
            <p>Descripción</p>
          </div>
          <div>
            <ul>
              <li>Tecnologías</li>
              <li>Tecnologías</li>
              <li>Tecnologías</li>
            </ul>
          </div>
          <div>
            <a href="">Código</a>
            <a href="">Demo</a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Projects;

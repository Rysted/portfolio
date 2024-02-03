import { LinkedIn, GitHub, Gmail } from "../Icons/Icons";

const Home = () => {
  return (
    <section className="flex justify-center items-center h-screen select-none">
      <article className=" max-w-[500px]">
        <h1 className="text-4xl md:text-5xl">
          ¡Hola! Soy <span className="text-primary font-bold">Rysted</span>,
        </h1>
        <p className="text-1xl md:text-2xl mt-5">
          <span className="text-2xl text-primary font-bold">
            Desarrollador Web Full Stack
          </span>{" "}
          Creador de soluciones digitales para empresas y emprendedores.
        </p>

        <nav className="flex flex-wrap justify-start gap-5 mt-5">
          <a
            href="https://www.linkedin.com/in/marcelo-sebastian-suarez"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-2 bg-primary text-dark_text px-3 py-1 rounded-full hover:bg-primary_hover hover:scale-110  transition-all duration-200 ease-in-out"
          >
            <LinkedIn />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Rysted"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-2 bg-primary text-dark_text px-3 py-1 rounded-full hover:bg-primary_hover hover:scale-110  transition-all duration-200 ease-in-out"
          >
            <GitHub />
            <span>GitHub</span>
          </a>
          <a
            href="mailto:rysted.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-2 bg-primary text-dark_text px-3 py-1 rounded-full hover:bg-primary_hover hover:scale-110  transition-all duration-200 ease-in-out"
          >
            <Gmail />
            <span>Gmail</span>
          </a>
        </nav>
      </article>
    </section>
  );
};

export default Home;

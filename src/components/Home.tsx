const Home = () => {
  return (
    <section className="flex justify-center items-center h-screen mt-10 md:mt-0">
      <article className=" max-w-[800px]">
        <h1 className="text-4xl md:text-5xl">
          ¡Hola! Soy <span className="text-primary font-bold">Rysted</span>,
        </h1>
        <h2 className="text-2xl mt-5">
          <span className="text-3xl text-primary font-bold">
            Desarrollador Web Full Stack
          </span>{" "}
          Creador de soluciones digitales para empresas y emprendedores.
        </h2>
        <nav className="flex gap-x-5 mt-5">
          <a
            href="https://www.linkedin.com/in/marcelo-sebastian-suarez"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-dark_text px-3 py-1 rounded-full hover:bg-primary_hover transition-all duration-300 ease-in-out"
          >
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Rysted"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-dark_text px-3 py-1 rounded-full hover:bg-primary_hover transition-all duration-300 ease-in-out"
          >
            <span>GitHub</span>
          </a>
          <a
            href="mailto:rysted.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-dark_text px-3 py-1 rounded-full hover:bg-primary_hover transition-all duration-300 ease-in-out"
          >
            <span>rysted.dev@gmail.com</span>
          </a>
        </nav>
      </article>
    </section>
  );
};

export default Home;

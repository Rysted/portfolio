import { LinkedIn, GitHub, Gmail, WhatsApp } from "../Icons/Icons";
import Redirect from "./common/Redirect";

const Home = () => {
  return (
    <section
      id="home"
      className="items-center lg:p-5 pt-24 lg:pt-5 h-screen select-none"
    >
      <article className="w-full h-full p-5 rounded-xl flex justify-center items-center lg:bg-light_highlight lg:dark:bg-dark_highlight transition-all duration-200 ease-in-out">
        <div className="max-w-[800px] lg:max-w-[1100px]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-light_text dark:text-dark_text transition-all duration-200 ease-in-out">
            ¡Hola! Soy{" "}
            <b className="text-primary-500 dark:text-primary-300 transition-all duration-200 ease-in-out">
              Rysted
            </b>
            ,
          </h1>
          <b className="text-2xl lg:text-3xl block pt-5 text-primary-500 dark:text-primary-300 transition-all duration-200 ease-in-out">
            Desarrollador Web Full Stack
          </b>
          <p className="text-sm md:text-lg lg:text-xl text-light_text dark:text-dark_text transition-all duration-200 ease-in-out">
            Creador de soluciones digitales para empresas y emprendedores.
          </p>

          <nav className="flex flex-wrap justify-start items-center gap-2 md:gap-5 mt-5">
            <Redirect
              url="https://www.linkedin.com/in/marcelo-sebastian-suarez"
              text="LinkedIn"
              title="Ir a mi perfil de LinkedIn"
            >
              <LinkedIn />
            </Redirect>

            <Redirect
              url="https://github.com/Rysted"
              text="GitHub"
              title="Ir a mi perfil de GitHub"
            >
              <GitHub />
            </Redirect>

            <Redirect
              url="mailto:rysted.dev@gmail.com"
              text="Gmail"
              title="Contactarme por Gmail"
            >
              <Gmail />
            </Redirect>

            <Redirect
              url="https://wa.me/+541157347309?text=Hola%20Rysted,%20me%20interesaría%20contratar%20tus%20servicios.%20%0A¿Podemos%20hablar%20más%20al%20respecto?"
              text="WhatsApp"
              title="Contactarme por WhatsApp"
            >
              <WhatsApp />
            </Redirect>
          </nav>
        </div>
      </article>
    </section>
  );
};

export default Home;

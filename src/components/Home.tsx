import { LinkedIn, GitHub, Gmail, WhatsApp } from "../Icons/Icons";
import SocialLink from "./common/SocialLink";

const Home = () => {
  return (
    <section
      id="home"
      className="items-center p-5 h-screen select-none bg-light_background dark:bg-dark_background transition-all duration-200 ease-in-out"
    >
      <article className="w-full h-full rounded-3xl flex justify-center items-center bg-light_highlight dark:bg-dark_highlight transition-all duration-200 ease-in-out">
        <div className="max-w-[500px] pt-5 md:max-w-[800px] lg:max-w-[1100px]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-light_text dark:text-dark_text transition-all duration-200 ease-in-out">
            ¡Hola! Soy <b className="text-primary">Rysted</b>,
          </h1>
          <b className="text-2xl lg:text-3xl text-primary block pt-5">
            Desarrollador Web Full Stack
          </b>
          <p className="text-sm md:text-lg lg:text-xl text-light_text dark:text-dark_text transition-all duration-200 ease-in-out">
            Creador de soluciones digitales para empresas y emprendedores.
          </p>

          <nav className="flex flex-wrap justify-start gap-2 md:gap-5 mt-5">
            <SocialLink
              url="https://www.linkedin.com/in/marcelo-sebastian-suarez"
              text="LinkedIn"
            >
              <LinkedIn />
            </SocialLink>

            <SocialLink url="https://github.com/Rysted" text="GitHub">
              <GitHub />
            </SocialLink>

            <SocialLink url="mailto:rysted.dev@gmail.com" text="Gmail">
              <Gmail />
            </SocialLink>

            <SocialLink
              url="https://wa.me/+541157347309?text=Hola%20Rysted,%20me%20interesaría%20contratar%20tus%20servicios.%20%0A¿Podemos%20hablar%20más%20al%20respecto?"
              text="WhatsApp"
            >
              <WhatsApp />
            </SocialLink>
          </nav>
        </div>
      </article>
    </section>
  );
};

export default Home;

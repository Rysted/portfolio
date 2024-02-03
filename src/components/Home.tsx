import { LinkedIn, GitHub, Gmail, WhatsApp } from "../Icons/Icons";
import SocialLink from "./common/SocialLink";

const Home = () => {
  return (
    <section className="flex justify-center items-center h-screen pt-5 select-none">
      <article className="max-w-[500px] md:max-w-[660px]">
        <h1 className="text-4xl md:text-5xl">
          ¡Hola! Soy <b className="text-primary">Rysted</b>,
        </h1>
        <p className="text-1xl md:text-2xl mt-5">
          <b className="text-2xl md:text-3xl text-primary">
            Desarrollador Web Full Stack
          </b>{" "}
          Creador de soluciones digitales para empresas y emprendedores.
        </p>

        <nav className="flex flex-wrap justify-start gap-2 md:gap-5 mt-5">
          <SocialLink
            url="https://www.linkedin.com/in/marcelo-sebastian-suarez"
            Children={LinkedIn}
            text="LinkedIn"
          />
          <SocialLink
            url="https://github.com/Rysted"
            Children={GitHub}
            text="GitHub"
          />
          <SocialLink
            url="mailto:rysted.dev@gmail.com"
            Children={Gmail}
            text="Gmail"
          />
          <SocialLink
            url="https://wa.me/+541157347309?text=Hola%20Rysted,%20me%20interesaría%20contratar%20tus%20servicios.%20%0A¿Podemos%20hablar%20más%20al%20respecto?"
            Children={WhatsApp}
            text="WhatsApp"
          />
        </nav>
      </article>
    </section>
  );
};

export default Home;

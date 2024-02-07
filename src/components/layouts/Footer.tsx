import IconLink from "../common/IconLink";

// Icons
import { GitHub, LinkedIn } from "../../Icons/Icons";

const Footer = () => {
  return (
    <footer className="px-5 pt-10 lg:pt-32 pb-36 lg:pb-5 select-none font-poppins bg-light_highlight dark:bg-dark_highlight text-light_text dark:text-dark_text transition-all duration-200 ease-in-out">
      <section className="xl:pt-30 max-w-[800px] lg:max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <span className="text-2xl">© 2024 - Rysted</span>
          <div className="flex justify-center items-center gap-4">
            <IconLink
              url="https://www.linkedin.com/in/marcelo-sebastian-suarez"
              title="Ir a mi perfil de LinkedIn"
            >
              <LinkedIn hover={true} styles="w-16 h-16 fill-light_text" />
            </IconLink>

            <IconLink
              url="https://github.com/Rysted"
              title="Ir a mi perfil de GitHub"
            >
              <GitHub hover={true} styles="w-16 h-16 fill-light_text" />
            </IconLink>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

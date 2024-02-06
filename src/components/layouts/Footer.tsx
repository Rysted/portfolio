import IconLink from "../common/IconLink";

// Icons
import { GitHub, LinkedIn } from "../../Icons/Icons";

const Footer = () => {
  return (
    <footer className="px-5 pt-10 pb-5 select-none font-poppins bg-light_highlight dark:bg-dark_highlight text-light_text dark:text-dark_text transition-all duration-200 ease-in-out">
      <section className="max-w-[800px] lg:max-w-[1100px] mx-auto lg:pr-52">
        <div className="flex justify-center items-center gap-4 mt-10">
          <span className="text-sm">© 2024 - Rysted</span>
          <IconLink
            url="https://www.linkedin.com/in/marcelo-sebastian-suarez"
            title="Ir a mi perfil de LinkedIn"
          >
            <LinkedIn hover={true} styles="w-5 h-5 fill-light_text" />
          </IconLink>

          <IconLink
            url="https://github.com/Rysted"
            title="Ir a mi perfil de GitHub"
          >
            <GitHub hover={true} styles="w-5 h-5 fill-light_text" />
          </IconLink>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

import IconLink from "../common/IconLink";

// Icons
import { GitHub, LinkedIn } from "../../Icons/Icons";

const Footer = () => {
  return (
    <footer className="px-5 pt-10 pb-5 select-none font-poppins bg-light_highlight dark:bg-dark_highlight text-light_text dark:text-dark_text">
      <section className="md:max-w-[800px] lg:max-w-[1100px]">
        <div className="flex items-center gap-4">
          <h3 className="text-xl">Conectemos</h3>

          <IconLink
            url="https://www.linkedin.com/in/marcelo-sebastian-suarez"
            text="LinkedIn"
          >
            <LinkedIn hover={true} styles="w-6 h-6" />
          </IconLink>

          <IconLink url="https://github.com/Rysted" text="GitHub">
            <GitHub hover={true} styles="w-6 h-6" />
          </IconLink>
        </div>

        <span className="block w-max mx-auto mt-10 text-sm md:text-base">
          © 2024 - Rysted
        </span>
      </section>
    </footer>
  );
};

export default Footer;

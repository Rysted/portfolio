import { useState } from "react";

import Menu from "./Menu";
import Theme from "./Theme";

// Icons
import {
  Home,
  AboutMe,
  NavArrowDown,
  NavArrowRight,
  Services,
  Contact,
} from "../../Icons/Icons";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [subMenu, setSubMenu] = useState<boolean>(false);

  const toggleSubMenu = () => {
    setSubMenu(!subMenu);
  };

  const toggleSidebar = () => {
    setIsOpenMenu(!isOpenMenu);
    document.body.style.overflowY = isOpenMenu ? "scroll" : "hidden";
  };

  return (
    <header className="relative overflow-x-hidden">
      <div className="md:hidden fixed top-0 w-full h-20 flex justify-between p-5 bg-light_background dark:bg-dark_background shadow-light_bottom z-10">
        <img
          src="./logotipo.png"
          alt="Icono del logotipo"
          className="w-10 my-auto dark:invert"
        />
        <Menu isOpenMenu={isOpenMenu} toggleSidebar={toggleSidebar} />
      </div>
      <span
        className={`${
          isOpenMenu ? "fixed" : "hidden"
        } md:hidden w-full h-svh overflow-y-scroll bg-dark_background dark:bg-light_background opacity-30 cursor-pointer`}
        onClick={toggleSidebar}
      ></span>
      <div
        className={`bg-light_background dark:bg-dark_background fixed ${
          isOpenMenu ? "right-0" : "-right-56"
        } top-20 md:right-0 md:top-0 w-52 h-screen flex-col justify-start px-0 font-poppins shadow-light_left ease-linear transition-all duration-300 z-10`}
      >
        <div className="flex justify-end">
          <img
            src="./logotipo.png"
            alt="Icono del logotipo"
            className={`opacity-0 w-0 my-0 md:opacity-100 md:w-10 md:my-8 md:mx-auto md:mb-5 md:block dark:invert`}
          />
        </div>

        <nav className="md:block h-svh overflow-x-auto pb-24">
          <ul className="flex flex-col gap-y-2 px-6">
            <li>
              <a href="#home" className="group flex gap-x-3 py-2">
                <Home hover={true} />
                <span className="text-base font-semibold dark:text-dark_text group-hover:text-primary transition-all ease-in duration-200">
                  Inicio
                </span>
              </a>
            </li>
            <li>
              <button
                className="group flex justify-between w-full py-2 transition-all ease-in duration-200"
                onClick={toggleSubMenu}
              >
                <div className="flex gap-x-3">
                  <AboutMe hover={true} />
                  <span className="text-base font-semibold dark:text-dark_text group-hover:text-primary transition-all ease-in duration-200">
                    Sobre mí
                  </span>
                </div>
                <NavArrowDown hover={true} subMenu={subMenu} />
              </button>
              <div
                className={`${
                  subMenu ? "h-28 py-2" : "h-0 py-0"
                } overflow-hidden flex flex-col justify-between bg-light_highlight dark:bg-dark_highlight rounded transition-all ease-in duration-200`}
              >
                <a href="#skills" className="group flex gap-x-3">
                  <NavArrowRight hover={true} />
                  <span className="text-base font-medium text-light_text_secondary dark:text-dark_text group-hover:text-primary transition-all ease-in duration-200">
                    Habilidades
                  </span>
                </a>
                <a href="#projects" className="group flex gap-x-3">
                  <NavArrowRight hover={true} />
                  <span className="text-base font-medium text-light_text_secondary dark:text-dark_text group-hover:text-primary transition-all ease-in duration-200">
                    Proyectos
                  </span>
                </a>
                <a href="#formation" className="group flex gap-x-3">
                  <NavArrowRight hover={true} />
                  <span className="text-base font-medium text-light_text_secondary dark:text-dark_text group-hover:text-primary transition-all ease-in duration-200">
                    Fromación
                  </span>
                </a>
              </div>
            </li>
            <li>
              <a
                href="#services"
                className="group flex gap-x-3 py-2 transition-all ease-in duration-300"
              >
                <Services hover={true} />
                <span className="text-base font-semibold dark:text-dark_text group-hover:text-primary transition-all ease-in duration-200">
                  Servicios
                </span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="group flex gap-x-3 py-2 transition-all ease-in duration-300"
              >
                <Contact hover={true} />
                <span className="text-base font-semibold dark:text-dark_text group-hover:text-primary transition-all ease-in duration-200">
                  Contacto
                </span>
              </a>
            </li>
            <li>
              <Theme />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

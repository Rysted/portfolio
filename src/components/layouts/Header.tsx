import { useState } from "react";

import Menu from "./Menu";
import Theme from "./Theme";

// Icons
import { Home, AboutMe, Services, Contact } from "../../Icons/Icons";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsOpenMenu(!isOpenMenu);
    document.body.style.overflowY = isOpenMenu ? "scroll" : "hidden";
  };

  return (
    <header>
      <div className="md:hidden fixed top-0 w-full h-20 flex justify-between p-5 bg-light_background dark:bg-dark_background shadow-light_bottom">
        <img
          src="./logotipo.png"
          alt="Icono del logotipo"
          className="w-10 my-auto dark:invert"
        />
        <Menu isOpenMenu={isOpenMenu} toggleSidebar={toggleSidebar} />
      </div>
      <div
        className={`bg-light_background dark:bg-dark_background fixed ${
          isOpenMenu ? "right-0" : "-right-56"
        } top-20 md:right-0 md:top-0 w-52 h-screen flex-col justify-start px-0 font-poppins shadow-light_left ease-linear transition-all duration-300`}
      >
        <div className=" flex justify-end">
          <img
            src="./logotipo.png"
            alt="Icono del logotipo"
            className={`opacity-0 w-0 my-0 md:opacity-100 md:w-10 md:my-8 md:mx-auto md:mb-5 md:block dark:invert`}
          />
        </div>
        <nav className="md:block">
          <ul className="flex flex-col gap-y-2 px-5">
            <li>
              <a href="#home" className="group flex gap-x-3 py-2">
                <Home hover={true} />
                <span className="text-base font-semibold dark:text-dark_text group-hover:text-primary transition-all ease-in duration-200">
                  Inicio
                </span>
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="group flex gap-x-3 py-2 transition-all ease-in duration-300"
              >
                <AboutMe hover={true} />
                <span className="text-base font-semibold dark:text-dark_text group-hover:text-primary transition-all ease-in duration-200">
                  Sobre mí
                </span>
              </a>
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

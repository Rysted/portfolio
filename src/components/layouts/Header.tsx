import Theme from "./Theme";
import Menu from "./Menu";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="md:hidden absolute top-0 w-full h-20 flex justify-between p-5 bg-white dark:bg-dark_MidnightBlue shadow-md">
        <img
          src="./logotipo.png"
          alt="Icono del logotipo"
          className="w-10 my-auto md:my-0 md:mx-auto md:mb-5 dark:invert"
        />
        <Menu toggleSidebar={toggleSidebar} />
      </div>
      <div
        className={`bg-white dark:bg-dark_MidnightBlue absolute ${
          isOpen ? "right-0" : "-right-52"
        } top-0 md:right-0 md:top-0 w-52 h-screen flex-col justify-start shadow-md px-0 font-poppins transition-all duration-500`}
      >
        <button
          onClick={toggleSidebar}
          className="flex justify-end w-full pr-5"
        >
          <img
            src="./icons/close.svg"
            alt="Icono para cerrar el menú"
            className="w-10 my-8 mb-5 md:hidden dark:invert"
          />
        </button>
        <img
          src="./logotipo.png"
          alt="Icono del logotipo"
          className={`opacity-0 w-0 my-0 md:opacity-100 md:w-10 md:my-8 md:mx-auto md:mb-5 md:block dark:invert`}
        />
        <nav className="md:block">
          <ul className="flex flex-col gap-y-2">
            <li>
              <a
                href="#home"
                className="flex gap-x-3 py-2 px-4 group hover:bg-gray dark:hover:bg-dark_DeepPurple transition-all ease-in duration-300"
              >
                <img
                  src="./icons/home.svg"
                  alt="Icono del inicio"
                  className="h-5 my-auto dark:invert"
                />
                <span className="text-base font-semibold dark:invert">
                  Inicio
                </span>
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="flex gap-x-3 py-2 px-4 hover:bg-gray dark:hover:bg-dark_DeepPurple transition-all ease-in duration-300"
              >
                <img
                  src="./icons/about.svg"
                  alt="Icono del sobre mí"
                  className="h-5 my-auto dark:invert"
                />
                <span className="text-base font-semibold dark:invert">
                  Sobre mí
                </span>
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="flex gap-x-3 py-2 px-4 hover:bg-gray dark:hover:bg-dark_DeepPurple transition-all ease-in duration-300"
              >
                <img
                  src="./icons/services.svg"
                  alt="Icono de servicios"
                  className="h-5 my-auto dark:invert"
                />
                <span className="text-base font-semibold dark:invert">
                  Servicios
                </span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="flex gap-x-3 py-2 px-4 hover:bg-gray dark:hover:bg-dark_DeepPurple transition-all ease-in duration-300"
              >
                <img
                  src="./icons/contact.svg"
                  alt="Icono de contacto"
                  className="h-5 my-auto dark:invert"
                />
                <span className="text-base font-semibold dark:invert">
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

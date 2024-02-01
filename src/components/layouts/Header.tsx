import Theme from "./Theme";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="absolute top-0 w-full h-20 flex justify-between p-5 bg-white dark:bg-dark_navyBlue md:w-52 md:h-full md:flex-col md:justify-start shadow-md md:px-0 font-poppins">
      <img
        src="./logotipo.png"
        alt="Icono del logotipo"
        className="w-10 my-auto md:my-0 md:mx-auto md:mb-5 dark:invert"
      />
      <nav className="hidden md:block">
        <ul className="md:flex md:flex-col md:gap-y-2">
          <li>
            <a
              href="#home"
              className="flex gap-x-3 py-2 px-4 group hover:bg-gray dark:hover:bg-dark_indigo transition-all ease-in duration-300"
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
              className="flex gap-x-3 py-2 px-4 hover:bg-gray dark:hover:bg-dark_indigo transition-all ease-in duration-300"
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
              className="flex gap-x-3 py-2 px-4 hover:bg-gray dark:hover:bg-dark_indigo transition-all ease-in duration-300"
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
              className="flex gap-x-3 py-2 px-4 hover:bg-gray dark:hover:bg-dark_indigo transition-all ease-in duration-300"
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

      <Menu />
    </header>
  );
};

export default Header;

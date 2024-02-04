import { useEffect, useState } from "react";

import NavMenu from "./NavMenu";

// Icons
import { LogoTipo, Burger } from "../../Icons/Icons";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  useEffect(() => {
    const mdBreakpoint = 768;

    const handleResize = () => {
      if (window.innerWidth >= mdBreakpoint) {
        // Si la resolución es mayor o igual a mdBreakpoint, permitir el desplazamiento
        document.body.style.overflowY = "scroll";
      } else {
        // Si la resolución es menor a mdBreakpoint, ajustar según el estado del menú
        document.body.style.overflowY = isOpenMenu ? "hidden" : "scroll";
      }
    };

    // Agregar un event listener para el cambio de tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpenMenu]);

  return (
    <header className="relative overflow-x-hidden select-none">
      <div className="md:hidden fixed top-0 w-full h-20 flex justify-between items-center px-5 bg-light_highlight dark:bg-dark_highlight transition-all duration-200 ease-in-out shadow-light_bottom dark:shadow-dark_bottom z-10">
        <LogoTipo />
        <button
          onClick={toggleSidebar}
          className="group"
          aria-label="Abrir menú"
        >
          <Burger isOpenMenu={isOpenMenu} hover={true} />
        </button>
      </div>
      <span
        className={`fixed cursor-pointer ${
          isOpenMenu ? " opacity-30 blur-md" : "opacity-0 pointer-events-none"
        }  md:hidden w-full h-svh overflow-y-scroll bg-dark_background dark:bg-light_background transition-all duration-200 ease-in-out`}
        onClick={toggleSidebar}
      ></span>
      <div
        className={`bg-light_highlight dark:bg-dark_highlight fixed ${
          isOpenMenu ? "right-0" : "-right-56"
        } top-20 md:right-0 md:top-0 w-52 h-screen flex-col justify-start px-0 font-poppins shadow-light_left dark:shadow-dark_left transition-all duration-200 ease-in-out z-10`}
      >
        <div className="opacity-0 w-0 h-0 my-0 md:w-auto md:h-auto md:opacity-100 md:mt-8 md:mb-5 flex justify-center items-center">
          <LogoTipo />
        </div>

        <NavMenu />
      </div>
    </header>
  );
};

export default Header;

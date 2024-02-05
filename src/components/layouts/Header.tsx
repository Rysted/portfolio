import { useEffect, useState } from "react";

import NavMenu from "./NavMenu";

// Icons
import { LogoTipo, Burger, Close } from "../../Icons/Icons";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const closeSidebar = () => {
    setIsOpenMenu(false);
  };

  useEffect(() => {
    const mdBreakpoint: number = 768;

    const handleResize = () => {
      if (window.innerWidth >= mdBreakpoint) {
        document.body.style.overflowY = "scroll";
      } else {
        document.body.style.overflowY = isOpenMenu ? "hidden" : "scroll";
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpenMenu]);

  return (
    <header className="relative overflow-x-hidden select-none">
      <div className="md:hidden fixed z-20 top-0 w-full h-20 flex justify-between items-center px-5 bg-light_highlight dark:bg-dark_highlight transition-all duration-200 ease-in-out shadow-light_bottom dark:shadow-dark_bottom">
        <LogoTipo />
        <button
          onClick={toggleSidebar}
          className="group"
          aria-label="Abrir menú"
        >
          {isOpenMenu ? <Close hover={true} /> : <Burger hover={true} />}
        </button>
      </div>
      <span
        className={`fixed z-10 cursor-pointer ${
          isOpenMenu ? " opacity-30 blur-md" : "opacity-0 pointer-events-none"
        }  md:hidden w-full h-full overflow-y-scroll bg-dark_background dark:bg-light_background transition-all duration-200 ease-in-out`}
        onClick={toggleSidebar}
      ></span>
      <div
        className={`bg-light_highlight dark:bg-dark_highlight fixed ${
          isOpenMenu ? "right-0" : "-right-60"
        } top-20 lg:right-0 lg:top-0 w-56 h-screen flex-col justify-start px-0 font-poppins shadow-light_left dark:shadow-dark_left transition-all duration-200 ease-in-out z-10`}
      >
        <div className="opacity-0 w-0 h-0 my-0 md:w-full md:flex md:justify-center md:h-auto md:opacity-100 md:mt-8 md:mb-5">
          <LogoTipo />
        </div>

        <NavMenu closeSidebar={closeSidebar} />
      </div>
    </header>
  );
};

export default Header;

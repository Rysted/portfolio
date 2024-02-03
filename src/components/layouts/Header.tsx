import { useState } from "react";

import NavMenu from "./NavMenu";

// Icons
import { LogoTipo, Burger } from "../../Icons/Icons";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsOpenMenu(!isOpenMenu);
    document.body.style.overflowY = isOpenMenu ? "scroll" : "hidden";
  };

  return (
    <header className="relative overflow-x-hidden select-none">
      <div className="md:hidden fixed top-0 w-full h-20 flex justify-between items-center px-5 bg-light_background dark:bg-dark_background shadow-light_bottom z-10">
        <LogoTipo />
        <button onClick={toggleSidebar} className="group">
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
        className={`bg-light_background dark:bg-dark_background fixed ${
          isOpenMenu ? "right-0" : "-right-56"
        } top-20 md:right-0 md:top-0 w-52 h-screen flex-col justify-start px-0 font-poppins shadow-light_left transition-all duration-200 ease-in-out z-10`}
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

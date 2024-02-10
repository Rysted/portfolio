import { useState } from "react";

import NavMenu from "./NavMenu";

// Icons
import { LogoTipo, Burger, Close } from "../../data/Icons";
import { header } from "@schema";

const Header = ({ header }: { header: header }) => {
  const { menu, navMenu, themeMenu, languageMenu } = header;

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const enableSidebar = () => {
    setIsOpenMenu(true);
    document.body.classList.add("body_overflow");
  };

  const disableSidebar = () => {
    setIsOpenMenu(false);
    document.body.classList.remove("body_overflow");
  };

  return (
    <header className="relative overflow-x-hidden select-none">
      <div className="lg:hidden fixed z-20 top-0 w-full h-20 flex justify-between items-center px-5 bg-light_highlight dark:bg-dark_highlight transition-all duration-200 ease-in-out shadow-light_bottom dark:shadow-dark_bottom">
        <LogoTipo />

        {isOpenMenu ? (
          <button
            onClick={disableSidebar}
            className="group"
            aria-label={menu.close}
          >
            <Close />
          </button>
        ) : (
          <button
            onClick={enableSidebar}
            className="group"
            aria-label={menu.open}
          >
            <Burger />
          </button>
        )}
      </div>
      <span
        className={`fixed z-10 cursor-pointer ${
          isOpenMenu
            ? "right-0 opacity-30 blur-md"
            : "-right-full opacity-0 pointer-events-none"
        } lg:hidden w-full h-full overflow-y-scroll bg-dark_background dark:bg-light_background transition-all duration-300 ease-in-out`}
        onClick={disableSidebar}
      ></span>
      <div
        className={`fixed z-20 ${
          isOpenMenu ? "right-0" : "-right-64"
        } w-60 h-screen lg:h-full overflow-auto top-20 lg:top-0 lg:right-0 lg:py-5 lg:pr-5 flex-col justify-start font-poppins z-10 bg-light_highlight dark:bg-dark_highlight lg:bg-transparent lg:dark:bg-transparent transition-all duration-200 ease-in-out`}
      >
        <div className="pt-5 lg:pt-0 lg:relative h-max lg:rounded-xl lg:bg-light_highlight lg:dark:bg-dark_highlight transition-all duration-200 ease-in-out">
          <div className="relative z-10 opacity-0 w-0 h-0 my-0 lg:w-full lg:flex lg:justify-center lg:h-max lg:opacity-100 lg:pt-8 lg:pb-5">
            <LogoTipo />
          </div>

          <NavMenu
            navMenu={navMenu}
            themeMenu={themeMenu}
            languageMenu={languageMenu}
            disableSidebar={disableSidebar}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

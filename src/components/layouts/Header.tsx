import { useState, useEffect } from "react";

import NavMenu from "./NavMenu";

// Icons
import { LogoTipo, Burger, Close } from "../../Icons/Icons";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState("");

  const enableSidebar = () => {
    setIsOpenMenu(true);
    document.body.classList.add("body_overflow");
  };

  const disableSidebar = () => {
    setIsOpenMenu(false);
    document.body.classList.remove("body_overflow");
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.id;

        console.log(top, height, id);

        if (window.scrollY >= top - 100 && window.scrollY < top + height) {
          setActiveLink(id);
        }
      });
    };

    setActiveLink("home");

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="relative overflow-x-hidden select-none">
      <div className="lg:hidden fixed z-20 top-0 w-full h-20 flex justify-between items-center px-5 bg-light_highlight dark:bg-dark_highlight transition-all duration-200 ease-in-out shadow-light_bottom dark:shadow-dark_bottom">
        <LogoTipo />

        {isOpenMenu ? (
          <button
            onClick={disableSidebar}
            className="group"
            aria-label="Abrir menú"
          >
            <Close />
          </button>
        ) : (
          <button
            onClick={enableSidebar}
            className="group"
            aria-label="Abrir menú"
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
        className={`bg-transparent fixed z-20 ${
          isOpenMenu ? "right-0" : "-right-64"
        } w-60 top-20 lg:top-0 lg:right-0 lg:pt-5 lg:pr-5 flex-col justify-start font-poppins z-10 transition-all duration-200 ease-in-out`}
      >
        <div className="lg:relative lg:before:content-[''] lg:before:absolute lg:before:w-20 lg:before:h-screen lg:before:bg-gradient-to-r lg:before:from-cyan-500 lg:before:to-blue-500 lg:before:left-[70px] lg:before:-top-52 lg:before:animate-spin lg:after:content-[''] lg:after:absolute lg:after:bg-light_highlight lg:dark:after:bg-dark_highlight lg:after:inset-1 lg:after:rounded-lg lg:rounded-xl lg:h-max h-screen overflow-hidden bg-light_highlight dark:bg-dark_highlight transition-all duration-200 ease-in-out lg:after:transition-all lg:after:duration-200 lg:after:ease-in-out">
          <div className="relative z-10 opacity-0 w-0 h-0 my-0 lg:w-full lg:flex lg:justify-center lg:h-auto lg:opacity-100 lg:pt-8 lg:pb-5">
            <LogoTipo />
          </div>

          <NavMenu disableSidebar={disableSidebar} active={activeLink} />
        </div>
      </div>
    </header>
  );
};

export default Header;

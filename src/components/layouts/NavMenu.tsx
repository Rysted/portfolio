import { useEffect, useState } from "react";

import { languageMenu, navMenu, themeMenu } from "@schema";

import MenuItem from "../common/MenuItem";
import SubMenu from "./SubMenu";

// Icons
import { BookCode, CodeIcon, Home, ServicesIcon } from "../../data/Icons";

const NavMenu = ({
  navMenu,
  themeMenu,
  languageMenu,
  disableSidebar,
}: {
  navMenu: navMenu[];
  themeMenu: themeMenu;
  languageMenu: languageMenu;
  disableSidebar: () => void;
}) => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.id;

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
    <nav
      role="navigation"
      className="relative h-max pb-24 z-10 lg:h-auto overflow-y-auto lg:py-5"
    >
      <ul className="flex flex-col gap-y-2 px-4">
        {navMenu.map((item, index) => (
          <li key={index} className="group">
            <MenuItem
              url={`#${item.url}`}
              text={item.text}
              disableSidebar={disableSidebar}
              active={activeLink.toLowerCase() === item.url}
            >
              {item.url === "home" && (
                <Home active={activeLink.toLowerCase() === item.url} />
              )}
              {item.url === "services" && (
                <ServicesIcon
                  hover={true}
                  active={activeLink.toLowerCase() === item.url}
                />
              )}
              {item.url === "projects" && (
                <CodeIcon
                  hover={true}
                  active={activeLink.toLowerCase() === item.url}
                />
              )}
              {item.url === "skills" && (
                <BookCode
                  hover={true}
                  active={activeLink.toLowerCase() === item.url}
                />
              )}
            </MenuItem>
          </li>
        ))}

        <li className="bg-light_background dark:bg-dark_background rounded-xl transition-all duration-200 ease-in-out">
          <SubMenu themeMenu={themeMenu} height="h-24" />
        </li>

        <li className="bg-light_background dark:bg-dark_background rounded-xl transition-all duration-200 ease-in-out">
          <SubMenu languageMenu={languageMenu} height="h-24" />
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;

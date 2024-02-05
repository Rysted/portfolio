import { useState } from "react";

import MenuItem from "../common/MenuItem";

// Icons
import {
  AboutMe,
  NavArrowDown,
  CodeIcon,
  BookCode,
  Formation,
} from "../../Icons/Icons";

const SubMenu = ({ closeSidebar }: { closeSidebar: () => void }) => {
  const [subMenu, setSubMenu] = useState<boolean>(false);

  const toggleSubMenu = () => {
    setSubMenu(!subMenu);
  };

  return (
    <>
      <button
        className="group flex justify-between items-center w-full py-2 transition-all duration-200 ease-in-out"
        onClick={toggleSubMenu}
        aria-label="Abrir submenú de Sobre mí"
      >
        <div className="flex items-center gap-x-3">
          <AboutMe hover={true} subMenu={subMenu} />
          <span
            className={`max-h-5 text-base font-semibold ${
              subMenu ? "text-primary" : "dark:text-dark_text"
            } group-hover:text-primary_hover transition-all duration-200 ease-in-out`}
          >
            Sobre mí
          </span>
        </div>
        <NavArrowDown hover={true} subMenu={subMenu} />
      </button>
      <div
        className={`${
          subMenu ? "h-28" : "h-0"
        } px-2 overflow-hidden flex flex-col justify-between bg-light_background dark:bg-dark_background rounded-xl transition-all duration-200 ease-in-out`}
      >
        <MenuItem url="#projects" text="Proyectos" closeSidebar={closeSidebar}>
          <CodeIcon hover={true} />
        </MenuItem>
        <MenuItem url="#skills" text="Habilidades" closeSidebar={closeSidebar}>
          <BookCode hover={true} />
        </MenuItem>
        <MenuItem url="#formation" text="Fromación" closeSidebar={closeSidebar}>
          <Formation hover={true} />
        </MenuItem>
      </div>
    </>
  );
};

export default SubMenu;

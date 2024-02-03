import { useState } from "react";

import MenuItem from "./MenuItem";

// Icons
import {
  AboutMe,
  NavArrowDown,
  BookCode,
  Formation,
  Code,
} from "../../Icons/Icons";

const SubMenu = () => {
  const [subMenu, setSubMenu] = useState<boolean>(false);

  const toggleSubMenu = () => {
    setSubMenu(!subMenu);
  };

  return (
    <>
      <button
        className="group flex justify-between w-full py-2 transition-all duration-200 ease-in-out"
        onClick={toggleSubMenu}
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
        } px-2 overflow-hidden flex flex-col justify-between bg-light_highlight dark:bg-dark_highlight rounded transition-all duration-200 ease-in-out`}
      >
        <MenuItem url="#projects" text="Proyectos">
          <Code hover={true} />
        </MenuItem>
        <MenuItem url="#skills" text="Habilidades">
          <BookCode hover={true} />
        </MenuItem>
        <MenuItem url="#formation" text="Fromación">
          <Formation hover={true} />
        </MenuItem>
      </div>
    </>
  );
};

export default SubMenu;

import { useState } from "react";

import Theme from "./Theme";

// Icons
import { ColorPicker, NavArrowDown } from "../../Icons/Icons";

const SubMenu = () => {
  const [subMenu, setSubMenu] = useState<boolean>(false);

  const toggleSubMenu = () => {
    setSubMenu(!subMenu);
  };

  return (
    <>
      <button
        className="group flex justify-between items-center w-full p-2 gap-x-1"
        onClick={toggleSubMenu}
        aria-label="Abrir submenú de Sobre mí"
      >
        <div className="flex items-center gap-x-4">
          <ColorPicker hover={true} subMenu={subMenu} />
          <span
            className={`max-h-5 text-base font-semibold ${
              subMenu
                ? "text-light_text dark:text-dark_text"
                : "text-secondary-700 dark:text-secondary-300"
            } group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-all duration-200 ease-in-out`}
          >
            Tema
          </span>
        </div>
        <NavArrowDown hover={true} subMenu={subMenu} />
      </button>
      <div
        className={`${
          subMenu ? "h-24 py-2" : "h-0"
        } px-2 overflow-hidden flex flex-col justify-center gap-1 transition-height duration-200 ease-in-out`}
      >
        <Theme />
      </div>
    </>
  );
};

export default SubMenu;

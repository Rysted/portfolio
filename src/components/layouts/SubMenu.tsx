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
        className="group flex justify-between items-center w-full py-2 transition-all duration-200 ease-in-out"
        onClick={toggleSubMenu}
        aria-label="Abrir submenú de Sobre mí"
      >
        <div className="flex items-center gap-x-3">
          <ColorPicker hover={true} />
          <span className="max-h-5 text-base font-semibold dark:text-dark_text group-hover:text-primary_hover transition-all duration-200 ease-in-out">
            Cambiar Estilo
          </span>
        </div>
        <NavArrowDown hover={true} subMenu={subMenu} />
      </button>
      <div
        className={`${
          subMenu ? "h-24" : "h-0"
        } px-3 overflow-hidden flex flex-col justify-center gap-1 bg-light_background dark:bg-dark_background rounded-xl transition-all duration-200 ease-in-out`}
      >
        <Theme />
      </div>
    </>
  );
};

export default SubMenu;

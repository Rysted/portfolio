import { useState } from "react";

import { languageMenu, themeMenu } from "@schema";

import Theme from "./Theme";
import Language from "./Language";

// Icons
import { ColorPicker, LanguageIcon, NavArrowDown } from "../../data/Icons";

const SubMenu = ({
  themeMenu,
  languageMenu,
  height,
}: {
  themeMenu?: themeMenu;
  languageMenu?: languageMenu;
  height: string;
}) => {
  const [subMenu, setSubMenu] = useState<boolean>(false);

  const toggleSubMenu = () => {
    setSubMenu(!subMenu);
  };

  return (
    <>
      <button
        className="group flex justify-between items-center w-full p-2 gap-x-1"
        onClick={toggleSubMenu}
        aria-label="Abrir submenú"
      >
        <div className="flex items-center gap-x-4">
          {themeMenu && <ColorPicker hover={true} subMenu={subMenu} />}
          {languageMenu && <LanguageIcon hover={true} subMenu={subMenu} />}
          <span
            className={`max-h-5 text-base font-semibold ${
              subMenu
                ? "text-light_text dark:text-dark_text"
                : "text-secondary-700 dark:text-secondary-300"
            } group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-all duration-200 ease-in-out`}
          >
            {themeMenu?.title || languageMenu?.title}
          </span>
        </div>
        <NavArrowDown hover={true} subMenu={subMenu} />
      </button>
      <div
        className={`${
          subMenu ? `${height} py-2` : "h-0"
        } px-2 overflow-hidden flex flex-col justify-center gap-1 transition-height duration-200 ease-in-out`}
      >
        {themeMenu && <Theme themeMenu={themeMenu} />}
        {languageMenu && <Language languageMenu={languageMenu} />}
      </div>
    </>
  );
};

export default SubMenu;

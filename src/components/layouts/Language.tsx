import { LanguageContext } from "../../context/LanguageContext";
import { useContext } from "react";

import { languageMenu } from "@schema";
import { Argentina, UnitedStates } from "../../data/Icons";

const Language = ({ languageMenu }: { languageMenu: languageMenu }) => {
  const { actually, handleLanguage } = useContext(LanguageContext);

  return (
    <>
      <button
        className={`group ${
          actually === "spanish" &&
          "bg-primary-100 dark:bg-primary-700 rounded-lg transition-all duration-200 ease-in-out"
        } w-full p-2`}
        onClick={() => handleLanguage("spanish")}
        aria-label="Cambiar tema del sitio web"
      >
        <div className="flex items-center gap-x-3">
          <Argentina />
          <span
            className={`${
              actually === "spanish"
                ? "text-primary-600 dark:text-primary-300"
                : "text-secondary-700 dark:text-secondary-300"
            } h-5 text-base font-semibold  dark:group-hover:text-primary-300 transition-all duration-200 ease-in-out`}
          >
            {languageMenu.spanish}
          </span>
        </div>
      </button>

      <button
        className={`group ${
          actually === "english" &&
          "bg-primary-100 dark:bg-primary-700 rounded-lg transition-all duration-200 ease-in-out"
        } w-full p-2`}
        onClick={() => handleLanguage("english")}
        aria-label="Cambiar tema del sitio web"
      >
        <div className="flex items-center gap-x-3">
          <UnitedStates />
          <span
            className={`${
              actually === "english"
                ? "text-primary-600 dark:text-primary-300"
                : "text-secondary-700 dark:text-secondary-300"
            } h-5 text-base font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-all duration-200 ease-in-out`}
          >
            {languageMenu.english}
          </span>
        </div>
      </button>
    </>
  );
};

export default Language;

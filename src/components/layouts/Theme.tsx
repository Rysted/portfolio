import { useEffect, useState } from "react";

// Icons
import { Sun, Moon } from "../../Icons/Icons";

const Theme = () => {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const switchToLightTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : prevTheme));
  };

  const switchToDarkTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : prevTheme));
  };

  useEffect(() => {
    const htmlElement = document.querySelector("html");

    if (htmlElement) {
      htmlElement.classList.toggle("dark", theme === "dark");

      if (theme === "dark") {
        htmlElement.style.backgroundColor = "#000000";
      } else {
        htmlElement.style.backgroundColor = "#e5e9f5";
      }
    }
  }, [theme]);

  return (
    <>
      <button
        className={`group ${
          theme === "light" &&
          "bg-primary-100 rounded-lg transition-all duration-200 ease-in-out"
        } w-full p-2`}
        onClick={switchToLightTheme}
        aria-label="Cambiar tema del sitio web"
      >
        <div className="flex items-center gap-x-3">
          <Sun hover={true} theme={theme === "light"} />
          <span
            className={`${
              theme === "light" ? "text-primary-600" : "dark:text-secondary-300"
            } h-5 text-base font-semibold  dark:group-hover:text-primary-300 transition-all duration-200 ease-in-out`}
          >
            Claro
          </span>
        </div>
      </button>

      <button
        className={`group ${
          theme === "dark" &&
          "dark:bg-primary-700 rounded-lg transition-all duration-200 ease-in-out"
        } w-full p-2`}
        onClick={switchToDarkTheme}
        aria-label="Cambiar tema del sitio web"
      >
        <div className="flex items-center gap-x-3">
          <Moon hover={true} theme={theme === "dark"} />
          <span
            className={`${
              theme === "dark" ? "dark:text-primary-300" : "text-secondary-700"
            } h-5 text-base font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-all duration-200 ease-in-out`}
          >
            Oscuro
          </span>
        </div>
      </button>
    </>
  );
};

export default Theme;

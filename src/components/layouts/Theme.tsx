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
        htmlElement.style.transition = "background-color 150ms ease-in-out";
        htmlElement.style.backgroundColor = "#000000";
      } else {
        htmlElement.style.transition = "background-color 150ms ease-in-out";
        htmlElement.style.backgroundColor = "#e5e9f5";
      }
    }
  }, [theme]);

  return (
    <>
      <button
        className="group py-2 w-full transition-all duration-200 ease-in-out"
        onClick={switchToLightTheme}
        aria-label="Cambiar tema del sitio web"
      >
        <div className="flex items-center gap-3">
          <Sun hover={true} theme={theme === "light"} />
          <span
            className={`${
              theme === "light" ? "text-primary" : "dark:text-dark_text"
            } h-5 text-base font-semibold  group-hover:text-primary_hover transition-all duration-200 ease-in-out`}
          >
            Claro
          </span>
        </div>
      </button>

      <button
        className="group py-2 w-full transition-all duration-200 ease-in-out"
        onClick={switchToDarkTheme}
        aria-label="Cambiar tema del sitio web"
      >
        <div className="flex items-center gap-3">
          <Moon hover={true} theme={theme === "dark"} />
          <span
            className={`${
              theme === "dark" ? "text-primary" : "dark:text-dark_text"
            } h-5 text-base font-semibold  group-hover:text-primary_hover transition-all duration-200 ease-in-out`}
          >
            Oscuro
          </span>
        </div>
      </button>
    </>
  );
};

export default Theme;

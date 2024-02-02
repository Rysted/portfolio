import { useEffect, useState } from "react";

// Icons
import { Sun, Moon } from "./../../icons/Icons";

const Theme = () => {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const htmlElement = document.querySelector("html");

    if (htmlElement) {
      htmlElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  return (
    <button
      className="group py-2 transition-all ease-in duration-300 w-full md:block"
      onClick={handleChangeTheme}
    >
      <div className="flex gap-3">
        {theme === "dark" ? <Moon hover={true} /> : <Sun hover={true} />}
        <span className="text-base font-semibold dark:text-dark_text group-hover:text-primary transition-all ease-in duration-200">
          {theme === "dark" ? "Oscuro" : "Claro"}
        </span>
      </div>
    </button>
  );
};

export default Theme;

import { useEffect, useState } from "react";

const Theme = () => {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)")) {
      return "dark";
    }
    return "light";
  });

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      className="md:block py-2 px-4 hover:bg-gray dark:hover:bg-dark_DeepPurple transition-all ease-in duration-300 w-full"
      onClick={handleChangeTheme}
    >
      {theme === "dark" ? (
        <div className="flex gap-3">
          <img
            src="./icons/moon.svg"
            alt="Icono de la luna"
            className="md:h-5 my-auto dark:invert"
          />
          <span className="text-base font-semibold dark:invert">Oscuro</span>
        </div>
      ) : (
        <div className="flex gap-3">
          <img
            src="./icons/sun.svg"
            alt="Icono del sol"
            className="md:h-5 my-auto"
          />

          <span className="text-base font-semibold">Claro</span>
        </div>
      )}
    </button>
  );
};

export default Theme;

import { useState, useEffect } from "react";
import { BackToTopIcon } from "../../Icons/Icons";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="lg:opacity-0 lg:pointer-events-none group fixed bottom-5 right-5 p-5 rounded-full bg-primary-500 hover:bg-primary-600 dark:bg-primary-500 dark:hover:bg-primary-300 transition-all duration-200 ease-in-out"
          title="Ir al principio"
          aria-label="Ir al principio"
        >
          <BackToTopIcon />
        </button>
      )}
    </>
  );
};

export default BackToTop;

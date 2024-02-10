import { useState, useEffect } from "react";

import { backToTop } from "@schema";

import { BackToTopIcon } from "../../data/Icons";

const BackToTop = ({ backToTop }: { backToTop: backToTop }) => {
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
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="lg:opacity-0 lg:pointer-events-none group fixed z-10 bottom-5 right-5 p-4 rounded-full bg-primary-500 hover:bg-primary-600 dark:bg-primary-500 dark:hover:bg-primary-300 transition-all duration-200 ease-in-out"
          title={backToTop.ariaLabel}
          aria-label={backToTop.ariaLabel}
        >
          <BackToTopIcon />
        </button>
      )}
    </div>
  );
};

export default BackToTop;

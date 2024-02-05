import { useEffect } from "react";

import Header from "./components/layouts/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Footer from "./components/layouts/Footer";

// Icons
import { WavePrimary } from "./Icons/Icons";

const App = () => {
  useEffect(() => {
    document.getElementById("wave-primary");
  }, []);
  return (
    <>
      <Header />
      <main className="md:mt-0 lg:mr-56 font-poppins">
        <Home />
        <Services />
        <Projects />
        <Skills />
      </main>
      <section className="relative bg-light_highlight dark:bg-dark_highlight transition-all duration-200 ease-in-out">
        <span className="block w-full h-2 absolute -top-1 bg-light_background dark:bg-dark_background transition-all duration-200 ease-in-out"></span>
        <WavePrimary />
        <span className="block w-full h-2 absolute -bottom-1 bg-light_highlight dark:bg-dark_highlight transition-all duration-200 ease-in-out"></span>
      </section>
      <Footer />
    </>
  );
};

export default App;

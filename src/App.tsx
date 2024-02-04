import Header from "./components/layouts/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Projects from "./components/projects/Projects";
import { WavePrimary } from "./Icons/Icons";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.getElementById("wave-primary");
  }, []);
  return (
    <>
      <Header />
      <main className="md:mt-0 md:mr-52 font-poppins">
        <Home />
        <section className="relative bg-light_highlight dark:bg-dark_highlight transition-all duration-200 ease-in-out">
          <span className="block w-full h-2 absolute -top-1 bg-light_highlight dark:bg-dark_highlight transition-all duration-200 ease-in-out"></span>
          <WavePrimary />
          <span className="block w-full h-2 absolute -bottom-1 bg-light_background dark:bg-dark_background transition-all duration-200 ease-in-out"></span>
        </section>
        <Services />
        <Projects />
      </main>
    </>
  );
};

export default App;

import Header from "./components/layouts/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Projects from "./components/Projects";
import { WavePrimary } from "./Icons/Icons";

const App = () => {
  return (
    <>
      <Header />
      <main className="md:mt-0 md:mr-52 text-light_text dark:text-dark_text bg-light_background dark:bg-dark_background font-poppins transition-all duration-200 ease-in-out">
        <Home />
        <section className="w-full">
          <WavePrimary />
        </section>
        <Services />
        <Projects />
      </main>
    </>
  );
};

export default App;

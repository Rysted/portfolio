import Header from "./components/layouts/Header";
import Home from "./components/Home";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <Header />
      <main className="md:mt-0 md:mr-52 px-5 text-light_text dark:text-dark_text bg-light_background dark:bg-dark_background font-poppins transition-all duration-200 ease-in-out">
        <Home />
        <Services />
      </main>
    </>
  );
};

export default App;

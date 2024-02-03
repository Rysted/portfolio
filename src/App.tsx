import Header from "./components/layouts/Header";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Header />
      <main className="md:mt-0 md:mr-52 px-5 text-light_text dark:text-dark_text bg-light_background dark:bg-dark_background font-poppins">
        <Home />
      </main>
    </>
  );
};

export default App;

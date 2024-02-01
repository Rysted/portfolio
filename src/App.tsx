import Header from "./components/layouts/Header";

const App = () => {
  return (
    <>
      <Header />
      <main className="mt-20 md:mt-0 md:relative md:ml-52">
        <div className="h-52">
          <h1>Hola Mundo</h1>
        </div>
      </main>
    </>
  );
};

export default App;

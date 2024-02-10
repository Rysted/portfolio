// Context
import { LanguageProvider, LanguageContext } from "./context/LanguageContext";
import { useContext } from "react";
// Components
import Header from "./components/layouts/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import BackToTop from "./components/common/BackToTop";
import Wave from "./components/common/Wave";
import Footer from "./components/layouts/Footer";

const App = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

const AppContent = () => {
  const { language } = useContext(LanguageContext); // Accede al contexto de idioma

  return (
    <>
      <Header header={language.header} />
      <main className="md:mt-0 lg:mr-60 font-poppins">
        <Home home={language.home} />
        <Services services={language.services} />
        <Projects projects={language.projects} />
        <Skills skills={language.skills} />
      </main>
      <BackToTop backToTop={language.backToTop} />
      <Wave />
      <Footer footer={language.footer} />
    </>
  );
};

export default App;

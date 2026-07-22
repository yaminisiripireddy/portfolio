import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import Footer from "./sections/Footer";
import "./App.css";
import Experience from "./sections/Experience";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience/>
      <Resume />
      <Footer />
      
    </>
  );
}

export default App;
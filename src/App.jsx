import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import SystemDesign from "./components/SystemDesign";
import Projects from "./components/Projects";
import Profiles from "./components/Profiles";
import GithubStats from "./components/GithubStats";
import GithubProjects from "./components/GithubProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <SystemDesign />
      <Projects />
      <GithubProjects />
      <GithubStats />
      <Profiles />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

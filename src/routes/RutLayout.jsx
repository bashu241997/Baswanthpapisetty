import Home from "../components/Home";
import About from "../components/About";
import Experience from "../components/Experiences";
import { Skills } from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/contacts";
import SkillContainer from "../components/skill";

const RutLayout = () => {
  return (
    <>
      <Home />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default RutLayout;

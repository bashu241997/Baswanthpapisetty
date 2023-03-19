import React from "react";
import Home from "./screens/home/Home"
import About from "./screens/about/About"
import Experience from "./screens/experience/Experience";
import Education from "./screens/education/Education";
import Contact from "./screens/contact/Contact";
import Project from "./screens/projects/Project";
import Skills from "./screens/skills/Skills";

function App() {
  return (
    <div id="approot" className="bg-background min-h-[100vh] overflow-y-auto overflow-x-hidden ">
      <div id="container" className="md:container sm:mx-auto">
        <Home />
        <About />
       <Experience />
       <Education />
       <Skills />
       <Project />
      </div>
      <Contact />
    </div>
  );
}

export default App;

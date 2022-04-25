import React, { useState, useEffect } from "react";
import { Navigation } from "./assets/class";
import {
  About,
  Home,
  Experince,
  Skills,
  Project,
  Contact,
  Menu,
  Close,
} from "./assets/icons";
import "./app.css";
import HomeComponent from "./components/Home";
import Aboutme from "./components/About";
import ExperinceTab from "./components/Experince";
import Skillscomponent from "./components/Skills";
import Projects from "./components/projects";
import Contactcomp from "./components/contact";


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const cliskanchor =(e,data)=>{
    e.preventDefault()
    let element = document.getElementById(data);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false)
  }

  return (
    <div className="sm:flex overflow-hidden sm:grow absolute w-full  sm:h-full">
      <div
        className="w-full sm:w-60 sm:h-full fixed sm:relative z-30 text-white flex flex-col grow"
        id="sidenavSecExample"
      >
        <div className="bg-sky-700 z-50 py-3 sm:pt-6 sm:pb-8 px-6">
          <div className="flex items-center sm:flex-col">
            <div className="shrink-0">
              <img
                src={require("./assets/images/avatar.jpg")}
                className="rounded-full w-10 sm:w-24"
                alt="Avatar"
              />
            </div>
            <div className="grow ml-3 sm:ml-0 sm:text-center">
              <p className="text-sm sm:text-lg sm:py-2 font-semibold text-white">
                Baswanth P
              </p>
              <div className="hidden sm:block  text-sm sm:text-md sm:pt-2 font-semibold text-white">
                Web & Hybrid Application Developer
              </div>
            </div>
            <div className="sm:hidden flex items-center">
              <button
                className="outline-none mobile-menu-button"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <Close /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        <div className={`bg-sky-700 ${isOpen ? "translate-y-0 duration-300 sm:duration-0" : "-translate-y-full sm:translate-y-0 duration-300 sm:duration-0 sm:block sm:translate-y-0"}  `}>
          <ul
            className={`relative px-1 pb-4`}
          >
            <li className="relative">
              <a className={Navigation} onClick={(e) => cliskanchor(e,"home")} href="#home">
                <Home />
                <span className="pl-2">Home</span>
              </a>
            </li>
            <li className="relative">
              <a className={Navigation} onClick={(e) => cliskanchor(e,"about")} href="#about">
                <About />
                <span className="pl-2">About</span>
              </a>
            </li>
            <li className="relative">
              <a className={Navigation} onClick={(e) => cliskanchor(e,"experince")} href="#experince">
                <Experince />
                <span className="pl-2">Experince</span>
              </a>
            </li>
            <li className="relative">
              <a className={Navigation} onClick={(e) => cliskanchor(e,"skills")} href="#skills">
                <Skills />
                <span className="pl-2">Skills</span>
              </a>
            </li>
            <li className="relative">
              <a className={Navigation} onClick={(e) => cliskanchor(e,"project")} href="#project">
                <Project />
                <span className="pl-2">Projects</span>
              </a>
            </li>
            <li className="relative">
              <a className={Navigation} onClick={(e) => cliskanchor(e,"contact")} href="#contact">
                <Contact />
                <span className="pl-2">Contact</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden bg-sky-700  sm:flex flex-col py-3 items-center grow justify-end">
          <hr className="w-full py-2" />
          <p className="text-sm">&#169; Baswanth Papisetty</p>
        </div>
      </div>
      <div className="container overflow-x-hidden overflow-y-auto background  h-full">
        <div className="h-full">
          <HomeComponent />
          <Aboutme />
          <hr className="p-2" />
          <ExperinceTab />
          <Skillscomponent />
          <Projects />
          <Contactcomp />
        </div>
      </div>
    </div>
  );
}

export default App;

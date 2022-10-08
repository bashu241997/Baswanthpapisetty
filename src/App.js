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
import Settin from "./assets/images/setting.svg";
import Toggle from "./toggle";


const ThemeContext = React.createContext(false);

const ThemeProvider = ({ children }) => {
  const [toggle, setToggle] = React.useState(false);
  const toggleFunction = () => {
    setToggle(!toggle);
  };
  return (
    <ThemeContext.Provider value={{ toggle, toggleFunction }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeContext, ThemeProvider };

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [Showsetting, setShowsetting] = useState(false);
  const { toggle,toggleFunction } = React.useContext(ThemeContext);
  const cliskanchor = (e, data) => {
    e.preventDefault();
    let element = document.getElementById(data);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <ThemeProvider>
      <>
        <div
          className={`sm:flex text-[#333] overflow-hidden sm:grow absolute w-full sm:h-full ${
            Showsetting ? "brightness-60" : ""
          } ${toggle ? "nonbg" : "background"}`}
        >
          <div
            className="w-full shadow-lg sm:w-60 h-16 sm:h-full fixed sm:relative z-30  flex flex-col grow border-r-2"
            id="sidenavSecExample"
          >
            <div className="bg-white z-50 py-3 sm:pt-6 sm:pb-8 px-6">
              <div className="flex items-center sm:flex-col">
                <div className="shrink-0">
                  <img
                    src={require("./assets/images/profile.jpg")}
                    className="rounded-full w-10 sm:w-24"
                    alt="Avatar"
                  />
                </div>
                <div className="grow ml-3 sm:ml-0 sm:text-center">
                  <p className="text-sm sm:text-lg sm:py-2 font-semibold ">
                    Baswanth P
                  </p>
                  <div className="hidden sm:block  text-sm sm:text-md sm:pt-2 font-semibold ">
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
            <div
              className={`bg-white ${
                isOpen
                  ? "translate-y-0 duration-300 sm:duration-0"
                  : "-translate-y-full sm:translate-y-0 duration-300 sm:duration-0 sm:block sm:translate-y-0"
              }  `}
            >
              <ul className={`relative px-1 pb-4`}>
                <li className="relative">
                  <a
                    className={Navigation}
                    onClick={(e) => cliskanchor(e, "home")}
                    href="#home"
                  >
                    <Home />
                    <span className="pl-2">Home</span>
                  </a>
                </li>
                <li className="relative">
                  <a
                    className={Navigation}
                    onClick={(e) => cliskanchor(e, "about")}
                    href="#about"
                  >
                    <About />
                    <span className="pl-2">About</span>
                  </a>
                </li>
                <li className="relative">
                  <a
                    className={Navigation}
                    onClick={(e) => cliskanchor(e, "experince")}
                    href="#experince"
                  >
                    <Experince />
                    <span className="pl-2">Experince</span>
                  </a>
                </li>
                <li className="relative">
                  <a
                    className={Navigation}
                    onClick={(e) => cliskanchor(e, "skills")}
                    href="#skills"
                  >
                    <Skills />
                    <span className="pl-2">Skills</span>
                  </a>
                </li>
                <li className="relative">
                  <a
                    className={Navigation}
                    onClick={(e) => cliskanchor(e, "project")}
                    href="#project"
                  >
                    <Project />
                    <span className="pl-2">Projects</span>
                  </a>
                </li>
                <li className="relative">
                  <a
                    className={Navigation}
                    onClick={(e) => cliskanchor(e, "contact")}
                    href="#contact"
                  >
                    <Contact />
                    <span className="pl-2">Contact</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="hidden   sm:flex flex-col py-3 items-center grow justify-end">
              <hr className="w-full py-2" />
              <p className="text-sm">&#169; Baswanth Papisetty</p>
            </div>
          </div>

          <div className="container overflow-x-hidden overflow-y-auto background fixed top-16 sm:top-0 sm:relative h-full">
            <div className="h-full">
              <HomeComponent />
              <Aboutme />
              <ExperinceTab />
              <Skillscomponent />
              <Projects />
              <Contactcomp />
            </div>
          </div>
        </div>
        <div
          className={`absolute flex items-center  top-[30%] md:top-[40%] right-5 md:right-10 translate-y-[-50%]`}
        >
          {Showsetting && (
            <div className="p-4 shadow-xl bg-slate-100 rounded-lg mr-2 text-left">
              <Toggle change={toggleFunction} value={toggle} />
              <div className="capitalize text-left px-2 flex justify-end">
                background color :
                <input
                  type="color"
                  id="favcolor"
                  className="w-6 h-6 mx-2"
                  name="favcolor"
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                />
              </div>
              <div className="capitalize text-left px-2 flex justify-end">
                Text color :
                <input
                  type="color"
                  id="textcolor"
                  className="w-6 h-6 mx-2"
                  name="text-color"
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                />
              </div>
            </div>
          )}
          <div
            onClick={() => setShowsetting(!Showsetting)}
            className="cursor-pointer rounded-lg z-50 shadow-xl p-2 bg-slate-200"
          >
            <img src={Settin} className="w-8" />
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;

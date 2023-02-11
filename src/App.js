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
  Close,Setting
} from "./assets/icons";
import "./app.css";
import HomeComponent from "./components/home/Home";
import Aboutme from "./components/about/About";
import ExperinceTab from "./components/experince/Experince";
import Skillscomponent from "./components/skills/Skills";
import Projects from "./components/project/projects";
import Contactcomp from "./components/contact/contact";
import Settin from "./assets/images/setting.svg";
import Toggle from "./toggle";


const ThemeContext = React.createContext({
  toggle:false,
  toggleFunction: ()=>{}
});

const ThemeProvider = (props) => {
  const [toggle, setToggle] = React.useState(false);
  const toggleFunction = () => {
    setToggle(!toggle)
  }
  return (
    <ThemeContext.Provider value={{
      toggle,
      toggleFunction
    }}>
      {props.children}
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
  const handlemode = () =>{
    toggleFunction()
  }
  const [Background, setBackground] = useState("#fff")
  const [Color, setColor] = useState("#333")

  useEffect(()=>{
    if(toggle){
      setBackground("#333")
      setColor("#fff")
    }else{
      setBackground("#fff")
      setColor("#333")
    }
  },[toggle])
  return (
    <ThemeProvider>
      <>
        <div
          className={`sm:flex text-[#333] overflow-hidden sm:grow absolute w-full sm:h-full ${toggle ? "nonbg" : "background"}`}
          style={{backgroundColor:`${Background}`,color:`${Color}`}}
        >
          <div
            className="w-full shadow-lg sm:w-60 h-16 sm:h-full fixed sm:relative z-30  flex flex-col grow border-r-2"
            id="sidenavSecExample"
          >
            <div className={`${toggle ? "nonbg" : "background"} z-50 py-3 sm:pt-6 sm:pb-8 px-6`} style={{backgroundColor:`${Background}`,color:`${Color}`}}>
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
              style={{backgroundColor:`${Background}`,color:`${Color}`}}
              className={`${
                isOpen
                  ? "translate-y-0 duration-300 sm:duration-0"
                  : "-translate-y-full sm:translate-y-0 duration-300 sm:duration-0 sm:block sm:translate-y-0"
              } ${toggle ? "nonbg" : "background"} `}
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

          <div  style={{backgroundColor:`${Background}`,color:`${Color}`}} className="container overflow-x-hidden overflow-y-auto fixed top-16 sm:top-0 sm:relative h-full">
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
          className={`absolute flex items-center  top-[20%] md:top-[40%] right-6 md:right-10 translate-y-[-50%]`}
        >
          {Showsetting && (
            <div className="p-4 shadow-xl bg-slate-100 rounded-lg mr-2 text-left">
              <Toggle toggler={handlemode} value={toggle} />
            </div>
          )}
          <div
            onClick={() => setShowsetting(!Showsetting)}
            className="cursor-pointer rounded-lg z-50 shadow-xl p-2 bg-slate-200"
          >
            {Showsetting ? <Close className="w-8"/> : <Setting className="w-8"/>}
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;

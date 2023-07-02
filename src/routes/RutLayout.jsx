import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Experience from "../components/Experience";
import { Projects } from "../components/Projects";
import Contact from "../components/contact";

const RutLayout = () => {
  return (
    <div className="grid grid-cols-12 gap-4 justify-around text-[#94a3b8]">
       <nav className="col-span-12 md:col-span-2 text-right uppercase roboto gradientborder md:font-bold text-[12px] md:text-[18px]">
        <Link
          to="/"
          className={"hover:scale-110 hover:text-white duration-300 md:block px-2 md:pr-[40px] py-2"}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={"hover:scale-110 hover:text-white duration-300 md:block px-2 md:pr-[40px] py-2"}
        >
          About
        </Link>
        <Link
          to="/experience"
          className={"hover:scale-110 hover:text-white duration-300 md:block px-2 md:pr-[40px] py-2"}
        >
          Experience
        </Link>
        <Link
          to="/projects"
          className={"hover:scale-110 hover:text-white duration-300 md:block px-2 md:pr-[40px] py-2"}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className={"hover:scale-110 hover:text-white duration-300 md:block px-2 md:pr-[40px] py-2"}
        >
          contact
        </Link>
      </nav>
      <div className="col-span-12 h-[70vh] overflow-scroll flex justify-center items-center md:col-span-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </div>
     
    </div>
  );
};

export default RutLayout;

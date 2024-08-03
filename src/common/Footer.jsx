import React from "react";
import { Globe, Linkedin, Insta, Git } from "../assets/icons";

const Footer = () => {
  return (
    <>
      <div className="flex mt-4 flex-wrap pt-[80px] justify-center items-center">
        <a
          href="#homer"
          className="px-3 scale-100 uppercase underline text-[#364056] text-[16px] p-3 font-medium hover:scale-110 duration-300"
        >
          home
        </a>
        <a
          href="#about"
          className="px-3 scale-100 uppercase underline text-[#364056] text-[16px] p-3 font-medium hover:scale-110 duration-300"
        >
          about
        </a>
        <a
          href="#experience"
          className="px-3 scale-100 uppercase underline text-[#364056] text-[16px] p-3 font-medium hover:scale-110 duration-300"
        >
          experience
        </a>
        <a
          href="#projects"
          className="px-3 scale-100 uppercase underline text-[#364056] text-[16px] p-3 font-medium hover:scale-110 duration-300"
        >
          projects
        </a>
        <a
          href="#contact"
          className="px-3 scale-100 uppercase underline text-[#364056] text-[16px] p-3 font-medium hover:scale-110 duration-300"
        >
          contact
        </a>
      </div>
      <div className="flex mt-4 py-[30px] justify-center items-center">
        <a
          href="https://github.com/bashu241997"
          className="px-3 scale-100 uppercase underline text-[#364056] text-[16px] p-3 font-medium hover:scale-110 duration-300"
        >
          <Git />
        </a>
        <a
          href="https://bashu-53054.web.app/"
          className="px-3 scale-100 uppercase underline text-[#364056] text-[16px] p-3 font-medium hover:scale-110 duration-300"
        >
          <Globe />
        </a>
        <a
          href="https://www.instagram.com/baswanth_p/"
          className="px-3 scale-100 uppercase underline text-[#364056] text-[16px] p-3 font-medium hover:scale-110 duration-300"
        >
          <Insta />
        </a>
        <a
          href="https://www.linkedin.com/in/baswanth-papisetty-91340b9a/"
          className="px-3 scale-100 uppercase underline text-[#364056] text-[16px] p-3 font-medium hover:scale-110 duration-300"
        >
          <Linkedin />
        </a>
      </div>
      <footer className="text-[#364056] text-center font-bold text-sm bottom-[0px] w-full py-[25px]">
        © All Rights reserved to Baswanth
      </footer>
    </>
  );
};

export default Footer;

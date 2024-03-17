import React from "react";
import { Globe, Linkedin, Insta, Git } from "../assets/icons";
const Hrader = () => {
  return (
    <header className="relative w-full p-[25px] overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex mt-4 items-baseline font-black text-[#626262]  ">
          <span className="text-[#307ae1] lg:text-[24px] sm:text-[24px] xs:text-[24px] text-[24px] italic">
            Bas
          </span>
          <span className="lg:text-[20px] sm:text-[20px] xs:text-[18px] text-[18px]">
            wanth
          </span>
        </div>
        <div className="flex mt-4 justify-end items-center">
          <a
            href="https://github.com/bashu241997"
            className="px-3 scale-100 hover:scale-110 duration-300"
          >
            <Git />
          </a>
          <a
            href="https://bashu-53054.web.app/"
            className="px-3 scale-100 hover:scale-110 duration-300"
          >
            <Globe />
          </a>
          <a
            href="https://www.instagram.com/baswanth_p/"
            className="px-3 scale-100 hover:scale-110 duration-300"
          >
            <Insta />
          </a>
          <a
            href="https://www.linkedin.com/in/baswanth-papisetty-91340b9a/"
            className="px-3 scale-100 hover:scale-110 duration-300"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hrader;

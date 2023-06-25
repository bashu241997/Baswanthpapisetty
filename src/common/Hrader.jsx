import React from "react";
import { Globe, Linkedin, Insta, Git } from "../assets/icons";
const Hrader = () => {
  return (
    <header className="relative w-full p-[25px] overflow-hidden">
      <div className="flex justify-center sm:justify-end">
        <a href="https://github.com/bashu241997" className="px-3 scale-100 hover:scale-110 duration-300">
          <Git />
        </a>
        <a href="https://bashu-53054.web.app/" className="px-3 scale-100 hover:scale-110 duration-300">
          <Globe />
        </a>
        <a href="https://www.instagram.com/baswanth_p/" className="px-3 scale-100 hover:scale-110 duration-300">
          <Insta />
        </a>
        <a href="https://www.linkedin.com/in/baswanth-papisetty-91340b9a/" className="px-3 scale-100 hover:scale-110 duration-300">
          <Linkedin />
        </a>
      </div>
    </header>
  );
};

export default Hrader;

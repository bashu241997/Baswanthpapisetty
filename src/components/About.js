import React, { useState, useEffect } from "react";
import { Downarrow, Download } from "../assets/icons";
import { anchor } from "../assets/class";

export default function Aboutme() {
  const [exp, setExp] = useState("");
  useEffect(() => {
    let a = new Date();
    let b = new Date("2018/11/29");
    let c = (a.getTime() - b.getTime()) / 1000;
    c /= 3600 * 24;
    let d = Math.abs(c / 365.25).toFixed(1);
    setExp(d);
  }, []);
  const getfunc = () =>{return `https://drive.google.com/file/d/1ciX2bcZn_g1Vh1LzhEr9BisVgmXucOgS/view?usp=sharing`}
  return (<div  id="about" className="sm:p-12 p-8  h-auto min-h-full top-16 sm:top-0 capitalize ">
    <div
     className="grid lg:grid-cols-2"
    >
      <div className=" flex items-center flex-col justify-center ">
        <div className="scale-100 md:hover:scale-[1.3] duration-300 shadow-xl w-[300px]">
          <div className="overflow-hidden w-[290px]">
            <img
              src={require("../assets/images/profile.jpg")}
              className="w-full h-full"
              alt="profile"
            />
          </div>
          <div>
            <div className="pt-4 pb-2 px-3 font-semibold text-xl text-sky-500">
              Baswant <span className="">P</span>
            </div>
            <div className="font-semibold px-3 pb-4">
              Web Application Developer
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-center text-4xl py-10 font-semibold flex items-center">
          <span className="pr-2 text-sky-500">about</span> Me
        </h3>
        <h6 className="text-2xl text-left font-semibold ">Hi I am  <span className="pr-2 text-sky-500"> baswanth </span> </h6>
        <p className="text-base text-justify py-4">
          Ui/Ux Designer Loves To Design Creatively I'm Software Developer With{" "}
          {exp} Years Of Experince Specalizing In Web & Hybrid Application
          Development using digital technologies ie Angular, React ,react-native
          and ionic cordova ,having full Scale project development experince
          throughout the development cycle of an application having knowledge in
          project management platforms like jira gitlab and microsoft azure tfs.
        </p>
        <a href="https://drive.google.com/file/d/1ciX2bcZn_g1Vh1LzhEr9BisVgmXucOgS/view?usp=sharing" className="scale-100 hover:scale-[1.2] duration-300 p-3 shadow-xl bg-sky-500 text-white text-sm cursor-pointer  rounded-full flex  w-1/2 m-2 justify-center">
          resume &nbsp;
          <Download />
        </a>
      </div>
    </div>
    <a href="#experince" onClick={(e)=>anchor(e,"experince")} className="flex justify-center py-6"><Downarrow /> </a>
    </div>
  );
}

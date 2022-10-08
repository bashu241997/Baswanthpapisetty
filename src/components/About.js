import React, { useState, useEffect } from "react";
import { Downarrow, Download } from "../assets/icons";
import "./about.css";
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
  return (<div  id="about" className="sm:p-12 p-8 bg-slate-100 h-auto min-h-full top-16 sm:top-0 capitalize ">
    <div
     className="grid lg:grid-cols-2"
    >
      <div className=" flex items-center flex-col justify-center ">
        <div className="appslider w-[300px]">
          <div className="overflow-hidden w-[290px]">
            <img
              src={require("../assets/images/profile.jpg")}
              className="w-full h-full"
              alt="profile"
            />
          </div>
          <div>
            <div className="pt-4 pb-2 px-3 font-semibold text-xl text-sky-500">
              Baswant <span className="text-black">P</span>
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
        <h6 className="text-2xl text-left font-semibold ">Hi I am baswanth </h6>
        <p className="text-base text-justify py-4">
          Ui/Ux Designer Loves To Design Creatively I'm Software Developer With{" "}
          {exp} Years Of Experince Specalizing In Web & Hybrid Application
          Development using digital technologies ie Angular, React ,react-native
          and ionic cordova ,having full Scale project development experince
          throughout the development cycle of an application having knowledge in
          project management platforms like jira gitlab and microsoft azure tfs.
        </p>
        <a href="https://drive.google.com/file/d/1EfENIM0c4G2koKg_nJtFqANMe4QC35D8/view?usp=sharing" className="p-3 appslider text-sm cursor-pointer text-white rounded-full flex bg-sky-700 w-1/2 m-2 justify-center">
          resume &nbsp;
          <Download />
        </a>
      </div>
    </div>
    <a href="#experince" onClick={(e)=>anchor(e,"experince")} className="flex justify-center py-6"><Downarrow /> </a>
    </div>
  );
}

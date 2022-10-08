import React from "react";
import "./home.css";
import Whatsapp from "../assets/images/Whatsapp.svg";
import Git from "../assets/images/Git.svg";
import Linkedin from "../assets/images/Linkedin.svg";
import Insta from "../assets/images/Insta.svg";
import { anchor } from "../assets/class";

export default function HomeComponent() {
  return (
    <div
      id="home"
      className="grid p-8 min-h-full sm:grid-cols-2 capitalize"
    >
      <div className="flex justify-center sm:pl-12 pl-2 flex-col">
        <h6 className="text-3xl py-2 font-500">Hi iam </h6>
        <h2 className="text-5xl py-3 font-bold">Baswanth papisetty</h2>
        <h6 className="text-lg pt-4 ">
          Web and Hybrid application developer Looking for opportunities as a
        </h6>
        <h4 className="text-lg pt-3 font-bold">Web applicaion developer</h4>
        <a onClick={(e)=>anchor(e,"experince")} className="cursor-pointer py-2 px-12 rounded-full  mr-3 w-fit bg-sky-600 my-6 text-white">explore work</a>
        <div className="flex">
              <a href="https://wa.me/917871387268" className="px-2 scale-90 cursor-pointer hover:scale-110 duration-300">
                <img src={Whatsapp} className="w-8" />
              </a>
              <a href="https://www.linkedin.com/in/baswanth-papisetty-91340b9a" className="px-2 scale-90 cursor-pointer hover:scale-110 duration-300">
                <img src={Linkedin} className="w-8" />
              </a>
              <a href="https://github.com/bashu241997" className="px-2 scale-90 hover:scale-110 cursor-pointer duration-300">
                <img src={Git} className="w-8" />
              </a>
              <a  href="https://www.instagram.com/baswanth_p/" className="px-2 scale-90 hover:scale-110 duration-300 cursor-pointer">
                <img src={Insta} className="w-8" />
              </a>
            </div>
       </div>
      <div className="flex sm:items-start items-center py-12 sm:py-2 flex-col justify-center">
        <div className="overflow-hidden  homeimg">
          <img
            src={require("../assets/images/profile.jpg")}
            className=" rounded-full photoslider w-full h-full"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
}

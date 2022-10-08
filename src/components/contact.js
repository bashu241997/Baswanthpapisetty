import React from "react";
import { Mobile, Mailsend, Location } from "../assets/icons";
import Whatsapp from "../assets/images/Whatsapp.svg";
import Git from "../assets/images/Git.svg";
import Linkedin from "../assets/images/Linkedin.svg";
import Insta from "../assets/images/Insta.svg";
import sent from "../assets/images/send.svg";
export default function Contactcomp() {
  return (
    <>
      <div
        id="contact"
        className="min-h-full capitalize"
      >
        <div className="py-6 px-8 text-4xl text-sky-600 font-bold">Contact Me</div>
        <div className="lg:pl-12 sm:m-8 shadow-lg lg:flex lg:justify-between">
          <div className="w-full p-6">
            <div className="py-6 font-serif font-semibold text-xl">
              send me a message
            </div>
            <div className="sm:flex sm:justify-start">
              <div className="sm:w-64">
                <div className="p-2 w-full">
                  <p className="font-semibold text-xl pb-4">first Name</p>
                  <input
                    placeholder="Enter your name"
                    className="px-4 w-full bg-transparent py-2 outline-none shadow-xl border border-sky-500 border-l-0 border-t-0 border-r-0 border-b-2 "
                  />
                </div>
                <div className="p-2 w-full">
                  <p className="font-semibold text-xl pb-4">Last Name</p>
                  <input
                    placeholder="Enter your name"
                    className="px-4 w-full bg-transparent py-2 outline-none shadow-xl border border-sky-500 border-l-0 border-t-0 border-r-0 border-b-2 "
                  />
                </div>
                <div className="p-2 sm:px-2 sm:pt-2 sm:pb-8 w-full">
                  <p className="font-semibold text-xl pb-4">email</p>
                  <input
                    placeholder="Enter your name"
                    className="px-4 w-full bg-transparent py-2 outline-none shadow-xl border border-sky-500 border-l-0 border-t-0 border-r-0 border-b-2 "
                  />
                </div>
              </div>
              <div className="flex flex-col sm:ml-12">
                <div className="p-2 sm:w-64">
                  <p className="font-semibold text-xl pb-4">Message</p>
                  <textarea
                    placeholder="Enter your message"
                    className="px-4 w-full bg-transparent py-2 outline-none shadow-xl  border border-sky-500 border-l-0 border-t-0 border-r-0 border-b-2  h-16"
                  />
                </div>
                <div onClick={()=>alert("we are working on sending your response Thank you")} className="flex bg-sky-600 scale-90 hover:scale-100 duration-300 text-white shadow-xl cursor-pointer items-center m-4 justify-center w-56   rounded-full py-2 px-4">
                  <span className="text-lg font-semibold px-2">send</span>
                  <img className="w-6" src={sent} />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-full  p-6 py-8  ">
            <div className="py-6 text-md flex items-center ">
              <Mailsend />
              <a className="pl-4" href="mailto:p.baswanth@outlook.com">
                p.baswanth.com
              </a>
            </div>
            <div className="pb-6 text-md flex items-center">
              <Mobile />{" "}
              <a className="pl-4" href="tel:+917338702179">
                Call me..
              </a>
            </div>
            <div className="pb-6 text-md flex items-center ">
              <Location />
              <div
                className="
            pl-4"
              >
                {" "}
                11/391 ,santhepeta
                <br />
                Andra pradesh
                <br />
                India
              </div>
            </div>
            <div className="flex">
              <a href="https://wa.me/917871387268" className="px-2 scale-90 cursor-pointer hover:scale-110 duration-300">
                <img src={Whatsapp} className="w-8" />
              </a>
              <a href="https://www.linkedin.com/in/baswanth-papisetty-91340b9a/?originalSubdomain=in" className="px-2 scale-90 cursor-pointer hover:scale-110 duration-300">
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
        </div>
        <div className="h-28 sm:h-14 pt-4 text-center block capitalize   font-semibold"> All rights © baswanth {new Date().getFullYear()}</div>
  
      </div>
    </>
  );
}

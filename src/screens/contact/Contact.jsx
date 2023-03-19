import React from "react";
import { Heading } from "../../common/Heading";
import Label from "../../common/Label";
import Git from "../../assets/git-white.svg";
import Lin from "../../assets/linkedin-in-white.svg";
import Ins from "../../assets/instagram-white.svg";
import Glob from "../../assets/globe-white.svg";
import mail from "../../assets/mail-bulk.svg";
import mobile from "../../assets/headset.svg";

const Contact = () => {
  return (
    <div className="bg-primary text-white min-h-[100vh] flex items-center flex-col justify-between">
      <Heading heading={"Contact"} dark={true} />
      <div className=" w-[100%] flex flex-col sm:flex-row  items-center justify-around">
        <div className="flex flex-col sm:py-0 py-10 items-start justify-around ">
          <form>
            <Label heading="full Name" />
            <Label heading="email" />
            <Label heading="message" />
            <button className="my-3 border-4 border-white text-center w-[200px] font-bold py-2 rounded uppercase">
              send
            </button>
          </form>
        </div>
        <div className=" flex flex-col p-4 items-start justify-around ">
          <div>
            <a href="mailto:p.baswanth@outlook.com" className="flex items-center pb-[25px]">
              <img src={mail} className="w-[30px] h-[30px]" alt="icon" />{" "}
              <p className="pl-[15px] font-bold text-xl robotom capitalize">
                click to mail me{" "}
              </p>
            </a>
            <a href="tel:+917338702179" className="flex items-center pb-[25px]">
              <img src={mobile} className="w-[30px] h-[30px]" alt="icon" />{" "}
              <p className="pl-[15px] font-bold text-xl robotom capitalize">
                ping me me{" "}
              </p>
            </a>
          </div>

          <div>
            <div className="max-w-[300px] sm:w-auto font-bold text-xl robotom capitalize">
              {` I am available in multiple
platforms Let’s have chat in :`}
            </div>
            <div className="flex py-[30px]">
              <a href="https://github.com/bashu241997" className="px-3 ">
                <img src={Git} className="w-[40px] h-[40px]" alt="git" />
              </a>
              <a
                href="https://www.linkedin.com/in/baswanth-papisetty-91340b9a/"
                className="px-3 "
              >
                <img src={Lin} className="w-[40px] h-[40px]" alt="linkedin" />
              </a>
              <a href="https://www.instagram.com/baswanth_p/" className="px-3 ">
                <img src={Ins} className="w-[40px] h-[40px]" alt="instagram" />
              </a>
              <a href="https://bashu-53054.web.app/" className="px-3 ">
                <img src={Glob} className="w-[40px] h-[40px]" alt="globe" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-md font-bold py-6">Copyrights @ baswanth</div>
    </div>
  );
};

export default Contact;

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
    <div className="bg-primary text-white min-h-[100vh] flex items-center flex-col justify-center">
      <Heading heading={"Contact"} dark={true} />
      <div className=" w-[100%] grid sm:grid-cols-2 items-center justify-center">
        <div className="sm:pl-12 flex flex-col sm:py-0 py-10 items-start justify-around">
        <div className=" sm:w-auto font-bold text-xl py-6 robotom capitalize">
              {` I am available in multiple platforms Let’s chat `}
            </div>
          <form>
            <Label heading="full Name" />
            <Label heading="email" />
            <Label heading="message" />
            <button
              className="my-3 border-4 border-white text-center w-[200px] font-bold py-2 rounded uppercase"
              onClick={() => alert("working on it")}
            >
              send
            </button>
          </form>
          <a href="mailto:p.baswanth@outlook.com" className="flex items-center pt-[25px]">
              <img src={mail} className="w-[30px] h-[30px]" alt="icon" />{" "}
              <p className="pl-[15px] font-bold text-xl robotom capitalize">
                click to mail me{" "}
              </p>
            </a>
            <div className="flex py-[25px]">
           
              <a href="https://github.com/bashu241997" className="">
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
        <div className=" flex flex-col p-4 sm:p-10 items-start justify-around ">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                className="gmap_iframe"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Putta estate, MS Nagar, Parameshwari Nagar, Nellore&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div></div>

      <div className="text-md font-bold py-6">Copyrights @ baswanth</div>
    </div>
  );
};

export default Contact;

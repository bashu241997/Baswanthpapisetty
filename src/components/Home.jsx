import React from "react";
import { useNavigate  } from "react-router-dom"
const Home = () => {
  const history = useNavigate ()
  return (
    <div className="grid grid-cols-12 items-center md:max-h-[40vh] px-4">
      <div className="col-span-12 md:col-span-4 flex justify-center md:justify-end md:pr-[15px]">
        <img
          src={require("../assets/profile.png")}
          className="w-[200px] h-[200px]"
          alt="profile"
        />
      </div>
      <div className="col-span-12 md:col-span-8 py-4 md:py-0 md:pl-4 flex flex-col justify-around">
        <div className=" py-4 md:py-0 ">
        <h3 className="text-2xl font-bold">Hi I’m Papisetty Baswanth</h3>
        <h5  className="text-2xl pt-4 font-bold italic">I am Web and mobile application Developer </h5>
        </div>
        <div className="pt-[35px]">
          <button onClick={() => history('/projects')} className="animate-bounce uppercase py-1 px-4 bg-[#94a3b8] text-[#333] font-bold rounded-[30px] mr-2 border-4 border-[#94a3b8]">
            projects
          </button>
          <button onClick={() => history('/contact')} className="uppercase py-1 px-4 text-[#94a3b8] font-bold rounded-[30px] border-4 border-[#94a3b8]">
            contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

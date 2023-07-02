import React from "react";

import { useNavigate  } from "react-router-dom"
const About = () => {
  const history = useNavigate ()
  const title = `ABOUT ME`;
  const about = `As a web developer with 4.4 years of experience, I have developed a deep understanding of front-end and back-end technologies, including React, React Native, and Node.js. Throughout my career, I have worked on a range of projects, from building web applications from scratch to improving existing systems. I am passionate about creating engaging user experiences that solve real-world problems`;
  return (
    <div className="px-4 uppercase flex flex-col justify-around h-full">
      <h2 className="text-2xl font-bold py-4">{title}</h2>
      <h5 className="text-base px-4 md:px-[30px] text-justify md:tracking-wider py-4 md:py-6 md:leading-[40px]">{about}</h5>
      <button onClick={() => history('/experience')} className="block uppercase my-2 py-1 px-4 bg-[#94a3b8] text-[#333] font-bold rounded-[30px] mr-2 border-4 border-[#94a3b8]">
        experience
      </button>
    </div>
  );
};

export default About;

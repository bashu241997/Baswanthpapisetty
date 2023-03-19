import React from "react";
import { Heading, SubHeading } from "../../common/Heading";
import about from "../../assets/aboutme.gif";

const About = () => {
  const content = () =>
    "As a web developer with 4.4 years of experience, I have developed a deep understanding of front-end and back-end technologies, including React, React Native, and Node.js. Throughout my career, I have worked on a range of projects, from building web applications from scratch to improving existing systems. I am passionate about creating engaging user experiences that solve real-world problems.";
  return (
    <div id="about" className="py-[60px] sm:py-4">
      <Heading heading={"who am i .."} />
      <div className="min-h-[85vh] text-primary flex flex-col sm:flex-row  items-center gap-4 justify-center ">
        <div>
          <img className="w-[300px] sm:w-[650px]" alt="about" src={about} />
        </div>
        <div className="w-[300px] sm:w-[600px] flex flex-col text-left">
          <SubHeading heading={"I’m Baswanth Web application Developer"} />
          <p className="ubuntum text-2xl font-semibold text-justify py-4 pl-3 ">{content()}</p>
          <div className="pt-4">
          <button className='bg-primary text-white uppercase rounded-[50px] py-3 w-[120px] font-bold mr-3'>resume</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;

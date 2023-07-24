import React from "react";
import { styles, fadeIn, textVariant } from "../styles";

const About = () => {
  const about = `As a web developer with 4.4 years of experience, I have developed a deep understanding of front-end and back-end technologies, including React, React Native, and Node.js. Throughout my career, I have worked on a range of projects, from building web applications from scratch to improving existing systems. I am passionate about creating engaging user experiences that solve real-world problems`;
  return (
    <>
      <div className="min-h-[70vh] py-4 elementToFadeInAndOut">
        <div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </div>

        <p
           variants={fadeIn("", "", 0.1, 1)}
          className="mt-[15px] text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {about}
        </p>

        <button className="block uppercase mt-[30px] py-1 px-4 bg-[#333] text-[#fff] font-bold rounded-[30px] mr-2 border-4 border-[#333]">
          experience
        </button>
      </div>
    </>
  );
};

export default About;

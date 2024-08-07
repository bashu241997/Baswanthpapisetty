import React from "react";
import { styles, fadeIn, textVariant } from "../styles";

const About = () => {
  const about = `As a web developer with 4.4 years of experience, I have developed a deep understanding of front-end and back-end technologies, including React, React Native, and Node.js. Throughout my career, I have worked on a range of projects, from building web applications from scratch to improving existing systems. I am passionate about creating engaging user experiences that solve real-world problems`;
  return (
    <>
      <div
        id="about"
        className=" pb-8 flex flex-col sm:flex-row justify-between items-center "
      >
        <div>
          <div>
            <div timing={1}>
              <p className={styles.sectionSubText}>Introduction</p>
            </div>

            <div timing={1}>
              <h2 className={styles.sectionHeadText}>Overview 😀.</h2>
            </div>
          </div>

          <div timing={1}>
            {" "}
            <p className="mt-[15px] text-[#364056] text-[17px] max-w-4xl leading-[30px]">
              {about}
            </p>
          </div>

          <a
            href="#experience"
            className="block uppercase w-[200px] text-center mt-[30px] py-2 px-4 bg-[#0058dd] text-[#ffffff] font-bold rounded-[30px] mr-2 border-2  border-[#0058dd]"
          >
            experience
          </a>
        </div>
      </div>
    </>
  );
};

export default About;

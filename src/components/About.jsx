import React from "react";
import { styles, fadeIn, textVariant } from "../styles";

const About = () => {
  const about = `As a web developer with 4.4 years of experience, I have developed a deep understanding of front-end and back-end technologies, including React, React Native, and Node.js. Throughout my career, I have worked on a range of projects, from building web applications from scratch to improving existing systems. I am passionate about creating engaging user experiences that solve real-world problems`;
  return (
    <>
      <div
        id="about"
        className="min-h-[80vh] py-4 flex flex-col sm:flex-row justify-between items-center "
      >
        <div>
          <div>
            <div timing={1}>
              <p className={styles.sectionSubText}>Introduction</p>
            </div>

            <div timing={1}>
              <h2 className={styles.sectionHeadText}>Overview.</h2>
            </div>
          </div>

          <div timing={1}>
            {" "}
            <p className="mt-[15px] text-[#626262] text-[17px] max-w-3xl leading-[30px]">
              {about}
            </p>
          </div>

          <a
            href="#experience"
            className="block uppercase w-[200px] text-center mt-[30px] py-2 px-4 bg-[#307ae1] text-[#626262] font-bold rounded-[30px] mr-2 border-2  border-[#307ae1]"
          >
            experience
          </a>
        </div>
      </div>
    </>
  );
};

export default About;

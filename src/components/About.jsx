import React from "react";
import { styles, fadeIn, textVariant } from "../styles";
import { FadeInWhenVisible } from "../common/fadein";
import { SlideInWhenVisible } from "../common/slidein";

const About = () => {
  const about = `As a web developer with 4.4 years of experience, I have developed a deep understanding of front-end and back-end technologies, including React, React Native, and Node.js. Throughout my career, I have worked on a range of projects, from building web applications from scratch to improving existing systems. I am passionate about creating engaging user experiences that solve real-world problems`;
  return (
    <>
      <div id="about" className="min-h-[80vh] py-4 flex flex-col sm:flex-row justify-between items-center ">
    <div>
    <div
        >
          <FadeInWhenVisible timing={2}><p className={styles.sectionSubText}>Introduction</p></FadeInWhenVisible>
          
          <FadeInWhenVisible timing={2}><h2 className={styles.sectionHeadText}>Overview.</h2></FadeInWhenVisible>
        </div>

        <FadeInWhenVisible timing={2}> <p 
          className="mt-[15px] text-[#333] text-[17px] max-w-3xl leading-[30px]"
        >
          {about}
        </p></FadeInWhenVisible>

        <a href="#experience" className="block uppercase w-[200px] text-center mt-[30px] py-1 px-4 bg-[#333] text-[#f7f7f7] font-bold rounded-[30px] mr-2 border-4 border-[#333]">
          experience
        </a>
    </div>
<div>
<SlideInWhenVisible timing={1} side="r"><div

className="flex my-[50px] sm:my-0 px-[20px] items-center justify-around"
>
<img
  src={require("../assets/profile.png")}
  className="w-[300px] h-[300px]"
  alt="profile"
/>
</div></SlideInWhenVisible>
</div>
      </div>
    </>
  );
};

export default About;

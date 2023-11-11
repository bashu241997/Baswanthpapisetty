import React from "react";
import { styles, fadeIn, textVariant } from "../styles";
import Disney from "../assets/disney_clone.png"
import Weather from "../assets/Next.png"
import chat from "../assets/chat_app.png"
import Doctor from "../assets/doct.png"
import Basicer from "../assets/bas.png"
import { ProjectCard } from "../common/ProjectCard";
import { FadeInWhenVisible } from "../common/fadein";

const SkillContainer = () => {



    const Skillser = ["html 5","scss","java","java Script","type Script","angular","react","react native","python","reddis","node"]

  return (
    <div id="SkillContainer" className="min-h-[70vh] pt-[30px] pb-[40px]" >
      <div variants={textVariant()}>
      <FadeInWhenVisible timing={1}>  <p className={`${styles.sectionSubText} `}>My Skills</p></FadeInWhenVisible> 
      </div>
    
      <FadeInWhenVisible timing={1.5}><h2 className={`${styles.sectionHeadText}`}>Tech Stack and Skills.</h2></FadeInWhenVisible> 

      <div className='p-6 grid grid-cols-2 sm:grid-cols-4 gap-6'>
        {Skillser.map((project, index) => (
            <div
            className="bg-exp-pattern border border-[#307ae1] text-[#dcdcdc]  p-[30px] text-center uppercase  shadow-lg rounded-[10px] scale-90 duration-300 hover:scale-100 w-full"
          >{project}</div>
        ))}
      </div>
    </div>
  );
};

export default SkillContainer;

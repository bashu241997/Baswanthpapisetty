import React from "react";
import { styles, fadeIn, textVariant } from "../styles";
import { ProjectCard } from "../common/ProjectCard";

const SkillContainer = () => {



    const Skillser = ["html 5","scss","java","java Script","type Script","angular","react","react native","python","reddis","node"]

  return (
    <div id="SkillContainer">
      <div variants={textVariant()}>
      <div timing={1}>  <p className={`${styles.sectionSubText} `}>My Skills</p></div> 
      </div>
    
      <div timing={1.5}><h2 className={`${styles.sectionHeadText}`}>Tech Stack and Skills.</h2></div> 

      <div className='p-6 grid grid-cols-2 sm:grid-cols-4 gap-6'>
        {Skillser.map((project, index) => (
            <div
            className="bg-exp-pattern border border-[#0058dd] text-[#364056]  p-[30px] text-center uppercase  shadow-lg rounded-[10px] scale-90 duration-300 hover:scale-100 w-full"
          >{project}</div>
        ))}
      </div>
    </div>
  );
};

export default SkillContainer;

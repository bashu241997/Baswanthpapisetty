import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";

const SkillGroup = ({ title, skills, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="dark-card p-6 sm:p-8"
  >
    <h3 className="text-[15px] font-bold text-slate-900 mb-6 flex items-center gap-2">
      <span className="w-1 h-5 rounded-full bg-[#4a729f]" />
      {title}
    </h3>
    
    <div className="flex flex-wrap gap-2.5">
      {skills.map((skill) => (
        <span 
          key={skill} 
          className="px-3.5 py-2 rounded-lg bg-gray-50 border border-gray-200/60 text-[12px] text-slate-700 font-medium hover:text-[#4a729f] hover:border-[#4a729f]/30 hover:bg-[#4a729f]/5 transition-all duration-200 cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const SkillContainer = () => {
  const categories = [
    { 
      title: "Frontend Engineering", 
      skills: ["React / Next.js", "TypeScript", "Angular", "JavaScript (ES6+)", "HTML5 / CSS3", "React Native", "Redux / Redux Saga", "RxJS"] 
    },
    { 
      title: "Backend & Cloud", 
      skills: ["Node.js / Express", "Java / Spring Boot", "GraphQL / REST APIs", "Fastify", "SQL / PostgreSQL", "Redis / MongoDB", "Firebase", "Sanity.io"] 
    },
    { 
      title: "DevOps, QA & Tooling", 
      skills: ["Jest / Mocha / Chai", "Cypress / TestCafe", "Azure (AZ-900)", "CI/CD Pipelines", "Docker", "NX Mono Repo", "Bit.dev", "Webpack / Vite", "Storybook", "Figma"] 
    },
  ];

  return (
    <div id="SkillContainer" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className={`${styles.sectionSubText}`}>My Proficiencies</p>
          <h2 className={`${styles.sectionHeadText} mt-2`}>
            Tech Stack & <span className="gradient-text">Skills</span>
          </h2>
          <div className="h-[2px] w-12 bg-[#4a729f] rounded-full mt-4 mx-auto" />
        </motion.div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c, i) => (
            <SkillGroup key={c.title} index={i} title={c.title} skills={c.skills} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default SkillContainer;

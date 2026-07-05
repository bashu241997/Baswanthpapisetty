import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { ProjectCard } from "../common/ProjectCard";

const Projects = () => {
  const projects = [
    {
      name: "Hospital Management App", 
      description: "A comprehensive patient and doctor coordination system featuring scheduling workflows, medical record history, and communication channels.",
      tags: [{ name: "React", color: "text-[#0e7490]" }, { name: "Next.js", color: "text-gray-600" }, { name: "TypeScript", color: "text-cyan-600" }],
      source_code_link: "https://github.com/bashu241997/HMS", 
      domain: "https://hospitalmanagementsystemsproject.vercel.app/overview"
    },
    {
      name: "Whisper Hub", 
      description: "Real-time chat platform supporting direct messaging, channel creation, file sharing, and automated presence/typing indicators.",
      tags: [{ name: "React", color: "text-[#0e7490]" }, { name: "Socket.io", color: "text-emerald-600" }, { name: "Node.js", color: "text-indigo-600" }],
      source_code_link: "https://github.com/bashu241997/private-cht", 
      domain: "https://clonedwebsites.web.app/login"
    },
    {
      name: "Magic Kingdom", 
      description: "A clean UI streaming site clone styled for high visual engagement and optimized media load configurations.",
      tags: [{ name: "Next.js", color: "text-gray-600" }, { name: "React", color: "text-[#0e7490]" }, { name: "Tailwind CSS", color: "text-cyan-600" }],
      source_code_link: "https://github.com/bashu241997/Disney-clone", 
      domain: "https://clonedwebsites.web.app/login"
    },
    {
      name: "Weather Dashboard", 
      description: "Real-time atmospheric condition tracking system with location mapping, hourly predictions, and responsive dynamic background styles.",
      tags: [{ name: "React", color: "text-[#0e7490]" }, { name: "TypeScript", color: "text-cyan-600" }, { name: "OpenWeather API", color: "text-amber-600" }],
      source_code_link: "https://github.com/bashu241997/improved-weather", 
      domain: "https://improved-weather.vercel.app/"
    },
    {
      name: "JavaScript Collection", 
      description: "An organized index of functional mini utilities demonstrating core DOM operations, canvas logic, and REST consumption workflows.",
      tags: [{ name: "JavaScript", color: "text-amber-600" }, { name: "HTML5 / CSS3", color: "text-orange-600" }],
      source_code_link: "https://github.com/bashu241997/javascriptprojects", 
      domain: "https://samplejavascriptexampleapps.web.app/"
    },
  ];

  return (
    <div id="projects" className="py-24 sm:py-32 section-alt relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section title */}
        <div className="mb-16 text-center lg:text-left">
          <p className={`${styles.sectionSubText}`}>My work</p>
          <h2 className={`${styles.sectionHeadText} mt-2`}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="h-[2px] w-12 bg-[#0e7490] rounded-full mt-4 mx-auto lg:mx-0" />
          <p className="mt-4 text-slate-600 text-[14px] max-w-lg leading-relaxed mx-auto lg:mx-0">
            A selection of applications and codebases built using modern frontend frameworks and integrations.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex"
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { ProjectCard } from "../common/ProjectCard";

const Projects = () => {
  const projects = [
    {
      name: "Enterprise Patient & Clinician Portal", 
      description: "A secure patient-doctor coordination application. Integrated dynamic forms, real-time schedule orchestration, and optimized client rendering workflows.",
      tags: [{ name: "React", color: "text-[#4a729f]" }, { name: "Next.js", color: "text-gray-600" }, { name: "TypeScript", color: "text-cyan-600" }],
      source_code_link: "https://github.com/bashu241997/HMS", 
      domain: "https://hospitalmanagementsystemsproject.vercel.app/overview"
    },
    {
      name: "Whisper Hub Messaging Engine", 
      description: "A real-time messaging client built using a micro-frontend architecture. Implemented presence tracking, live channel sockets, and highly optimized script payloads.",
      tags: [{ name: "React", color: "text-[#4a729f]" }, { name: "Socket.io", color: "text-emerald-600" }, { name: "Node.js", color: "text-indigo-600" }],
      source_code_link: "https://github.com/bashu241997/private-cht", 
      domain: "https://clonedwebsites.web.app/login"
    },
    {
      name: "Magic Kingdom Streaming Client", 
      description: "A responsive streaming portal clone optimized for asset load configurations, smooth rendering, and Core Web Vitals targets.",
      tags: [{ name: "Next.js", color: "text-gray-600" }, { name: "React", color: "text-[#4a729f]" }, { name: "Tailwind CSS", color: "text-cyan-600" }],
      source_code_link: "https://github.com/bashu241997/Disney-clone", 
      domain: "https://clonedwebsites.web.app/login"
    },
    {
      name: "Telemetry & Weather Dashboard", 
      description: "Real-time weather tracking client featuring live charting, location geolocation matching, and responsive web performance configurations.",
      tags: [{ name: "React", color: "text-[#4a729f]" }, { name: "TypeScript", color: "text-cyan-600" }, { name: "OpenWeather API", color: "text-amber-600" }],
      source_code_link: "https://github.com/bashu241997/improved-weather", 
      domain: "https://improved-weather.vercel.app/"
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
          <div className="h-[2px] w-12 bg-[#4a729f] rounded-full mt-4 mx-auto lg:mx-0" />
          <p className="mt-4 text-slate-600 text-[14px] max-w-lg leading-relaxed mx-auto lg:mx-0">
            A selection of SaaS products, web applications, and side-projects demonstrating modern frontend architecture and clean code.
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

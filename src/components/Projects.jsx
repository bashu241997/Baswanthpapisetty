import React, { useRef } from "react";
import { styles } from "../styles";
import { motion, useScroll, useTransform } from "framer-motion";
import { ProjectCard } from "../common/ProjectCard";

const Projects = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  // Horizontal scroll — transforms vertical scroll into horizontal movement
  const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-60%"]);

  const projects = [
    {
      name: "Hospital Management App", description: "Patient and doctor management system for appointments, medical records, and communication.",
      tags: [{ name: "React", color: "text-violet-400" }, { name: "Next.js", color: "text-zinc-400" }, { name: "TypeScript", color: "text-fuchsia-300" }],
      source_code_link: "https://github.com/bashu241997/HMS", domain: "https://hospitalmanagementsystemsproject.vercel.app/overview"
    },
    {
      name: "Weather App", description: "Real-time weather with conditions, hourly & daily forecasts, and animated backgrounds.",
      tags: [{ name: "React", color: "text-violet-400" }, { name: "TypeScript", color: "text-fuchsia-300" }, { name: "API", color: "text-amber-300" }],
      source_code_link: "https://github.com/bashu241997/improved-weather", domain: "https://improved-weather.vercel.app/"
    },
    {
      name: "Whisper Hub", description: "Real-time chat with text, file sharing, end-to-end encryption and typing indicators.",
      tags: [{ name: "React", color: "text-violet-400" }, { name: "Socket.io", color: "text-emerald-400" }, { name: "Node.js", color: "text-emerald-300" }],
      source_code_link: "https://github.com/bashu241997/private-cht", domain: "https://clonedwebsites.web.app/login"
    },
    {
      name: "Magic Kingdom", description: "Disney-inspired platform clone with immersive content browsing and streaming.",
      tags: [{ name: "Next.js", color: "text-zinc-400" }, { name: "React", color: "text-violet-400" }],
      source_code_link: "https://github.com/bashu241997/Disney-clone", domain: "https://clonedwebsites.web.app/login"
    },
    {
      name: "JavaScript Projects", description: "Interactive JS projects — DOM manipulation, API integrations, and canvas animations.",
      tags: [{ name: "JavaScript", color: "text-amber-300" }, { name: "HTML5", color: "text-orange-300" }],
      source_code_link: "https://github.com/bashu241997/javascriptprojects", domain: "https://samplejavascriptexampleapps.web.app/"
    },
  ];

  return (
    <div ref={containerRef} id="projects" className="relative min-h-[300vh] section-alt">
      {/* Sticky container for horizontal scroll */}
      <div className="sticky top-0 min-h-screen flex flex-col justify-center overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className={`${styles.sectionSubText}`}>My work</p>
            <h2 className={`${styles.sectionHeadText} mt-2`}>Featured <span className="gradient-text">Projects</span></h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[2px] bg-gradient-to-r from-[#a78bfa] to-[#f0abfc] rounded-full mt-4"
            />
            <p className="mt-4 text-[#71717a] text-[14px] max-w-lg leading-[24px]">
              Scroll to explore my projects →
            </p>
          </motion.div>
        </div>

        {/* Horizontal scrolling project cards */}
        <motion.div
          ref={scrollRef}
          style={{ x }}
          className="flex gap-6 px-4 sm:px-8 lg:px-16"
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="min-w-[300px] sm:min-w-[350px] flex-shrink-0"
              style={{ perspective: 1000 }}
            >
              <ProjectCard index={i} {...p} />
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll progress dots */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, i) => (
            <ProgressDot key={i} index={i} total={projects.length} scrollYProgress={scrollYProgress} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Separate component so useTransform is called at component level (not in a callback)
const ProgressDot = ({ index, total, scrollYProgress }) => {
  const dotStart = 0.1 + (index * 0.8) / total;
  const dotEnd = dotStart + 0.8 / total;
  const opacity = useTransform(scrollYProgress, [dotStart, dotStart + 0.05, dotEnd - 0.05, dotEnd], [0.2, 0.8, 0.8, 0.2]);
  const scale = useTransform(scrollYProgress, [dotStart, dotStart + 0.05, dotEnd - 0.05, dotEnd], [0.6, 1.2, 1.2, 0.6]);

  return (
    <motion.div
      className="w-2 h-2 rounded-full"
      style={{ backgroundColor: "#a78bfa", opacity, scale }}
    />
  );
};

export default Projects;

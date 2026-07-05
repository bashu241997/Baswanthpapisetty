import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";

const About = () => {
  const aboutText = `I am a Senior Full Stack Web Developer with 7 years of professional experience designing, building, and deploying enterprise-grade web applications. My expertise spans Next.js, React, Angular, and Node.js, with hands-on exposure to Java, Spring Boot, and cloud environments. Throughout my career, I have focused on innovating high-impact solutions for e-commerce, retail, and travel & hospitality domains, with a strong focus on web performance metrics, micro-frontend architecture, and developer productivity.`;

  const highlights = [
    { icon: "🚀", title: "Performance Engineering", desc: "Reduced INP from 590ms to 190ms via P95 analysis for Walmart applications.", metric: "3x" },
    { icon: "🏗️", title: "Micro-Frontends", desc: "Architected high-scale micro-frontends using Bit.dev in NX Monorepos.", metric: "10+ Apps" },
    { icon: "⚡", title: "Development Speed", desc: "Created custom UI automation tools cutting feature delivery from 6 sprints to 1.5 sprints.", metric: "4x Speed" },
    { icon: "🏆", title: "Excellence Award", desc: "Received the prestigious 'Accenture Celebrates Excellence' award for technical innovation.", metric: "1" },
  ];

  return (
    <div id="about" className="py-24 sm:py-32 section-alt relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div className="mb-12 text-center lg:text-left">
          <p className={`${styles.sectionSubText}`}>Introduction</p>
          <h2 className={`${styles.sectionHeadText} mt-2`}>
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="h-[2px] w-12 bg-[#4a729f] rounded-full mt-4 mx-auto lg:mx-0" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Main Professional Paragraph & Socials */}
          <div className="flex-1 space-y-6">
            <p className="text-slate-600 text-[15px] sm:text-[16px] leading-[1.75] font-normal">
              {aboutText}
            </p>
            <div className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#experience" className="btn-primary">
                View Work History →
              </a>
              <a 
                href="https://www.linkedin.com/in/baswanth-papisetty-91340b9a/" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-outline"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Key Achievements Grid (Refined & interactive cards) */}
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="dark-card p-5 group flex flex-col justify-between min-h-[160px]"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#4a729f]/5 border border-[#4a729f]/10 flex items-center justify-center text-xl">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold text-[#4a729f] font-mono bg-[#4a729f]/10 px-2.5 py-0.5 rounded-full">
                    {item.metric}
                  </span>
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-[14px] mb-1.5">{item.title}</h3>
                  <p className="text-slate-600 text-[12px] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;

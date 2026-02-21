import React, { useRef } from "react";
import { styles } from "../styles";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";

const SkillBar = ({ name, level, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay }}>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-[12px] font-medium text-[#e4e4e7]">{name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 1 }}
          className="text-[10px] text-[#71717a]"
        >{level}%</motion.span>
      </div>
      <div className="skill-bar-bg">
        <motion.div initial={{ width: 0 }} animate={isInView ? { width: `${level}%` } : { width: 0 }} transition={{ duration: 1.5, delay: delay + 0.2, ease: [0.25, 0.46, 0.45, 0.94] }} className="skill-bar-fill" />
      </div>
    </motion.div>
  );
};

const SkillContainer = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const dnaY = useTransform(smoothProgress, [0, 1], [150, -150]);
  const cardsScale = useTransform(smoothProgress, [0.05, 0.3], [0.85, 1]);
  const cardsY = useTransform(smoothProgress, [0.05, 0.3], [80, 0]);

  const cats = [
    { title: "Frontend", skills: [{ name: "React / Next.js", level: 95 }, { name: "TypeScript", level: 90 }, { name: "Angular", level: 80 }, { name: "JavaScript (ES6+)", level: 95 }, { name: "HTML5 / CSS3", level: 95 }] },
    { title: "Backend", skills: [{ name: "Node.js / Express", level: 90 }, { name: "Java / Spring Boot", level: 72 }, { name: "GraphQL / REST", level: 88 }, { name: "SQL / PostgreSQL", level: 82 }, { name: "Redis / MongoDB", level: 78 }] },
    { title: "Testing & DevOps", skills: [{ name: "Jest / Mocha / Chai", level: 85 }, { name: "Cypress / TestCafe", level: 80 }, { name: "Azure (AZ-900)", level: 75 }, { name: "CI/CD / Git", level: 88 }, { name: "Docker / Firebase", level: 78 }] },
  ];

  return (
    <div ref={containerRef} id="SkillContainer" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Parallax DNA helix */}
      <motion.div style={{ y: dnaY }} className="absolute left-4 sm:left-12 top-1/4 opacity-[0.04] pointer-events-none">
        <svg width="60" height="300" viewBox="0 0 60 300" fill="none">
          {[0, 40, 80, 120, 160, 200, 240].map((y, i) => (
            <g key={i}><ellipse cx={i % 2 === 0 ? "15" : "45"} cy={y + 20} rx="12" ry="6" stroke="#a78bfa" strokeWidth="1.5" /><line x1="15" y1={y + 20} x2="45" y2={y + 20} stroke="#f0abfc" strokeWidth="0.8" opacity="0.4" /></g>
          ))}
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className={`${styles.sectionSubText}`}>My Proficiencies</p>
          <h2 className={`${styles.sectionHeadText} mt-2`}>Tech Stack & <span className="gradient-text">Skills</span></h2>
          <motion.div initial={{ width: 0 }} whileInView={{ width: 40 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] bg-gradient-to-r from-[#a78bfa] to-[#f0abfc] rounded-full mt-4" />
        </motion.div>

        <motion.div style={{ scale: cardsScale, y: cardsY }} className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cats.map((c, ci) => (
            <motion.div key={c.title}
              initial={{ opacity: 0, y: 50, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.15 }}
              className="dark-card p-6"
            >
              <h3 className="text-[15px] font-bold gradient-text mb-5 flex items-center gap-2">
                <span className="w-1 h-5 rounded-full bg-gradient-to-b from-[#a78bfa] to-[#f0abfc]" />{c.title}
              </h3>
              <div className="space-y-3.5">{c.skills.map((s, i) => <SkillBar key={s.name} {...s} delay={i * 0.1} />)}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mt-10 flex flex-wrap justify-center gap-2">
          {["React Native", "RxJS", "Redux Saga", "NX Mono Repo", "Bit.dev", "Sanity.io", "Fastify", "Webpack", "Vite", "Figma", "Storybook", "MERN Stack"].map((t, i) => (
            <motion.span key={t}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, type: "spring" }}
              whileHover={{ scale: 1.1, y: -3 }}
              className="px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.05] text-[11px] text-[#71717a] font-medium hover:text-[#a78bfa] hover:border-[#a78bfa]/20 transition-colors cursor-default"
            >{t}</motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillContainer;

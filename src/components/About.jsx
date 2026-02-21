import React, { useRef } from "react";
import { styles } from "../styles";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";

// Animated text that reveals word by word on scroll
const ScrollRevealText = ({ text, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const words = text.split(" ");

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.5, delay: i * 0.04 }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Cards scale up from small as you scroll into view
  const cardsScale = useTransform(smoothProgress, [0.1, 0.35], [0.8, 1]);
  const cardsOpacity = useTransform(smoothProgress, [0.1, 0.3], [0, 1]);
  const cardsY = useTransform(smoothProgress, [0.1, 0.35], [60, 0]);

  // Parallax for decorative illustration
  const illustrationY = useTransform(smoothProgress, [0, 1], [120, -120]);
  const illustrationRotate = useTransform(smoothProgress, [0, 1], [-8, 15]);

  const about = `Full Stack Web Developer with 7 years of experience in designing, developing, and deploying scalable web applications using Next.js, React.js, Angular.js, and Node.js, with exposure to Java and Spring Boot. Worked in implementing and innovating solutions for retail, e-commerce, and travel & hospitality domains.`;

  const highlights = [
    { icon: "🚀", title: "Performance", desc: "Reduced INP from 590ms to 190ms via P95 analysis at Walmart", num: "3x" },
    { icon: "🏗️", title: "Architecture", desc: "Micro-frontend architecture using Bit.dev in NX Mono Repo", num: "10+" },
    { icon: "⚡", title: "Innovation", desc: "Cut feature delivery from 6 sprints to 1.5 sprints", num: "4x" },
    { icon: "🏆", title: "Award", desc: "Accenture Celebrates Excellence award for innovation", num: "1" },
  ];

  return (
    <div ref={containerRef} id="about" className="relative py-28 sm:py-36 section-alt overflow-hidden">
      {/* Floating code editor illustration */}
      <motion.div style={{ y: illustrationY, rotate: illustrationRotate }} className="absolute right-0 sm:right-8 top-1/4 opacity-[0.06] pointer-events-none hidden lg:block">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
          <rect x="20" y="20" width="260" height="180" rx="14" stroke="#a78bfa" strokeWidth="2" />
          <rect x="20" y="20" width="260" height="30" rx="14" fill="#a78bfa" fillOpacity="0.08" />
          <circle cx="42" cy="35" r="5" fill="#f0abfc" fillOpacity="0.4" /><circle cx="58" cy="35" r="5" fill="#a78bfa" fillOpacity="0.4" /><circle cx="74" cy="35" r="5" fill="#a78bfa" fillOpacity="0.2" />
          <line x1="40" y1="70" x2="140" y2="70" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
          <line x1="50" y1="88" x2="180" y2="88" stroke="#f0abfc" strokeWidth="2" strokeLinecap="round" opacity="0.25" />
          <line x1="50" y1="106" x2="130" y2="106" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" opacity="0.2" />
          <line x1="60" y1="124" x2="200" y2="124" stroke="#f0abfc" strokeWidth="2" strokeLinecap="round" opacity="0.18" />
          <line x1="50" y1="142" x2="160" y2="142" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" opacity="0.15" />
          <line x1="40" y1="160" x2="120" y2="160" stroke="#f0abfc" strokeWidth="2" strokeLinecap="round" opacity="0.12" />
          <rect x="60" y="220" width="180" height="60" rx="10" stroke="#f0abfc" strokeWidth="1.5" opacity="0.2" />
          <line x1="75" y1="240" x2="220" y2="240" stroke="#a78bfa" strokeWidth="1" opacity="0.1" />
          <line x1="75" y1="255" x2="180" y2="255" stroke="#f0abfc" strokeWidth="1" opacity="0.1" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section title with scroll reveal */}
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`${styles.sectionSubText}`}
          >
            Introduction
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`${styles.sectionHeadText} mt-2`}
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] bg-gradient-to-r from-[#a78bfa] to-[#f0abfc] rounded-full mt-4"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Text with word-by-word reveal */}
          <div className="flex-1">
            <p className="text-[#71717a] text-[15px] leading-[28px]">
              <ScrollRevealText text={about} />
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <a href="#experience" className="btn-primary">View Experience →</a>
              <a href="https://www.linkedin.com/in/baswanth-papisetty-91340b9a/" target="_blank" rel="noreferrer" className="btn-outline">LinkedIn</a>
            </motion.div>
          </div>

          {/* Cards that scale in with scroll */}
          <motion.div
            style={{ scale: cardsScale, opacity: cardsOpacity, y: cardsY }}
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="dark-card p-5 group"
              >
                <div className="flex items-start justify-between">
                  <div className="text-2xl">{item.icon}</div>
                  <span className="text-[22px] font-black gradient-text opacity-40 group-hover:opacity-80 transition-opacity">{item.num}</span>
                </div>
                <h3 className="text-[#e4e4e7] font-bold text-[14px] mt-2 mb-1">{item.title}</h3>
                <p className="text-[#71717a] text-[12px] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

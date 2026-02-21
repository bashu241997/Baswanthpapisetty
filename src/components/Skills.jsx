import React, { useRef } from "react";
import { styles } from "../styles";
import { motion, useScroll, useTransform } from "framer-motion";

const ServiceCard = ({ index, title, Icon, sub }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.9, filter: "blur(6px)" }}
    whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
    whileHover={{ y: -6, scale: 1.03 }}
    className="dark-card p-7 text-center group cursor-pointer"
  >
    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#a78bfa]/[0.08] flex items-center justify-center group-hover:bg-[#a78bfa]/[0.15] transition-colors duration-500">
      <div className="text-[#a78bfa] group-hover:scale-110 transition-transform duration-500">{Icon()}</div>
    </div>
    <div className="text-[11px] uppercase tracking-[3px] text-[#a78bfa] font-semibold mb-2">{sub}</div>
    <h3 className="text-[#e4e4e7] text-[13px] font-semibold leading-relaxed">{title}</h3>
  </motion.div>
);

export const Skills = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const globeRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const services = [
    { Icon: () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>, sub: "Web", title: "Full Stack Apps with React, Next.js, Angular & Node.js" },
    { Icon: () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>, sub: "Mobile", title: "Cross-Platform Apps with React Native & Flutter" },
    { Icon: () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>, sub: "Cloud", title: "Cloud Solutions with AWS, Azure & Serverless Architecture" },
    { Icon: () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>, sub: "UI/UX", title: "Modern UI/UX Design with Figma & Design Systems" },
  ];

  return (
    <div ref={containerRef} id="skills" className="relative py-28 sm:py-36 section-alt overflow-hidden">
      <motion.div style={{ rotate: globeRotate }} className="absolute right-6 sm:right-16 top-1/3 opacity-[0.04] pointer-events-none">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
          <circle cx="90" cy="90" r="70" stroke="#a78bfa" strokeWidth="1.5" />
          <ellipse cx="90" cy="90" rx="70" ry="30" stroke="#f0abfc" strokeWidth="1" />
          <ellipse cx="90" cy="90" rx="30" ry="70" stroke="#a78bfa" strokeWidth="1" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <p className={`${styles.sectionSubText}`}>What I can do</p>
          <h2 className={`${styles.sectionHeadText} mt-2`}><span className="gradient-text">Services</span></h2>
          <motion.div initial={{ width: 0 }} whileInView={{ width: 40 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] bg-gradient-to-r from-[#a78bfa] to-[#f0abfc] rounded-full mt-4 mx-auto" />
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => <ServiceCard key={s.title} index={i} {...s} />)}
        </div>
      </div>
    </div>
  );
};

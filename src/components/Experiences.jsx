import React, { useRef } from "react";
import Acc from "../assets/acc.png";
import Wal from "../assets/wal.png";
import Tcs from "../assets/tcs.png";
import { ExperienceCard } from "../common/ExpCard";
import { styles } from "../styles";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Experiences = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  // Timeline line grows as you scroll through the section
  const lineHeight = useTransform(smoothProgress, [0, 0.9], ["0%", "100%"]);

  // Parallax for decorative elements
  const rocketY = useTransform(smoothProgress, [0, 1], [250, -250]);
  const gearRotate = useTransform(smoothProgress, [0, 1], [0, 720]);

  const experiences = [
    {
      title: "Software Engineer III",
      company_name: "Walmart",
      icon: Wal,
      iconBg: "rgba(167,139,250,0.15)",
      date: "April 2023 – Present",
      points: [
        "Architected a complex, client-heavy application for GRE project, specializing in dynamic form generation and integrating WYSIWYG and JSON editors.",
        "Optimized high-volume apps — server response time under 150ms via GraphQL & Fastify.",
        "Reduced INP from 590ms to 190ms through P95 metric analysis.",
        "Created a custom Node.js/TypeScript CLI automating dev and deployment workflows.",
        "Built a UI tool that reduced feature delivery from six sprints to 1.5 sprints.",
      ],
    },
    {
      title: "Senior Software Engineer",
      company_name: "Accenture (Client: AT&T)",
      icon: Acc,
      iconBg: "rgba(240,171,252,0.15)",
      date: "August 2021 – March 2023",
      points: [
        "Architected the full lifecycle of AT&T BYOD feature as sole contributor for the entire web platform.",
        "Rewrote customer-facing app to micro-frontend architecture using Bit.dev in NX Mono Repo.",
        "Reduced TTFB via Next.js SSR for Product Detail Pages.",
        "Integrated Sanity.io Headless CMS with SSR for PDP and Landing Pages.",
        "Received \"Accenture Celebrates its Excellence\" award.",
      ],
    },
    {
      title: "Systems Engineer",
      company_name: "Tata Consultancy Services",
      icon: Tcs,
      iconBg: "rgba(167,139,250,0.10)",
      date: "November 2018 – July 2021",
      points: [
        "Developed enterprise hybrid mobile apps using React Native for Travel Domain.",
        "Integrated React Native Biometrics, Redux, and Redux Saga.",
        "Leveraged RxJS for real-time flight check status tracking.",
        "Built reusable HOCs for micro-frontend architecture.",
        "Enhanced LCP performance in Angular tech stack.",
      ],
    },
  ];

  return (
    <div ref={containerRef} id="experience" className="relative min-h-[250vh] overflow-hidden">
      {/* Sticky container — this stays fixed while you scroll */}
      <div className="sticky top-0 min-h-screen flex flex-col justify-center py-20">
        {/* Parallax rocket */}
        <motion.div style={{ y: rocketY }} className="absolute right-6 sm:right-16 top-1/4 opacity-[0.05] pointer-events-none">
          <svg width="100" height="180" viewBox="0 0 120 200" fill="none">
            <path d="M60 10C60 10 30 50 30 100C30 140 45 170 60 190C75 170 90 140 90 100C90 50 60 10 60 10Z" stroke="#a78bfa" strokeWidth="2" />
            <circle cx="60" cy="90" r="12" stroke="#f0abfc" strokeWidth="2" />
            <path d="M30 100L10 130L30 120Z" stroke="#a78bfa" strokeWidth="1.5" />
            <path d="M90 100L110 130L90 120Z" stroke="#a78bfa" strokeWidth="1.5" />
            <path d="M45 185L60 200L75 185" stroke="#f0abfc" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.div>

        {/* Spinning gear */}
        <motion.div style={{ rotate: gearRotate }} className="absolute left-4 sm:left-12 bottom-1/4 opacity-[0.04] pointer-events-none">
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="20" stroke="#a78bfa" strokeWidth="2" />
            <circle cx="50" cy="50" r="8" stroke="#f0abfc" strokeWidth="1.5" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map(a => (
              <rect key={a} x="46" y="10" width="8" height="16" rx="3" stroke="#a78bfa" strokeWidth="1.5" transform={`rotate(${a} 50 50)`} />
            ))}
          </svg>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className={`${styles.sectionSubText}`}>What I have done so far</p>
            <h2 className={`${styles.sectionHeadText} mt-2`}>Work <span className="gradient-text">Experience</span></h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[2px] bg-gradient-to-r from-[#a78bfa] to-[#f0abfc] rounded-full mt-4 mx-auto"
            />
          </motion.div>

          {/* Timeline cards — each fades in based on scroll position */}
          <div className="relative max-w-4xl mx-auto">
            {/* Animated timeline line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-[1.5px]">
              <div className="w-full h-full bg-white/[0.03]" />
              <motion.div
                style={{ height: lineHeight }}
                className="absolute top-0 w-full bg-gradient-to-b from-[#a78bfa] to-[#f0abfc] rounded-full opacity-40"
              />
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 60, scale: 0.92, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="md:pl-20 relative"
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-[26px] top-6 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", delay: 0.2 + index * 0.1 }}
                        className="timeline-dot"
                      />
                    </div>
                    <ExperienceCard experience={exp} index={index} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
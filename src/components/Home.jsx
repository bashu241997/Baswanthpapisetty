import React, { useEffect, useState, useRef } from "react";
import { styles } from "../styles";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const roles = ["Full Stack Developer", "React Specialist", "Node.js Engineer", "Frontend Architect"];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

  // Smooth spring-based parallax
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(smoothProgress, [0, 0.4], [1, 0]);
  const heroY = useTransform(smoothProgress, [0, 0.5], [0, 200]);

  const illustrationY = useTransform(smoothProgress, [0, 0.5], [0, -120]);
  const illustrationScale = useTransform(smoothProgress, [0, 0.5], [1, 1.15]);
  const illustrationRotate = useTransform(smoothProgress, [0, 0.5], [0, 12]);
  const badgeX = useTransform(smoothProgress, [0, 0.4], [0, 80]);
  const statsOpacity = useTransform(smoothProgress, [0, 0.25], [1, 0]);
  const statsY = useTransform(smoothProgress, [0, 0.3], [0, 100]);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;
    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((p) => (p + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setDisplayText(isDeleting ? currentRole.substring(0, displayText.length - 1) : currentRole.substring(0, displayText.length + 1));
      }, isDeleting ? 35 : 70);
    }
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  // Staggered word reveal for the heading
  const headingWords = "Baswanth Papisetty".split(" ");

  return (
    <div ref={containerRef} id="homer" className="min-h-[120vh] relative">
      <motion.section
        style={{ opacity: heroOpacity }}
        className="sticky top-0 min-h-screen flex items-center overflow-hidden"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">
            {/* Left content with staggered reveals */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] mb-5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[12px] text-[#71717a] font-medium">Available for opportunities</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`${styles.heroSub2Text} mb-1`}
              >
                Hi there 👋, I'm
              </motion.h1>

              {/* Big name with word-by-word reveal */}
              <h1 className="font-black text-[#e4e4e7] text-[40px] sm:text-[52px] lg:text-[68px] leading-tight overflow-hidden">
                {headingWords.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 100, opacity: 0, rotateX: -80 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="inline-block mr-4"
                    style={{ perspective: 600 }}
                  >
                    {i === 1 ? <span className="gradient-text">{word}</span> : word}
                  </motion.span>
                ))}
              </h1>

              <motion.div
                style={{ y: heroY }}
                className="h-[38px] sm:h-[46px] flex items-center justify-center lg:justify-start mt-1"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-[17px] sm:text-[24px] font-bold gradient-text"
                >
                  {displayText}
                </motion.span>
                <span className="typing-cursor" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className={`${styles.heroSubText} mt-3 max-w-xl mx-auto lg:mx-0`}
              >
                7+ years building scalable applications at{" "}
                <span className="text-[#e4e4e7] font-semibold">Walmart</span>,{" "}
                <span className="text-[#e4e4e7] font-semibold">Accenture</span> &{" "}
                <span className="text-[#e4e4e7] font-semibold">TCS</span>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="mt-7 flex flex-wrap gap-3 justify-center lg:justify-start"
              >
                <a href="#projects" className="btn-primary">View Projects</a>
                <a href="#contact" className="btn-outline">Contact Me</a>
              </motion.div>

              {/* Stats with their own parallax */}
              <motion.div
                style={{ opacity: statsOpacity, y: statsY }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="flex gap-10 mt-10 justify-center lg:justify-start"
              >
                {[{ num: "7+", label: "Years" }, { num: "50+", label: "Projects" }, { num: "3", label: "Companies" }].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl sm:text-3xl font-black gradient-text">{s.num}</div>
                    <div className="text-[11px] text-[#71717a] mt-1 font-medium">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right - Developer Illustration with scroll-linked transforms */}
            <motion.div
              style={{ y: illustrationY, scale: illustrationScale, rotate: illustrationRotate }}
              className="relative flex-shrink-0"
            >
              <div className="relative">
                <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-[#a78bfa]/10 to-[#f0abfc]/8 blur-3xl" />
                <motion.svg
                  initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] lg:w-[360px] lg:h-[360px]" viewBox="0 0 400 400" fill="none"
                >
                  <rect x="60" y="280" width="280" height="12" rx="6" fill="#a78bfa" fillOpacity="0.15" />
                  <rect x="140" y="292" width="10" height="50" fill="#a78bfa" fillOpacity="0.1" />
                  <rect x="250" y="292" width="10" height="50" fill="#a78bfa" fillOpacity="0.1" />
                  <rect x="120" y="340" width="50" height="6" rx="3" fill="#a78bfa" fillOpacity="0.08" />
                  <rect x="230" y="340" width="50" height="6" rx="3" fill="#a78bfa" fillOpacity="0.08" />
                  <rect x="110" y="160" width="180" height="115" rx="10" stroke="#a78bfa" strokeWidth="2" fill="#a78bfa" fillOpacity="0.03" />
                  <rect x="110" y="160" width="180" height="22" rx="10" fill="#a78bfa" fillOpacity="0.06" />
                  <circle cx="130" cy="171" r="4" fill="#f0abfc" fillOpacity="0.4" />
                  <circle cx="142" cy="171" r="4" fill="#a78bfa" fillOpacity="0.4" />
                  <circle cx="154" cy="171" r="4" fill="#a78bfa" fillOpacity="0.2" />
                  <line x1="125" y1="196" x2="195" y2="196" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
                  <line x1="135" y1="209" x2="215" y2="209" stroke="#f0abfc" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
                  <line x1="135" y1="222" x2="180" y2="222" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
                  <line x1="145" y1="235" x2="230" y2="235" stroke="#f0abfc" strokeWidth="2" strokeLinecap="round" opacity="0.25" />
                  <line x1="135" y1="248" x2="200" y2="248" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" opacity="0.2" />
                  <line x1="125" y1="261" x2="170" y2="261" stroke="#f0abfc" strokeWidth="2" strokeLinecap="round" opacity="0.2" />
                  <rect x="190" y="275" width="20" height="8" fill="#a78bfa" fillOpacity="0.12" />
                  <rect x="175" y="280" width="50" height="4" rx="2" fill="#a78bfa" fillOpacity="0.1" />
                  <circle cx="200" cy="105" r="28" fill="#a78bfa" fillOpacity="0.12" stroke="#a78bfa" strokeWidth="1.5" opacity="0.5" />
                  <path d="M160 275C160 230 170 180 200 165C230 180 240 230 240 275" fill="#a78bfa" fillOpacity="0.08" stroke="#a78bfa" strokeWidth="1.5" opacity="0.4" />
                  <path d="M165 220C150 235 135 260 140 275" stroke="#a78bfa" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
                  <path d="M235 220C250 235 265 260 260 275" stroke="#a78bfa" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
                  <rect x="310" y="252" width="22" height="28" rx="4" stroke="#f0abfc" strokeWidth="1.5" opacity="0.35" />
                  <path d="M332 260C340 260 344 265 344 270C344 275 340 280 332 280" stroke="#f0abfc" strokeWidth="1" opacity="0.25" />
                  <motion.path d="M316 248C318 240 320 244 322 236" stroke="#f0abfc" strokeWidth="1" opacity="0.2" strokeLinecap="round" animate={{ opacity: [0.1, 0.3, 0.1], y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }} />
                  <rect x="68" y="255" width="16" height="25" rx="3" stroke="#a78bfa" strokeWidth="1" opacity="0.25" />
                  <path d="M76 255C76 245 70 240 66 235" stroke="#a78bfa" strokeWidth="1" opacity="0.2" strokeLinecap="round" />
                  <path d="M76 255C76 245 82 240 86 235" stroke="#a78bfa" strokeWidth="1" opacity="0.2" strokeLinecap="round" />
                  <path d="M76 250C76 242 76 238 76 232" stroke="#a78bfa" strokeWidth="1" opacity="0.2" strokeLinecap="round" />
                  <motion.text x="60" y="140" fill="#a78bfa" fontSize="16" fontFamily="monospace" opacity="0.2" animate={{ y: [0, -10, 0], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 4, repeat: Infinity }}>{"</>"}</motion.text>
                  <motion.text x="310" y="150" fill="#f0abfc" fontSize="14" fontFamily="monospace" opacity="0.2" animate={{ y: [0, -8, 0], opacity: [0.1, 0.25, 0.1] }} transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}>{"{ }"}</motion.text>
                  <motion.text x="330" y="200" fill="#a78bfa" fontSize="12" fontFamily="monospace" opacity="0.15" animate={{ y: [0, -6, 0], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}>{"( )"}</motion.text>
                </motion.svg>

                {/* Floating badge */}
                <motion.div
                  style={{ x: badgeX }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-16 -right-2 sm:bottom-20 sm:right-0 dark-card px-4 py-2 flex items-center gap-2"
                >
                  <span className="text-lg">💼</span>
                  <div>
                    <div className="text-[10px] text-[#71717a]">Currently at</div>
                    <div className="text-[13px] font-bold text-[#e4e4e7]">Walmart</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            style={{ opacity: heroOpacity }}
            className="flex justify-center mt-14"
          >
            <a href="#about" className="group flex flex-col items-center gap-2">
              <span className="text-[10px] text-[#71717a] group-hover:text-[#a78bfa] transition-colors tracking-widest uppercase">Scroll</span>
              <div className="w-[24px] h-[38px] rounded-full border border-white/10 group-hover:border-[#a78bfa]/30 flex justify-center pt-2 transition-colors">
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1 h-1 rounded-full bg-[#a78bfa]" />
              </div>
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;

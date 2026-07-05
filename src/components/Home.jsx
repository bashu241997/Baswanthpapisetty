import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const stats = [
    { num: "7+ Years", label: "Years Exp" },
    { num: "190ms", label: "P95 INP Optimized" },
    { num: "3", label: "Fortune 500s" }
  ];

  return (
    <section id="homer" className="min-h-screen flex items-center pt-32 pb-20 overflow-hidden relative">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Top Badge: Role & Passion */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4a729f]/5 border border-[#4a729f]/10 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] text-[#4a729f] font-bold uppercase tracking-wider">
            Senior Software Engineer @ Walmart
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-900 font-black text-[44px] sm:text-[60px] lg:text-[72px] leading-[1.1] tracking-tight mb-4"
        >
          Baswanth <span className="gradient-text">Papisetty</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[20px] sm:text-[28px] font-bold text-slate-700 tracking-tight mb-6"
        >
          Senior Software Engineer & SaaS Builder
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[16px] sm:text-[17px] text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Building robust enterprise systems by day and shipping modern web applications and SaaS products by night.
          Focused on micro-frontend architectures, developer tooling, and Core Web Vitals optimization.
          Proven delivery at <span className="text-slate-900 font-semibold">Walmart</span>,
          <span className="text-slate-900 font-semibold"> Accenture (AT&T)</span>, and
          <span className="text-slate-900 font-semibold"> TCS</span>.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center mb-16"
        >
          <a href="#projects" className="btn-primary">
            Explore Side Projects
          </a>
          <a href="#contact" className="btn-outline">
            Get In Touch
          </a>
        </motion.div>

        {/* Core Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex gap-12 sm:gap-16 justify-center border-t border-gray-200/60 pt-10 max-w-md mx-auto"
        >
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">{s.num}</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1.5">{s.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Home;

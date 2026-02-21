import React from "react";
import { motion } from "framer-motion";

export const ExperienceCard = ({ experience }) => (
  <motion.div whileHover={{ y: -3 }} className="dark-card p-6">
    <div className="flex items-start gap-3 mb-3">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden" style={{ background: experience.iconBg }}>
        {experience.icon ? <img src={experience.icon} alt={experience.company_name} className="w-6 h-6 object-contain" /> : <span className="text-[#a78bfa] font-black text-sm">{experience.company_name[0]}</span>}
      </div>
      <div>
        <h3 className="text-[#e4e4e7] text-[15px] font-bold leading-snug">{experience.title}</h3>
        <p className="text-[#a78bfa] font-semibold text-[13px] mt-0.5">{experience.company_name}</p>
      </div>
    </div>
    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] mb-3">
      <span className="text-[11px] text-[#71717a] font-medium">{experience.date}</span>
    </div>
    <ul className="space-y-1.5">
      {experience.points.map((point, i) => (
        <li key={i} className="flex items-start gap-2 text-[12px] text-[#71717a] leading-relaxed">
          <span className="w-1 h-1 rounded-full bg-[#a78bfa] flex-shrink-0 mt-1.5" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

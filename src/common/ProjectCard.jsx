import React from "react";
import { motion } from "framer-motion";
import { Git, Globedisplay } from "../assets/icons";

export const ProjectCard = ({ name, description, tags, source_code_link, domain }) => (
  <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className="dark-card overflow-hidden group h-full flex flex-col">
    <div className="h-[2px] w-full bg-gradient-to-r from-[#a78bfa] via-[#f0abfc] to-[#a78bfa] opacity-40" />
    <div className="p-5 flex flex-col flex-1">
      <div className="flex justify-between items-start mb-3">
        <div className="w-9 h-9 rounded-xl bg-[#a78bfa]/[0.08] flex items-center justify-center">
          <svg className="w-4 h-4 text-[#a78bfa]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" /></svg>
        </div>
        <div className="flex gap-1">
          <button onClick={() => window.open(domain, "_blank")} className="w-7 h-7 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#71717a] hover:text-[#a78bfa] transition-all"><Globedisplay /></button>
          <button onClick={() => window.open(source_code_link, "_blank")} className="w-7 h-7 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#71717a] hover:text-[#a78bfa] transition-all"><Git /></button>
        </div>
      </div>
      <h3 className="text-[14px] font-bold text-[#e4e4e7] mb-2 group-hover:text-[#a78bfa] transition-colors">{name}</h3>
      <p className="text-[12px] text-[#71717a] leading-relaxed flex-1 mb-3">{description}</p>
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {tags.map((t) => <span key={t.name} className={`text-[10px] px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.05] font-medium ${t.color}`}>{t.name}</span>)}
      </div>
    </div>
  </motion.div>
);

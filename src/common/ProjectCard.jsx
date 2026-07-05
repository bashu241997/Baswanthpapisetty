import React from "react";
import { motion } from "framer-motion";
import { Git, Globedisplay } from "../assets/icons";

export const ProjectCard = ({ name, description, tags, source_code_link, domain }) => (
  <motion.div 
    whileHover={{ y: -5 }} 
    transition={{ duration: 0.3, ease: "easeOut" }} 
    className="dark-card overflow-hidden group h-full flex flex-col w-full bg-white"
  >
    {/* Card Accent Top Line */}
    <div className="h-[2px] w-full bg-[#4a729f] opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
    
    <div className="p-6 flex flex-col flex-1">
      {/* Card Header Actions */}
      <div className="flex justify-between items-start mb-5">
        <div className="w-10 h-10 rounded-xl bg-[#4a729f]/5 border border-[#4a729f]/10 flex items-center justify-center">
          <svg className="w-5 h-5 text-[#4a729f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
          </svg>
        </div>
        <div className="flex gap-1.5">
          <button 
            onClick={() => window.open(domain, "_blank")} 
            className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-200/60 flex items-center justify-center text-gray-500 hover:text-slate-900 hover:border-[#4a729f]/30 hover:bg-[#4a729f]/5 transition-all duration-200 cursor-pointer"
            title="Live Demo"
          >
            <Globedisplay className="w-4 h-4" />
          </button>
          <button 
            onClick={() => window.open(source_code_link, "_blank")} 
            className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-200/60 flex items-center justify-center text-gray-500 hover:text-slate-900 hover:border-[#4a729f]/30 hover:bg-[#4a729f]/5 transition-all duration-200 cursor-pointer"
            title="View Code"
          >
            <Git className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Project Description */}
      <h3 className="text-[15px] font-bold text-slate-900 mb-2.5 group-hover:text-[#4a729f] transition-colors duration-300">
        {name}
      </h3>
      <p className="text-[13px] text-slate-600 leading-relaxed flex-1 mb-5">
        {description}
      </p>
      
      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100">
        {tags.map((t) => (
          <span 
            key={t.name} 
            className={`text-[10px] px-2.5 py-1 rounded-md bg-gray-50 border border-gray-200/60 font-semibold font-mono ${t.color}`}
          >
            {t.name}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);
export default ProjectCard;

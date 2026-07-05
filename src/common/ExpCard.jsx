import { motion } from "framer-motion";

export const ExperienceCard = ({ experience }) => (
  <motion.div 
    whileHover={{ y: -2 }} 
    transition={{ duration: 0.2 }}
    className="dark-card p-6 sm:p-8"
  >
    {/* Header Info */}
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-gray-100">
      <div className="flex items-center gap-3.5">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden" style={{ background: experience.iconBg }}>
          {experience.icon ? (
            <img src={experience.icon} alt={experience.company_name} className="w-7 h-7 object-contain" />
          ) : (
            <span className="text-[#3b82f6] font-black text-base">{experience.company_name[0]}</span>
          )}
        </div>
        <div>
          <h3 className="text-slate-900 text-[16px] font-bold leading-snug">{experience.title}</h3>
          <p className="text-blue-600 font-semibold text-[13px] mt-0.5">{experience.company_name}</p>
        </div>
      </div>
      
      {/* Date Badge */}
      <div className="inline-flex self-start sm:self-center items-center px-3 py-1 rounded-lg bg-gray-50 border border-gray-100">
        <span className="text-[11px] text-slate-500 font-mono font-medium">{experience.date}</span>
      </div>
    </div>

    {/* Points List */}
    <ul className="space-y-3">
      {experience.points.map((point, i) => (
        <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-600 leading-relaxed">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-1.5 shadow-sm shadow-blue-500/20" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);
export default ExperienceCard;

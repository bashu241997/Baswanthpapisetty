import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";

const Experiences = () => {
  const experiences = [
    {
      title: "Software Engineer III",
      company_name: "Walmart",
      date: "April 2023 – Present",
      points: [
        "Architected client-heavy React applications specializing in dynamic form generation and custom JSON schemas.",
        "Optimized services to deliver server response times under 150ms using GraphQL and Fastify.",
        "Reduced Interaction to Next Paint (INP) from 590ms to 190ms (P95) via client-side script optimization.",
        "Created custom Node.js CLI tools automating staging and deployment pipelines.",
        "Built a specialized UI builder that cut feature delivery cycle times by 4x."
      ],
    },
    {
      title: "Senior Software Engineer",
      company_name: "Accenture (Client: AT&T)",
      date: "August 2021 – March 2023",
      points: [
        "Architected end-to-end user flows for AT&T portal features, scaling to millions of users.",
        "Migrated customer-facing systems to a micro-frontend architecture using Bit.dev and NX monorepos.",
        "Reduced PDP Time-to-First-Byte (TTFB) using Next.js Server-Side Rendering (SSR).",
        "Integrated Headless CMS with Next.js for instant content deployment and landing page staging.",
        "Recipient of the 'Accenture Celebrates Excellence' award for technical leadership."
      ],
    },
    {
      title: "Systems Engineer",
      company_name: "Tata Consultancy Services",
      date: "November 2018 – July 2021",
      points: [
        "Developed cross-platform hybrid mobile applications for travel domains using React Native.",
        "Implemented secure biometric auth, offline caching, and async workflows using Redux Saga.",
        "Utilized RxJS and web sockets for real-time dashboard data tracking.",
        "Optimized Larger Contentful Paint (LCP) benchmarks in Angular enterprise systems."
      ],
    },
  ];

  return (
    <div id="experience" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section header */}
        <div className="text-center mb-20">
          <p className={`${styles.sectionSubText}`}>Work History</p>
          <h2 className={`${styles.sectionHeadText} mt-2`}>
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="h-[2px] w-12 bg-[#4a729f] rounded-full mt-4 mx-auto" />
        </div>

        {/* Minimalist 2-Column Experience List */}
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-4 md:gap-12 items-start"
            >
              {/* Left Column: Date Range */}
              <div className="w-full md:w-48 flex-shrink-0 pt-1">
                <span className="text-[12px] font-bold font-mono tracking-wider text-slate-500 uppercase">
                  {exp.date}
                </span>
              </div>

              {/* Right Column: Title, Company, & Achievements */}
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-[17px] font-extrabold text-slate-900 tracking-tight leading-snug">
                    {exp.title}
                  </h3>
                  <div className="text-[13px] font-bold text-[#4a729f] mt-0.5">
                    {exp.company_name}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-600 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4a729f]/45 flex-shrink-0 mt-2" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Experiences;
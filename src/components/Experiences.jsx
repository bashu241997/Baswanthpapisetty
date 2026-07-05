import React from "react";
import Acc from "../assets/acc.png";
import Wal from "../assets/wal.png";
import Tcs from "../assets/tcs.png";
import { ExperienceCard } from "../common/ExpCard";
import { styles } from "../styles";
import { motion } from "framer-motion";

const Experiences = () => {
  const experiences = [
    {
      title: "Software Engineer III",
      company_name: "Walmart",
      icon: Wal,
      iconBg: "rgba(79, 115, 236, 0.08)",
      date: "April 2023 – Present",
      points: [
        "Architected a complex, client-heavy React application specializing in dynamic form generation, WYSIWYG editors, and custom JSON schemas.",
        "Optimized enterprise services to deliver server response times under 150ms using GraphQL and Fastify.",
        "Reduced Interaction to Next Paint (INP) from 590ms to 190ms (P95) via client-side script optimization.",
        "Created a custom Node.js/TypeScript CLI tool that automated developer environment staging and build pipelines.",
        "Built a specialized UI builder that accelerated feature delivery from six sprints to 1.5 sprints."
      ],
    },
    {
      title: "Senior Software Engineer",
      company_name: "Accenture (Client: AT&T)",
      icon: Acc,
      iconBg: "rgba(79, 115, 236, 0.08)",
      date: "August 2021 – March 2023",
      points: [
        "Architected the full end-to-end flow of the AT&T 'Bring Your Own Device' (BYOD) feature on the web portal.",
        "Migrated legacy customer-facing platforms to a micro-frontend architecture using Bit.dev within an NX Monorepo.",
        "Reduced Time-to-First-Byte (TTFB) on high-traffic Product Detail Pages (PDP) using Next.js Server-Side Rendering (SSR).",
        "Integrated Sanity.io Headless CMS with Next.js SSR to enable instant updates on promotional landing pages.",
        "Awarded 'Accenture Celebrates its Excellence' award for outstanding contribution and innovation."
      ],
    },
    {
      title: "Systems Engineer",
      company_name: "Tata Consultancy Services",
      icon: Tcs,
      iconBg: "rgba(79, 115, 236, 0.05)",
      date: "November 2018 – July 2021",
      points: [
        "Developed cross-platform hybrid mobile applications for global travel domains using React Native.",
        "Implemented secure biometric authentication, offline state caching via Redux, and async workflows using Redux Saga.",
        "Leveraged RxJS and web sockets for real-time flight status tracking dashboards.",
        "Built shared Higher-Order Components (HOCs) to enable code sharing across micro-frontends.",
        "Improved LCP (Largest Contentful Paint) benchmarks in legacy Angular enterprise applications."
      ],
    },
  ];

  return (
    <div id="experience" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section header */}
        <div className="text-center mb-16">
          <p className={`${styles.sectionSubText}`}>Work History</p>
          <h2 className={`${styles.sectionHeadText} mt-2`}>
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="h-[2px] w-12 bg-[#4f73ec] rounded-full mt-4 mx-auto" />
        </div>

        {/* Timeline container */}
        <div className="relative pl-6 sm:pl-8 border-l border-gray-200/80 space-y-12">
          {experiences.map((exp, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="relative"
              >
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 z-20">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4f73ec] ring-4 ring-[#faf8f5] shadow-lg shadow-[#4f73ec]/25" />
                </div>
                
                {/* Experience Card */}
                <ExperienceCard experience={exp} />
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Experiences;
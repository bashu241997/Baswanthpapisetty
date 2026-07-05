import React from "react";
import { Globe, Linkedin, Git } from "../assets/icons";

const navLinks = [
  { name: "Home", href: "#homer" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="border-t border-gray-200/60 bg-[#faf8f5]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
        <div className="flex items-center gap-2">
          <div className="logo-mark text-[13px]">BP</div>
          <span className="font-bold text-[14px] text-slate-900">Baswanth<span className="text-[#4a729f]">.</span></span>
        </div>
        <nav className="flex flex-wrap justify-center gap-6">
          {navLinks.map((l) => (
            <a key={l.name} href={l.href} className="text-[12px] text-slate-600 hover:text-slate-900 transition-colors duration-200 font-medium">
              {l.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {[
            { href: "https://github.com/bashu241997", Icon: Git },
            { href: "https://www.linkedin.com/in/baswanth-p/", Icon: Linkedin },
            { href: "https://bashu-53054.web.app/", Icon: Globe }
          ].map(({ href, Icon }, i) => (
            <a key={i} href={href} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-[#4a729f]/20 transition-all duration-200">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="h-px bg-gray-200" />
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6">
        <p className="text-[11px] text-gray-500">© {new Date().getFullYear()} Baswanth Papisetty. All rights reserved.</p>
        <p className="text-[10px] text-gray-400">Built with React, Tailwind & Framer Motion</p>
      </div>
    </div>
  </footer>
);

export default Footer;

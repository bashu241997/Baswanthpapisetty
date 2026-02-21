import React from "react";
import { Globe, Linkedin, Insta, Git } from "../assets/icons";

const navLinks = [
  { name: "Home", href: "#homer" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="border-t border-white/[0.04] bg-[#0c0c14]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
        <div className="flex items-center gap-2">
          <div className="logo-mark text-[13px]">BP</div>
          <span className="font-bold text-[14px] text-[#e4e4e7]">Baswanth<span className="text-[#a78bfa]">.</span></span>
        </div>
        <nav className="flex flex-wrap justify-center gap-5">
          {navLinks.map((l) => <a key={l.name} href={l.href} className="text-[12px] text-[#71717a] hover:text-[#a78bfa] transition-colors font-medium">{l.name}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          {[{ href: "https://github.com/bashu241997", Icon: Git }, { href: "https://bashu-53054.web.app/", Icon: Globe }, { href: "https://www.instagram.com/baswanth_p/", Icon: Insta }, { href: "https://www.linkedin.com/in/baswanth-papisetty-91340b9a/", Icon: Linkedin }].map(({ href, Icon }, i) => (
            <a key={i} href={href} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg border border-white/[0.05] flex items-center justify-center text-[#71717a] hover:text-[#a78bfa] hover:border-[#a78bfa]/20 transition-all"><Icon /></a>
          ))}
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6">
        <p className="text-[11px] text-[#71717a]">© {new Date().getFullYear()} Baswanth Papisetty. All rights reserved.</p>
        <p className="text-[10px] text-[#3f3f46]">Built with React, Framer Motion & ❤️</p>
      </div>
    </div>
  </footer>
);

export default Footer;

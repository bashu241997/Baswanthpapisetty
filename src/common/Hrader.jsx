import React, { useState, useEffect } from "react";
import { Globe, Linkedin, Insta, Git } from "../assets/icons";

const navLinks = [
  { name: "Home", href: "#homer" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Hrader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#0c0c14]/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <a href="#homer" className="flex items-center gap-2.5 group">
            <div className="logo-mark group-hover:rotate-6 transition-transform duration-300">BP</div>
            <span className="font-bold text-[15px] text-[#e4e4e7] hidden sm:block">Baswanth<span className="text-[#a78bfa]">.</span></span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="animated-underline px-3 py-2 text-[13px] font-medium text-[#71717a] hover:text-[#e4e4e7] transition-colors">{link.name}</a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            {[
              { href: "https://github.com/bashu241997", Icon: Git },
              { href: "https://bashu-53054.web.app/", Icon: Globe },
              { href: "https://www.instagram.com/baswanth_p/", Icon: Insta },
              { href: "https://www.linkedin.com/in/baswanth-papisetty-91340b9a/", Icon: Linkedin },
            ].map(({ href, Icon }, i) => (
              <a key={i} href={href} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg border border-white/5 flex items-center justify-center text-[#71717a] hover:text-[#a78bfa] hover:border-[#a78bfa]/20 transition-all">
                <Icon />
              </a>
            ))}
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
            <span className={`w-5 h-[1.5px] bg-[#e4e4e7] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`w-5 h-[1.5px] bg-[#e4e4e7] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`w-5 h-[1.5px] bg-[#e4e4e7] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-500 overflow-hidden ${mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-[#0c0c14]/95 backdrop-blur-xl border-t border-white/5 px-4 py-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setMobileOpen(false)} className="px-4 py-3 text-[#71717a] hover:text-[#e4e4e7] hover:bg-white/[0.02] rounded-xl transition-all font-medium text-[14px]">{link.name}</a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Hrader;

import React, { useState, useEffect } from "react";
import { Globe, Linkedin, Git } from "../assets/icons";

const navLinks = [
  { name: "Home", href: "#homer" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#faf8f5]/85 backdrop-blur-md border-b border-gray-200/50 shadow-sm shadow-gray-200/10" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <a href="#homer" className="flex items-center gap-2.5 group">
            <div className="logo-mark">BP</div>
            <span className="font-bold text-[15px] text-slate-900 tracking-tight">
              Baswanth<span className="text-[#4a729f]">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[13px] font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links & Resume Button */}
          <div className="hidden md:flex items-center gap-3">
            {[
              { href: "https://github.com/bashu241997", Icon: Git },
              { href: "https://www.linkedin.com/in/baswanth-p/", Icon: Linkedin },
              { href: "https://bashu-53054.web.app/", Icon: Globe },
            ].map(({ href, Icon }, i) => (
              <a 
                key={i} 
                href={href} 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-[#4a729f]/30 hover:bg-[#4a729f]/5 transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
            <a 
              href="#contact" 
              className="ml-2 px-4 py-1.5 rounded-lg bg-white border border-gray-200 hover:border-[#4a729f]/30 hover:bg-[#4a729f]/5 text-[12px] font-medium text-slate-700 hover:text-slate-900 transition-all duration-200"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)} 
            className="md:hidden flex flex-col gap-1.5 p-2" 
            aria-label="Menu"
          >
            <span className={`w-5 h-[1.5px] bg-slate-900 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`w-5 h-[1.5px] bg-slate-900 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`w-5 h-[1.5px] bg-slate-900 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-[#faf8f5]/98 backdrop-blur-lg border-t border-gray-200/80 px-4 py-4 shadow-xl">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileOpen(false)} 
                className="px-4 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all font-medium text-[14px]"
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-4 px-4 pt-4 border-t border-gray-200/80 mt-2">
              {[
                { href: "https://github.com/bashu241997", Icon: Git },
                { href: "https://www.linkedin.com/in/baswanth-p/", Icon: Linkedin },
                { href: "https://bashu-53054.web.app/", Icon: Globe },
              ].map(({ href, Icon }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors duration-200">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

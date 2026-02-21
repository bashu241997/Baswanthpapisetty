import React, { useRef, useState } from "react";
import { styles } from "../styles";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const envelopeY = useTransform(smoothProgress, [0, 1], [80, -80]);
  const envelopeRotate = useTransform(smoothProgress, [0, 1], [-12, 12]);
  const formScale = useTransform(smoothProgress, [0.05, 0.3], [0.9, 1]);
  const formY = useTransform(smoothProgress, [0.05, 0.3], [40, 0]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setLoading(true); alert("Thank you! I will get back to you soon."); setLoading(false); setForm({ name: "", email: "", message: "" }); };

  return (
    <div ref={containerRef} id="contact" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Parallax envelope */}
      <motion.div style={{ y: envelopeY, rotate: envelopeRotate }} className="absolute right-6 sm:right-16 top-1/4 opacity-[0.05] pointer-events-none">
        <svg width="180" height="140" viewBox="0 0 180 140" fill="none">
          <rect x="10" y="20" width="160" height="100" rx="10" stroke="#a78bfa" strokeWidth="2" />
          <path d="M10 25L90 80L170 25" stroke="#f0abfc" strokeWidth="1.5" />
          <path d="M10 120L70 70" stroke="#a78bfa" strokeWidth="1" opacity="0.3" />
          <path d="M170 120L110 70" stroke="#a78bfa" strokeWidth="1" opacity="0.3" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <p className={styles.sectionSubText}>Get in touch</p>
          <h2 className={`${styles.sectionHeadText} mt-2`}><span className="gradient-text">Contact</span> Me</h2>
          <motion.div initial={{ width: 0 }} whileInView={{ width: 40 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] bg-gradient-to-r from-[#a78bfa] to-[#f0abfc] rounded-full mt-4 mx-auto" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div style={{ scale: formScale, y: formY }}
            initial={{ opacity: 0, filter: "blur(8px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <div className="dark-card p-6 sm:p-8">
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
                {[{ l: "Your Name", n: "name", t: "text", p: "What's your name?" }, { l: "Your Email", n: "email", t: "email", p: "Email address?" }, { l: "Message", n: "message", t: "textarea", p: "What would you like to say?" }].map((f) => (
                  <label key={f.n} className="flex flex-col gap-1.5">
                    <span className="text-[#e4e4e7] font-medium text-[12px]">{f.l}</span>
                    {f.t === "textarea" ? (
                      <textarea name={f.n} value={form[f.n]} onChange={handleChange} placeholder={f.p} rows={4}
                        className="w-full py-3 px-4 bg-white/[0.03] border border-white/[0.06] rounded-xl text-[#e4e4e7] placeholder:text-[#3f3f46] outline-none focus:border-[#a78bfa]/30 transition-all text-[13px] resize-none" />
                    ) : (
                      <input type={f.t} name={f.n} value={form[f.n]} onChange={handleChange} placeholder={f.p}
                        className="w-full py-3 px-4 bg-white/[0.03] border border-white/[0.06] rounded-xl text-[#e4e4e7] placeholder:text-[#3f3f46] outline-none focus:border-[#a78bfa]/30 transition-all text-[13px]" />
                    )}
                  </label>
                ))}
                <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-primary w-full sm:w-auto text-center mt-1">
                  {loading ? "Sending..." : "Send Message →"}
                </motion.button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex-1 flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: "📧", title: "Email", value: "p.baslass@gmail.com", href: "mailto:p.baslass@gmail.com" },
                { icon: "📍", title: "Location", value: "Chennai, India" },
                { icon: "💼", title: "LinkedIn", value: "Connect", href: "https://www.linkedin.com/in/baswanth-papisetty-91340b9a/" },
                { icon: "🐙", title: "GitHub", value: "Repos", href: "https://github.com/bashu241997" },
              ].map((item, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="dark-card p-4 cursor-pointer"
                  onClick={() => item.href && window.open(item.href, item.href?.startsWith("mailto") ? "_self" : "_blank")}
                >
                  <span className="text-lg">{item.icon}</span>
                  <h4 className="text-[10px] text-[#71717a] mt-1.5 font-medium">{item.title}</h4>
                  <p className="text-[#e4e4e7] font-semibold text-[12px] mt-0.5">{item.value}</p>
                </motion.div>
              ))}
            </div>
            <div className="dark-card overflow-hidden flex-1 min-h-[200px]">
              <iframe title="Map" className="w-full h-full min-h-[200px]" frameBorder="0" scrolling="no"
                src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Chennai,+India&t=&z=12&ie=UTF8&iwloc=B&output=embed"
                style={{ filter: "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(0.9)" }} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Contact;

import React, { useRef, useState } from "react";
import { styles } from "../styles";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    setLoading(true); 
    alert("Thank you! I will get back to you soon."); 
    setLoading(false); 
    setForm({ name: "", email: "", message: "" }); 
  };

  const fields = [
    { label: "Your Name", name: "name", type: "text", placeholder: "What is your name?" },
    { label: "Contact Email", name: "email", type: "email", placeholder: "email@address.com" },
    { label: "Message", name: "message", type: "textarea", placeholder: "What would you like to say?" }
  ];

  const contactInfo = [
    { icon: "🌍", title: "Timezones", value: "GMT / BST / CET Compatible" },
    { icon: "📍", title: "Location", value: "Chennai, India (Remote Available)" },
    { icon: "💼", title: "LinkedIn", value: "Connect on LinkedIn", href: "https://www.linkedin.com/in/baswanth-papisetty-91340b9a/" },
    { icon: "📧", title: "Email", value: "p.baslass@gmail.com", href: "mailto:p.baslass@gmail.com" },
  ];

  return (
    <div id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div className="text-center mb-16">
          <p className={styles.sectionSubText}>Get in touch</p>
          <h2 className={`${styles.sectionHeadText} mt-2`}>
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="h-[2px] w-12 bg-[#4a729f] rounded-full mt-4 mx-auto" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Contact Form */}
          <div className="flex-1">
            <div className="dark-card p-6 sm:p-8 h-full bg-white">
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                {fields.map((f) => (
                  <label key={f.name} className="flex flex-col gap-1.5">
                    <span className="text-slate-700 font-semibold text-[12px] uppercase tracking-wider">{f.label}</span>
                    {f.type === "textarea" ? (
                      <textarea 
                        name={f.name} 
                        value={form[f.name]} 
                        onChange={handleChange} 
                        placeholder={f.placeholder} 
                        rows={5}
                        required
                        className="w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-xl text-slate-900 placeholder:text-gray-400 outline-none focus:border-[#4a729f]/40 focus:bg-white transition-all duration-300 text-[13px] resize-none" 
                      />
                    ) : (
                      <input 
                        type={f.type} 
                        name={f.name} 
                        value={form[f.name]} 
                        onChange={handleChange} 
                        placeholder={f.placeholder}
                        required
                        className="w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-xl text-slate-900 placeholder:text-gray-400 outline-none focus:border-[#4a729f]/40 focus:bg-white transition-all duration-300 text-[13px]" 
                      />
                    )}
                  </label>
                ))}
                
                <button 
                  type="submit" 
                  className="btn-primary w-full sm:w-auto text-center mt-2"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
                
                {/* GDPR and professional note */}
                <p className="text-[10px] text-gray-500 leading-relaxed mt-2">
                  * Secure, GDPR-compliant communication. Your details are processed solely to respond to this inquiry.
                </p>
              </form>
            </div>
          </div>

          {/* Quick Info & Interactive Map */}
          <div className="flex-1 flex flex-col gap-6">
            
            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item, i) => (
                <div 
                  key={i}
                  onClick={() => item.href && window.open(item.href, item.href.startsWith("mailto") ? "_self" : "_blank")}
                  className={`dark-card p-5 flex flex-col justify-between min-h-[110px] bg-white ${item.href ? "cursor-pointer hover:border-[#4a729f]/20" : "cursor-default"}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{item.title}</span>
                  </div>
                  <div className="mt-4">
                    <p className="text-slate-900 font-bold text-[14px]">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Embedded Map */}
            <div className="dark-card overflow-hidden flex-1 min-h-[220px] relative bg-white">
              <iframe 
                title="Map" 
                className="w-full h-full min-h-[220px] border-0" 
                frameBorder="0" 
                scrolling="no"
                src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Chennai,+India&t=&z=12&ie=UTF8&iwloc=B&output=embed"
                style={{ filter: "grayscale(0.3) contrast(1.1) brightness(0.98)" }} 
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;

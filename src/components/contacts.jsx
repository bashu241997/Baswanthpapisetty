import React, { useRef, useState } from "react";
import { styles, slideIn } from "../styles";

import { FadeInWhenVisible } from "../common/fadein";
import { SlideInWhenVisible } from "../common/slidein";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    alert("Thank you. I will get back to you as soon as possible.");

    setLoading(false);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div id="contact" className="py-4">
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <div className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <FadeInWhenVisible timing={2} > <p className={styles.sectionSubText}>Get in touch</p></FadeInWhenVisible>
          <FadeInWhenVisible timing={2} >  <h3 className={styles.sectionHeadText}>Contact.</h3></FadeInWhenVisible>

          <SlideInWhenVisible timing={2} side="l">
            {" "}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col gap-8"
            >
              <label className="flex flex-col">
                <span className="text-[#fff] font-medium mb-4">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  className="bg-tertiary py-4 px-6 placeholder:text-[#333] text-[#333] rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-[#fff] font-medium mb-4">Your email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your web address?"
                  className="bg-tertiary py-4 px-6 placeholder:text-[#333] text-[#333] rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-[#fff] font-medium mb-4">
                  Your Message
                </span>
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What you want to say?"
                  className="bg-tertiary py-4 px-6 placeholder:text-[#333] text-[#333] rounded-lg outline-none border-none font-medium"
                />
              </label>

              <button
                type="submit"
                className="bg-primary py-3 px-8 rounded-xl outline-none w-fit text-[#333] font-bold shadow-md shadow-primary"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </SlideInWhenVisible>
        </div>

        <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
          <div class="gmap_canvas">
            <iframe
              title="gmaps"
              className="gmap_iframe"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Putta estate, MS Nagar, Parameshwari Nagar, Nellore&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

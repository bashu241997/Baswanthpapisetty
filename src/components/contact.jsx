import React from "react";

const Contact = () => {
  const title = `contact`;
  return (
    <div className="px-4  flex w-full flex-col uppercase h-full">
      <h2 className="text-2xl font-bold py-4">{title}</h2>
      <div className="flex flex-col md:flex-row pt-4 justify-around">
        <div className="p-6 w-full">
          <form className="uppercase">
            <div className="py-2 ">
              <label className="block">full name</label>
              <input
                type="text"
                className="bg-transparent w-full border-b-2 px-4 py-3 border-[#94a3b8] outline-none"
              />
            </div>
            <div className="py-2">
              <label className="block">Email</label>
              <input
                type="text"
                className="bg-transparent w-full border-b-2 px-4 py-3 border-[#94a3b8] outline-none"
              />
            </div>
            <div className="py-2">
              <label className="block">Message</label>
              <textarea 
                type="text"
                className="bg-transparent w-full border-b-2 px-4 py-3 border-[#94a3b8] outline-none"
              />
            </div>
            <button className="uppercase py-1 mt-4 px-6 text-[#94a3b8] font-bold rounded-[30px] border-4 border-[#94a3b8]">
              send
            </button>
          </form>
        </div>
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
  );
};

export default Contact;

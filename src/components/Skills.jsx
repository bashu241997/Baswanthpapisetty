import React from "react";
import { styles, fadeIn, slideIn } from "../styles";

const ServiceCard = ({ index, title,Icon, classgiven,sub }) => (
  <div timing={index + 1}>
    <div className={`border-[4px] border-dotted border-color-[#364056] my-4 sm:mx-4 w-[300px] h-[150px] overflow-hidden cursor-pointer rounded-[20px] scale-100 duration-300 hover:scale-110 shadow-sm `}>
        <div
          className="group bg-tertiary rounded-[20px] py-5 px-12 min-h-[150px] flex justify-evenly items-center flex-col"
        >
          <div className="translate-y-[10px] group-hover:translate-y-0 duration-300  ">{Icon()}</div>
          <div className="translate-y-[15px] group-hover:translate-y-0 duration-300  ">{sub}</div>
          <h3 className="translate-y-[200px] group-hover:translate-y-0 duration-300 text-black text-[14px] text-center">
            {title}
          </h3>
        </div>
    </div>
  </div>
);
export const Skills = () => {
  const services = [
    {
      Icon:()=>(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>    
    ),
    sub:"web",
      title: "Web App Development using React, Next, Angular and NodeJs",
    },
    {
      Icon:()=>(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>),
    sub:"Mobile",
      title: "Mobile App development Using ReactNative and Flutter",
    },
    {
      Icon:()=> (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
    </svg>),
    
    sub:"UI/UX",
      title: "UI/Ux design using lates tools Figma and AEM",
    },
  ];
  const one = `bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600`;
  const two = `bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500`;
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-4">
      <div variants={slideIn()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Technical strengths & my
        </p>
        <div timing={1}>
          <h2 className={`${styles.sectionHeadText} text-center`}>🧑‍💻 Services.</h2>
        </div>
      </div>

      <div className="sm:px-4 flex flex-col sm:flex-row justify-between ">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </div>
  );
};

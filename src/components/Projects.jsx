import React from "react";
import { styles, fadeIn, textVariant } from "../styles";
import { ProjectCard } from "../common/ProjectCard";

const projects = () => {



    const projects = [
      {
        name: 'Hospital management App',
        color:`bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500 bg-clip-text`,
        description:"A patient and doctor management system is a project focused on developing software to efficiently manage appointments, medical records, and communication between patients and healthcare providers.",
         tags: [
          {
            name: "react typescript",
            color: "text-blue-600",
          },
          {
            name: "Next JS",
            color: "text-green-600",
          },
          {
            name: "tailwind",
            color: "text-red-600",
          }, {
            name: "redux",
            color: "text-green-600",
          },
        ],
        source_code_link: "https://github.com/bashu241997/HMS",
        domain:"https://hospitalmanagementsystemsproject.vercel.app/overview"
      },
        {
          name: 'WEATHER APP',
          color:`bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500 bg-clip-text`,
          description:
          "Get Up-To-Date Weather Information With Our User-Friendly Weather App. Check Current Conditions, Hourly And Daily Forecasts, And Receive Severe Weather Alerts For Your Location. Stay Prepared With Our App",
          tags: [
            {
              name: "react typescript",
              color: "text-blue-600",
            },
            {
              name: "Open WeatherAPi",
              color: "text-green-600",
            },
            {
              name: "tailwind",
              color: "text-red-600",
            },
          ],
          source_code_link: "https://github.com/bashu241997/improved-weather",
          domain:"https://improved-weather.vercel.app/"
        },
        {
          name: "Whisper hub",
          color:`bg-gradient-to-l from-red-200 to-red-600  bg-clip-text`,
          description:
          "Chat Application Is A Software Program That Enables Users To Communicate In Real-Time Via Text, Audio, Or Video Messages. It Allows Individuals Or Groups To Connect And Exchange Information, Files, And Media",
          tags: [
            {
              name: "react",
              color: "text-blue-600",
            },
            {
              name: "Sockets",
              color: "text-green-600",
            }, {
                name: "Node",
                color: "text-red-600",
              },
            {
              name: "scss",
              color: "text-blue-600",
            },  {
                name: "javascript",
                color: "text-green-600",
              },
          ],
          source_code_link: "https://github.com/bashu241997/private-cht",
          domain:"https://clonedwebsites.web.app/login"
        },
        {
          name: 'MAGIC KINGDOM',
          color:"bg-gradient-to-r from-red-500 to-green-500 bg-clip-text",
          description:
          "The Magic Kingdom Is Clone Application Is A Platform That Imitates The Features And Functions Of The Disney Brand, Allowing Users To Access Similar Content, Characters, And Experiences, While Potentially Offering Its Own Unique Offerings.",
          tags: [
            {
              name: "nextjs",
              color: "text-blue-600",
            },
            {
              name: "React",
              color: "text-green-600",
            },
            {
              name: "Tailwind",
              color: "text-red-600",
            },{
                name: "typeScript",
                color: "text-red-600",
              }
          ],
          source_code_link: "https://github.com/bashu241997/Disney-clone",
          domain:"https://clonedwebsites.web.app/login"
        },
        {
          name: 'Java Script Projects',
          color:"bg-gradient-to-r from-red-500 to-green-500 bg-clip-text",
          description:"Basic JavaScript projects involve creating simple web applications or interactive elements using JavaScript. These projects serve as foundational exercises to understand JavaScript's core concepts and build essential coding skills.",
          tags: [
            {
              name: "Java Script",
              color: "text-blue-600",
            },
            {
              name: "Html",
              color: "text-green-600",
            },
            {
              name: "Css",
              color: "text-red-600",
            }
          ],
          source_code_link: "https://github.com/bashu241997/javascriptprojects",
          domain:"https://samplejavascriptexampleapps.web.app/"
        },
      ];

  return (
    <div id="projects" className="py-[30px]" >
      <div variants={textVariant()}>
      <div timing={1}>  <p className={`${styles.sectionSubText} `}>My work</p></div>
      <div timing={1.5}><h2 className={`${styles.sectionHeadText}`}>🏆 Projects.</h2></div> 
      </div>
      <div timing={1}> <div className="w-full flex">
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-[#364056] text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it.
        </p>
      </div></div>

      <div className='mt-20 p-4 flex gap-6 overflow-x-scroll flex-col sm:flex-row'>
        {projects.map((project, index) => (
         <div timing={1}> <ProjectCard key={`project-${index}`} index={index} {...project} /></div>
        ))}
      </div>
    </div>
  );
};

export default projects;

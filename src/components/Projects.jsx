import React from "react";
import { styles, fadeIn, textVariant } from "../styles";
import Disney from "../assets/disney_clone.png"
import Weather from "../assets/Next.png"
import chat from "../assets/chat_app.png"
import { ProjectCard } from "../common/ProjectCard";


const projects = () => {



    const projects = [
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
          image: Weather,
          source_code_link: "https://github.com/bashu241997/improved-weather",
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
          image: chat,
          source_code_link: "https://github.com/bashu241997/private-cht",
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
          image: Disney,
          source_code_link: "https://github.com/bashu241997/Disney-clone",
        },
      ];

  return (
    <div className="min-h-[70vh] pb-[40px]" >
      <div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>
      <div className="w-full flex">
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it.
        </p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default projects;

import React from 'react'
import {
  VerticalTimeline,
} from "react-vertical-timeline-component";
import Acc from "../assets/acc.png";
import Wal from "../assets/wal.png";
import Tcs from "../assets/tcs.png";
import "react-vertical-timeline-component/style.min.css";
import { ExperienceCard } from '../common/ExpCard';
import { styles,textVariant } from '../styles';

import { FadeInWhenVisible } from "../common/fadein";
const Experiences = () => {
    const experiences = [
        {
          title: "SoftWare Engineer III",
          company_name: "Walmart Labs",
          icon: Wal,
          iconBg: "#383E56",
          date: "Apr 2023 - Present",
          points: [
            "Developing and maintaining web applications using cutting edge technologies.",
            "Collaborating with product managers, and other developers to create and improve the products.",
            "Implementing responsive design and Trending Tech functionalities adn improving the web application performance .",
            "Participating in code reviews and providing feedback to PR.",
            "Following agile methodologies to deliver the newly implemented features",
          ],
        },
        {
          title: "Custom Software engineering senior analyst",
          company_name: "Accenture",
          icon: Acc,
          iconBg: "#E6DEDD",
          date: "Aug 2021 - Mar 2023",
          points: [
            "Developing and maintaining web applications using React.js, Next Js and Angular 6 related technologies.",
            "Implementing cutting edge functionalities in the applications and responsible for optimizing th e app performances ",
            "Implementing responsive design and ensuring cross-browser and cross device functionality.",
            "Participating in code reviews and providing constructive feedback to other developers.",
          ],
        },
        {
          title: "Systems Engineer",
          company_name: "Tata Consultancy Services",
          icon: Tcs,
          iconBg: "#383E56",
          date: "Nov 2018 - Jul 2021",
          points: [
            "Developing and maintaining web and mobile applications using React.js and React Native technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
           ],
        },
      ];
      
  return (
    <div className='min-h-[100vh] pb-[30px]'>
          <div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far & My
        </p>
      <FadeInWhenVisible timing={2}>  <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2></FadeInWhenVisible>
      </div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Experiences

import {
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
export const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        color: "#fff",
      }}
      className="p-0"
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
   <div className="bg-[#fff]">
   <div>
        <h3 className='text-[24px] font-bold bg-gradient-to-r from-pink-600 via-red-500 to-yellow-400 inline-block text-transparent bg-clip-text'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-[#333] text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
   </div>
    </VerticalTimelineElement>
  );
};
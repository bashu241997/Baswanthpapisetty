import { FadeInWhenVisible } from "./fadein";
export const ExperienceCard = ({ experience,time }) => {
  return (
    <FadeInWhenVisible timing={time}>
    <div className="bg-exp-pattern border border-[#307ae1] p-4 text-[#dcdcdc] rounded-[5px] p-[30px]">
      <div>
        <h3 className="text-[20px]  mb-3 font-bold">
          {experience.title} 
        </h3>
        <p
          className="flex items-center text-[18px] text-[#dcdcdc] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name} {` - ${experience.date}`}
        </p>
      </div>

      <ul className="mt-5 p-[20px] list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-[#dcdcdc] text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </div></FadeInWhenVisible>
  );
};

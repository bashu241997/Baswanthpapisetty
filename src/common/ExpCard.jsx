
export const ExperienceCard = ({ experience,time }) => {
  return (
    <div timing={time}>
    <div className="bg-exp-pattern p-4 text-[#333333] rounded-[5px] p-[30px]">
      <div>
        <h3 className="text-[20px]  mb-3 font-bold">
          {experience.title} 
        </h3>
        <p
          className="flex items-center text-[18px] text-[#333333] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name} {` - ${experience.date}`}
        </p>
      </div>

      <ul className="mt-5 p-[20px] list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-[#333333] text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </div></div>
  );
};

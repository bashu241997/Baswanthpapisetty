export const ExperienceCard = ({ icon, experience, time }) => {
  return (
      <div className="bg-exp-pattern border dotted border-[#cccccc] shadow-lg p-4 text-[#333333] rounded-[10px] p-[30px]">
        <div>
          <h3 className="text-[20px]  mb-3 font-bold">{experience.title}</h3>

          <div className="flex pt-3 pl-[30px]">
            <img src={experience.icon} className="rounded-full w-[30px]" />{" "}
            <p
              className="flex items-center text-[18px] text-[#333333] "
              style={{ margin: 0 }}
            >
              {experience.company_name}
            </p>
          </div>
          <p
            className="pl-[30px] py-3 flex items-center text-[18px] text-[#333333]"
            style={{ margin: 0 }}
          >
            {`${experience.date}`}
          </p>
        </div>
      </div>
  );
};


import { fadeIn } from "../styles";
import { Git } from "../assets/icons";

export const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <div variants={fadeIn("up", "spring", index , 0.75)}>
      <div
        className="bg-transparent cursor-pointer border-2 border-[#fff] shadow-ld rounded-[20px] overflow-hidden sm:w-[350px] sm:h-[500px] scale-90 duration-300 hover:scale-100 w-full"
      >
        <div className="relative w-full h-[150px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-[150px] object-cover"
          />
        </div>

        <div className="p-4 mt-5 min-h-[150px]">
          <h3 className={`text-[24px] font-bold bg-gradient-to-r from-pink-600 via-red-500 to-yellow-400 inline-block text-transparent bg-clip-text`}>{name}</h3>
          <p className="mt-2 text-[#fff] font-semibold text-[14px]">
            {description}
          </p>
        </div>
        <div
          onClick={() => window.open(source_code_link, "_blank")}
          className="p-4 w-full h-10 rounded-full flex justify-end items-center cursor-pointer"
        >
          <Git />{" "}
          <span className="px-2 text-[#fff] font-semibold text-[14px]">
            Code
          </span>
        </div>
        <div className="p-4 mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] px-2 font-bold ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

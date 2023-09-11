
import { fadeIn } from "../styles";
import { Git,Globedisplay } from "../assets/icons";

export const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  domain,
}) => {
  return (
    <div variants={fadeIn("up", "spring", index , 0.75)}>
      <div
        className="-pointer bg-[#fff] shadow-lg rounded-[20px] overflow-hidden sm:w-[350px] sm:h-[500px] scale-90 duration-300 hover:scale-100 w-full"
      >
        <div className="relative w-full h-[150px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-[150px] object-cover"
          />
        </div>

        <div className="p-4 mt-2 min-h-[150px]">
          <h3 className={`text-[24px] font-bold bg-gradient-to-r from-pink-600 via-red-500 to-yellow-400 inline-block text-transparent bg-clip-text`}>{name}</h3>
          <p className="mt-2 text-[#333] font-semibold text-[14px]">
            {description}
          </p>
        </div>
        <div
          className="px-4 py-5 w-full h-10 rounded-full flex justify-between items-center cursor-pointer"
        >
          <div className="flex justify-start items-center" onClick={() => window.open(domain, "_blank")}
          >
          <Globedisplay />
          <span className="px-2 text-[#333] font-semibold text-[14px]">
            Visit Site
          </span>
          </div>
         <div className="flex justify-start items-center" onClick={() => window.open(source_code_link, "_blank")}
          >
         <Git />
          <span className="px-2 text-[#333] font-semibold text-[14px]">
            Code
          </span>
         </div>
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

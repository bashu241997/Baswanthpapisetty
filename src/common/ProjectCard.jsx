import  Tilt  from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../styles";
import { Git } from "../assets/icons";

export const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  color,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        reset={false}
        className="bg-[#fff] p-4 shadow-ld rounded-2xl sm:w-[350px] w-full"
      >
        <div className="relative w-full h-[150px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5 min-h-[150px]">
          <h3 className={`text-[24px] font-bold ${color}`}>{name}</h3>
          <p className="mt-2 text-[#333] font-semibold text-[14px]">
            {description}
          </p>
        </div>
        <div
          onClick={() => window.open(source_code_link, "_blank")}
          className="py-4 w-full h-10 rounded-full flex justify-end items-center cursor-pointer"
        >
          <Git />{" "}
          <span className="px-2 text-[#333] font-semibold text-[14px]">
            Code
          </span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] px-2 font-bold ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

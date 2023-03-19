import React from "react"
import globe from '../assets/globe.svg'

const ProjectCard = ({ data }) => {
  return (
    <div
      key={data.time}
      className="my-[30px] sm:m-0 cursor-pointer flex scale-100 hover:scale-110 duration-300 text-primary flex-col w-[300px] sm:w-[350px] shadow-2xl rounded overflow-hidden "
    >
      <div className="">
        <img
          src={data.img}
          className="w-[300px] sm:w-[350px] overflow-hidden"
        />
      </div>
      <div className="px-[25px] h-[350px] flex flex-col justify-between items-center">
       <div> <div className="text-right capitalize font-semibold py-[10px] text-[14px]">
          {data.time}
        </div>

        <div className="text-left ubuntum uppercase font-bold pb-[15px] text-[24px]">
          {data.heading}
        </div>

        <div className="pl-[20px] robotoc capitalize font-bold pb-[10px] text-[16px] text-justify">
          {data.description}
        </div></div>
        <div className="p-[25px] font-bold flex items-center justify-between w-full">
            <div className="flex items-center"><img src={globe} className="w-[30px] h-[30px]" alt="icon" /><a href={data.demo} className="pl-4">Demo</a></div>
            <a href={data.code} >Source code</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

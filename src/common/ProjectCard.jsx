import React from "react"
import globe from '../assets/globe.svg'

const ProjectCard = ({ data }) => {
  return (
    <div
      className="my-[30px] sm:m-0  flex scale-100 hover:scale-110 duration-300 text-primary flex-col w-[300px] sm:w-[350px] shadow-2xl rounded overflow-hidden "
    >
      <div className="">
        <img
          src={data.img}
          alt="proj img"
          className="w-[300px] sm:w-[350px] h-[150px] sm:h-[200px]  overflow-hidden"
        />
      </div>
      <div className="px-[25px] h-[350px] flex flex-col justify-between items-center">
       <div> <div className="text-right capitalize font-semibold py-[10px] text-[11px] sm:text-[14px]">
          {data.time}
        </div>

        <div className="text-left ubuntum uppercase font-bold pb-[15px] text-[20px] sm:text-[24px]">
          {data.heading}
        </div>

        <div className="pl-[20px] robotoc capitalize font-bold pb-[10px] text-[14px] sm:text-[16px] text-justify">
          {data.description}
        </div></div>
        <div className="p-[25px] font-bold flex items-center justify-between w-full">
            <div className="cursor-pointer flex items-center"><img src={globe} className="w-[30px] h-[30px]" alt="icon" /><a href={data.demo} className="pl-4">Demo</a></div>
            <a className="cursor-pointer" href={data.code} >Source code</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

import React from "react";
import { ShowMore } from "../assets/icons";

const ExpCard = ({key,title,subtitle,duration, right = false }) => {
  return (
    <div key={key} className="w-full py-[40px] flex justify-center items-center">
     
      <div className="w-[350px] md:w-[500px] flex border-2 border-[#d9ddf6] rounded-[20px] overflow-hidden md:mx-[15px]">
        {!right && (
          <div className="bg-[#d9ddf6] p-[30px] flex justify-center items-center">
            <img
              alt="icon"
              src={require("../assets/Group.png")}
              className="w-[50px]"
            />
          </div>
        )}
        <div className="uppercase px-[15px]">
          <h4 className="font-bold text-[20px] pt-[15px]">{title}</h4>
          <h5 className="font-bold text-[16px] pt-[10px]">{subtitle}</h5>
          <h6 className="font-bold text-[14px] py-[20px]">{duration}</h6>
        </div>
        {right && (
          <div className="bg-[#d9ddf6] p-[30px] flex justify-center items-center">
            <img
              alt="icon"
              src={require("../assets/Group.png")}
              className="w-[50px]"
            />
          </div>
        )}
      </div>
  
    </div>
  );
};

export default ExpCard;

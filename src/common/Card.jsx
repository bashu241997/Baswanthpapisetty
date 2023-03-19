import React from "react";
import Icon from "../assets/Group.svg";

const Card = ({ head, subhead, time,univ, right = false }) => {
  return (
    <div className=" scale-100 hover:scale-110 duration-300 flex w-[300px] sm:min-w-[600px] justify-between rounded-lg overflow-hidden shadow-2xl my-5">
      {!right && (
        <div className="flex items-center justify-center p-[15px] sm:p-[30px] mr-[10px] gradienticon">
          <img src={Icon} alt="icon" />
        </div>
      )}
      <div className="p-[15px] sm:p-[30px]">
        <div className="pl-[10px] sm:pl-[15px] pl-[10px] sm:pr-[20px] uppercase Staatliches text-[20px] sm:text-4xl font-bold">{head}</div>
        <div  className="pl-[10px] sm:px-[20px] capitalize ubuntum pt-[10px] text-[16px] sm:text-2xl font-bold">{subhead}</div>
        {univ?.length>0 && 
        <div  className="pl-[10px] sm:px-[20px] capitalize ubuntum pt-[10px] text-[14px] sm:text-xl font-bold">{univ}</div> }
        <div className="pl-[10px] sm:px-[15px] text-[14px] capitalize text-right pt-4 pl-[10px] sm:pr-4">{time}</div>
      </div>
      {right && (
        <div className="flex items-center justify-center p-[15px] sm:p-[30px] ml-[10px] gradienticon">
          <img src={Icon} alt="icon" />
        </div>
      )}
    </div>
  );
};

export default Card;

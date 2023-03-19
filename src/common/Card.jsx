import React from "react";
import Icon from "../assets/Group.svg";

const Card = ({ head, subhead, time,univ, right = false }) => {
  return (
    <div className="flex min-w-[500px] justify-between rounded-lg overflow-hidden shadow-2xl my-5">
      {!right && (
        <div className="p-[30px] mr-[10px] gradienticon">
          <img src={Icon} alt="icon" />
        </div>
      )}
      <div className="p-[30px]">
        <div className="pl-[15px] pr-[20px] uppercase Staatliches text-4xl font-bold">{head}</div>
        <div  className="px-[20px] capitalize ubuntum pt-[10px] text-2xl font-bold">{subhead}</div>
        {univ?.length>0 && 
        <div  className="px-[20px] capitalize ubuntum pt-[10px] text-xl font-bold">{univ}</div> }
        <div className="px-[15px] text-right pt-4 pr-4">{time}</div>
      </div>
      {right && (
        <div className="p-[30px] ml-[10px] gradienticon">
          <img src={Icon} alt="icon" />
        </div>
      )}
    </div>
  );
};

export default Card;

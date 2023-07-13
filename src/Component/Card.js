import React from "react";
import group14Image from "../Assets/Group 14.png";
import group15Image from "../Assets/Group 15.png";
import group16Image from "../Assets/Group 16.png";

const Card = ({ imageSrc, name, description, quote }) => {
  return (
    <div className=" flex md:flex-col border max-w-sm rounded overflow-hidden shadow-lg drop-shadow-lg bg-white">
      <div className="bg-white p-8 rounded flex flex-col justify-between">
        <p className="break-normal text-[#455880]  my-3 ">{description}</p>
        <div className="flex flex-col justify-center items-center py-3 ">
          <img src={imageSrc} className="w-[54px] h-[54px]" alt="" />
          <h4 className="text-[#1E266D] md:text-2xl text-sm ">{name}</h4>
          <p className="text-[#455880] md:text-lg text-xs	">{quote}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import collectionImage from "../Assets/Graphic (1).png";

const Design = () => {
  return (
    <div className="bg-[#FFF9EA]  w-full mt-3 pt-8 md:pt-4">
      <div className="mb-5 flex flex-col items-center gap-y-4 justify-center">
        <h1 className="text-[#1E266D] font-medium  text-center text-3xl md:text-5xl py-4">
          Simplicity meets innovative design
        </h1>
        <p className="font-normal text-[#45588080] text-center text-base">
          It's really easy to start using Digits. <br />
          Install the theme, choose a demo and <br />
          start designing the future of your business!
        </p>

        <button className="shadow duration-500 flex text-[#ffffff]  rounded-full  bg-[#3751FF] px-6 py-3  hover:bg-[#3752ffbd] hover:outline-slate-400">
          Buy Digits
        </button>
       
      </div>
      <div className=" mt-10 pt-8">
          <img src={collectionImage} alt="" />
        </div>
    </div>
  );
};

export default Design;

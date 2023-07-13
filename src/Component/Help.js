import React from "react";
import HelpCustom from "../Component/HelpCustom.js";
// import graphicImage from "../Assets/Graphic.png";
import group11Image from "../Assets/Group 11.png";
import group12Image from "../Assets/Group 12.png";
import group13Image from "../Assets/Group 13.png";
import groupHuman  from "../Assets/group_human.png"
const Help = () => {
  return (
    <div className=" bg-[#fff] flex flex-col justify-center items-center">
      <div className="md:px-5 md:py-8 px-2 py-4">
        <div className="mb-5">
          <h1 className="text-[#1E266D] font-medium  text-center text-3xl md:text-5xl">
            Whatever work you do,
          </h1>
          <h1 className="text-[#1E266D] font-medium text-3xl md:text-5xl text-center">
            we're able to help
          </h1>
        </div>

        <div className="flex flex-col  md:flex-row ">
          <img
            className=" md:w-[500px] md:h-[500px] object-contain bg-cover bg-center"
            src={groupHuman}
            alt=""
          />
          <div className=" flex flex-col ">
            <div className=" md:px-5 md:py-20 ">
              <HelpCustom
                imageSrc={group11Image}
                title="Design and Assets"
                description="Make your brand stand out with pixel-perfect design crafted to perfection."
              />

              <HelpCustom
                imageSrc={group12Image}
                title="Easy Content"
                description="Import your demos or build pages visually. Bonus: All images and illustrations included!"
              />

              <HelpCustom
                imageSrc={group13Image}
                title="Fast and Reliable"
                description="No heavy-weight plugins. No builders. No unneccesary file loading. Pure WordPress."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;

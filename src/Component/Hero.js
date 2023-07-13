import React from "react";
import Button from "./Button";
import heroImg from "../Assets/Group 8.png";
const Hero = () => {
  return (
    <div className="w-full bg-[#F2F9FF] relative">
      <div className=" text-center py-2 pt-[80px] md:pt-[110px]">
        <h1 className="text-[#1E266D] font-bold text-3xl md:text-5xl ">Good design meets </h1>
        <h1 className="text-[#1E266D] font-bold text-3xl md:text-5xl mb-5">great user experience</h1>
        <p className="font-normal text-[#45588080] text-center text-base mb-5">For everyone, from beginners to experts</p>
        <div className="md:flex gap-3 mb-2 justify-center flex ">
          <button className="shadow duration-500 flex text-[#ffffff]  justify-between rounded-2xl items-center bg-[#3751FF] px-6 gap-2 hover:bg-gray-100 hover:text-[#000] hover:outline-slate-400">
           Buy Digits
          </button>
          <button className="shadow duration-500 text-[##455880] bg-[#efefef] px-8 py-3 rounded-2xl  hover:bg-[#3751FF] hover:text-[#fff] border hover:border-[#3751FF] ">
           See the Features
          </button>
        </div>
      </div>
    
      <div className="w-full md:min-h-[90vh] relative mx-auto  md:top-12 ">
        <img src={heroImg} alt="" className="md:absolute w-full md:w-9/12 top-[5rem] md:left-[15%] " />
      </div>
   
    </div>
  );
};

export default Hero;

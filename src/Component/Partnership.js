import React from "react";
import logo from "../Assets/logo.png";
import logo1 from "../Assets/logo1.png";
import logo2 from "../Assets/logo2.png";
import logo3 from "../Assets/logo3.png";
import logo4 from "../Assets/logo4.png";
import logo5 from "../Assets/logo5.png";
import logo6 from "../Assets/logo6.png";
import logo7 from "../Assets/logo7.png";

const Partnership = () => {
  return (
    <div className="bg-[#fff]  mb-4 md:mt-[170px] mt-[10px] md:py-[30px] w-full px-4  py-[10px]">
      <div className="md:max-w[1480px] m-auto max-w-[600px] ">
        <p className="font-normal text-[#45588080] text-center text-base">
          Trusted by forward-thinking software teams around the world
        </p>

        <div className=" flex justify-center item-center gap-3 mb-3 py-4 md:py-9 ">
          <img src={logo1} className="w-1/12  md:w-2/12" />
          <img src={logo2} className="w-1/12  md:w-2/12" />
          <img src={logo3} className="w-1/12  md:w-2/12" />
          <img src={logo4} className="w-1/12  md:w-2/12" />
          <img src={logo5} className="w-1/12  md:w-2/12" />
          <img src={logo6} className="w-1/12  md:w-2/12" />
          <img src={logo7} className="w-1/12  md:w-2/12" />
        </div>
      </div>
    </div>
  );
};

export default Partnership;

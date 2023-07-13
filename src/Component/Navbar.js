import React, { useState } from "react";
import logoImage from "../Assets/logo.png";
import menuIcon from "../Assets/menu-fill.png";
import closeIcon from "../Assets/close-fill.png";
import Button from "./Button";

const Navbar = () => {
  //  use state funtion

  const [toggle, setToggle] = useState(false);
  const handleClick = ()=> setToggle(!toggle);
  return (
    <div className="w-full h-[80px] bg-[#FFFFFF] shadow-lg ">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-3 ">
        <img src={logoImage} className="h-[25px]" alt="logo" />
        <div className="hidden md:flex items-center text-[#213363]   ">
          <ul className="flex gap-4">
            <li>HomePages</li>
            <li>Products</li>
            <li>Company</li>
            <li>Pricing</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <button className="flex justify-between items-center bg-transparent px-6 gap-2">
            +00 123456789
          </button>
          <button className="px-8 py-3 rounded-2xl bg-[#3751FF] text-white font-bold">
            Contact Us
          </button>
        </div>
        {/* handleClick function helps toggle from true to false  */}
        <div className=" md:hidden" onClick={handleClick}>
          <img src={toggle ? closeIcon : menuIcon} alt="" />
        </div>
      </div>
      {/* make use of the space beneath the navbar */}
      <div className={toggle?'absolute z-10 p-4 bg-white w-full px-6 md:hidden':'hidden'}>
        <ul >
          <li className="p-4 hover:bg-gray-100">HomePages</li>
          <li className="p-4 hover:bg-gray-100">Products</li>
          <li className="p-4 hover:bg-gray-100">Company</li>
          <li className="p-4 hover:bg-gray-100">Pricing</li>
          <li className="p-4 hover:bg-gray-100">Blog</li>
          <div className="flex flex-col my-4 gap-4">
          <button className="F] flex justify-center items-center bg-transparent px-6 gap-2 py-4">
            +00 123456789
          </button>
          <button className="px-8 py-5 rounded-md bg-[#068FFF] text-white font-bold">
            Contact Us
          </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

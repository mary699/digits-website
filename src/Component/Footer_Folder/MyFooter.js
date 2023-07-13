import React from "react";
import "../Footer_Folder/MyFooter.css";
import logo from "../../Assets/logo.png";
import facebookLogo from "../../Assets/Vector (2).png";
import instagramLogo from "../../Assets/Vector (3).png";
import twitterLogo from "../../Assets/icon-twitter.png";
import webLogo from "../../Assets/Group.png";
import envato from "../../Assets/icon-envato.png";
import mailLine from "../../Assets/mail-line.png";

const MyFooter = () => {
  return (


    <div className="footer ">
       <div
        className="md:flex md:justify-between md:items-center 
      sm:px-12 px-4 bg-[#3751FF] py-7"
      >
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 
      lg:leading-normal font-semibold md:w-2/5 text-[#FFFFFF]"
        >
          Ready to launch your next website?
        </h1>

        <div>
          <a>
            <button className="shadow flex gap-3 items-center duration-500 text-[#455880] bg-[#ffffff] px-8 py-3 rounded-2xl  hover:bg-[#3751FF] hover:text-[#fff] border hover:border-[#3751FF] outline-[#3751FF] ">
              <span>
                <img className="w-[16px] h-[16px]" src={mailLine} alt="" />
              </span>
              Get in touch now
            </button>
          </a>
          <p className="text-[#DFE0EB] text-sm">
            Or, take a peek inside our
            <span className="text-[#FED385]">design studio</span>
          </p>
        </div>
      </div>
      <div className="sb__footer  section__padding px-[1rem] py-[1rem] md:px-[4rem] md:py-[4rem]">
        <div className="sb__footer-links  flex flex-col w-full items-center ">
          <div className="sb__footer-links-div  ">
            <img src={logo} className="w-[40px] h-[20px] mt-5 mb-2" alt="" />
            <a href="">
              <p>
                Digits is a website template built to <br /> work seamlesly with the
                WordPress  <br />block editor to create beautifully <br /> designed pages in
                minutes.
              </p>
            </a>
          </div>
          <div className=" sb__footer-links_div text-[455880]  ">
            <h4 className="font-medium text-[#1E266D]">Pages</h4>
            <a  href="">Home</a>
            <a href="">About</a>
            <a href="">News</a>
            <a href="">Pricing</a>
            <a href="">Contact</a>
          </div>

          <div className="sb__footer-links_div">
            <h4 className="font-medium text-[#1E266D]">Demos</h4>
            <a href="">Classic</a>
            <a href="">Boxy</a>
            <a href="">Gradient</a>
            <a href="">Minimal</a>
            <a href="">Night</a>
          </div>

          <div className="sb__footer-links_div">
            <h4 className="font-medium text-[#1E266D]">Resources</h4>
            <div className="socialmedia flex  gap-4 mb-3">
              <img src={facebookLogo} className="w-[15px] h-[15px]" alt="" />
              <img src={instagramLogo} className="w-[15px] h-[15px]" alt="" />
              <img src={twitterLogo} className="w-[15px] h-[15px]" alt="" />
              <img src={webLogo} className="w-[15px] h-[15px]" alt="" />
              <img src={envato} className="w-[15px] h-[15px]" alt="" />
            </div>
            <a href="">Download Now</a>
            <a href="">Documentation</a>
          </div>
        </div>

        <hr />

        <div className="sb__footer-below flex flex-col  md:flex-row md:mt-[3rem] md:justify-between">
          <div className="sb__footer-copyright mb-2 order-last md:order-first text-[#455880] text-center text-xs md:text-sm ">
            <p>Copyright © 2020 tempy.club</p>
          </div>
          <div className="sb__footer-below-links justify-between flex flex-row my-5 md:mb-0 text-[#455880] ">
            <a  href="">
              <div>
                <p className="text-[#455880] text-xs md-text-sm ">Privacy Policy</p>
              </div>
            </a>
            <a href="">
              <div>
                <p className="text-[#455880] text-xs md-text-sm">Terms of Use</p>
              </div>
            </a>
            <a href="">
              <div>
                <p className="text-[#455880] text-xs md-text-sm">GDPR</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFooter;

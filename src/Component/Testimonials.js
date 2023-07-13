import React from "react";
import Card from "../Component/Card";
import group14Image from "../Assets/Group 14.png";
import group15Image from "../Assets/Group 15.png";
import group16Image from "../Assets/Group 16.png";
const Testimonials = () => {
  return (
    <div className="bg-[#FFF]  w-full mt-5 py-8 md:py-8 ">
      <div className="mb-5 flex flex-col items-center  justify-center">
        <h1 className="text-[#1E266D] font-medium mb-6 md:mb-12  text-center text-3xl md:text-5xl py-11">
          What are others Saying
        </h1>
        <div className="flex w-full gap-6 justify-center flex-col md:flex-row  ">
          <Card
            description="Completely beautiful website and amazing support! This is my second website from this author and I love both of the sites so much and she has helped me so well when I needed it!"
            imageSrc={group14Image}
            name="Happy User"
            quote="tempy.club"
          />

          <Card
            description="Really easy to use and customize. easy to understand. Darinka helped me with my site! She answers very quickly, a good service! Thank you very much!"
            imageSrc={group15Image}
            name="Happy User"
            quote="tempy.club"
          />
          <Card
            description="Really pleasing to look at! Documentation (including installation instructions) are clear and that is coming from a relatively new WordPress user."
            imageSrc={group16Image}
            name="Happy User"
            quote="tempy.club"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

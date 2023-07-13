import React from 'react'
import group11Image from "../Assets/Group 11.png"
import group12Image from "../Assets/Group 12.png"
import group13Image from "../Assets/Group 13.png"


const HelpCustom = ({ imageSrc, title, description }) => {
  return (
    <div className="border-b-2  border-[#45588033] last:border-0 flex flex-row gap-4 items-center  mb-8">
    <img className="w-[54px] h-[54px] " src={imageSrc} alt="" />
    <div className=" box-border h-50 w-80 ">
      <h1 className="text-[#1E266D] font-medium text-base">{title}</h1>
      <p className="text-[#455880] font-normal text-sm py-4">{description}</p>
    </div>
  </div>  
  )
//   we're using destructuring assignment to extract the imageSrc, title, and description props directly from the component's props.
}

export default HelpCustom;
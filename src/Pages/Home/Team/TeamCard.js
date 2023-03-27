import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
const TeamCard = (props) => {
  const { name, title, img } = props.data;
  return (
    <div className="card  w-[100%] bg-white border-[2px] border-gray-200 rounded-sm">
      <div className="px-5 pt-6 pb-5">
        <figure className=" w-[100%] h-[100%] bg-gray-100 rounded-xl ">
          <img src={img} alt="Shoes" className=" w-[300px] h-[280px]" />
        </figure>
      </div>
      <div className="flex flex-col items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-base">{title}</p>
      </div>

      {/* social icon section */}
      <div className="inline-flex  items-center justify-center mt-3 mb-10">
        <div className="flex items-center justify-center  w-8 h-8 bg-facebook rounded-full mr-2">
          <FaFacebookF className="text-white w-4 h-4  " />
        </div>
        <div className="flex items-center justify-center  w-8 h-8 bg-twitter rounded-full mr-2 ">
          <BsTwitter className="text-white w-4 h-4  " />
        </div>
        <div className="flex items-center justify-center  w-8 h-8 bg-linkedIn rounded-full mr-2">
          <FaLinkedinIn className="text-white w-4 h-4  " />
        </div>
        <div className="flex items-center justify-center  w-8 h-8 bg-instagram rounded-full mr-2 ">
          <BsInstagram className="text-white w-4 h-4  " />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

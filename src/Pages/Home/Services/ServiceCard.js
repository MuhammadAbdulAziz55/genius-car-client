import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const ServiceCard = ({ service }) => {
  const { title, img, price, description } = service;
  return (
    <div className="card  w-[100%] bg-white border-[2px] border-gray-200 rounded-sm">
      <div className="px-5 pt-6 pb-5">
        <figure className="rounded-md w-[100%] h-[100%]">
          <img className="w-[314px]  h-[208px]" src={img} alt="Shoes" />
        </figure>
      </div>
      <div className="flex flex-col pl-5 pr-4">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between pb-5">
          <p className="text-orange-600 font-semibold text-base">
            Price: ${price}
          </p>
          <BsFillArrowRightCircleFill className=" text-orange-600 w-6 h-6 cursor-pointer " />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

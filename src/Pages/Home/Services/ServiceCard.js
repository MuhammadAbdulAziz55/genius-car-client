import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { title, img, price, _id } = service;
  return (
    <div className="card  w-[100%] bg-white border-[2px] border-gray-200 rounded-sm">
      <div className="px-5 pt-6 pb-5">
        <figure className="rounded-md w-[100%] h-[100%]">
          <img className="w-[314px]  h-[208px]" src={img} alt="Shoes" />
        </figure>
      </div>
      <div className="flex flex-col pl-5 pr-4">
        <h2 className="lg:card-title lg:text[22px] text-base font-semibold">
          {title}
        </h2>
        <div className="flex justify-between pb-5">
          <p className="lg:text-orange-600 text-orange-600 lg:font-semibold font-semibold lg:text-lg text-sm ">
            Price: ${price}
          </p>
          <Link to={`/checkout/${_id}`}>
            <BsFillArrowRightCircleFill className=" lg:text-orange-600 text-orange-600 lg:w-6 lg:h-6 w-5 h-5 lg:cursor-pointer cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

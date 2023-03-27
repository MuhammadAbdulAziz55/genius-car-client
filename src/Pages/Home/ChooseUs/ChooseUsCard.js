import React, { useEffect, useState } from "react";

const ChooseUsCard = ({ info }) => {
  const { img, title } = info;
  return (
    <div className="card  w-[100%] bg-white border-[2px] border-gray-200 rounded-sm">
      <div className="px-5 pt-6 pb-5">
        <figure className=" w-[100%] h-[100%]   ">
          <img src={img} alt="Shoes" className="" />
        </figure>
      </div>
      <div className="flex flex-col items-center text-center">
        <h2 className="card-title text-lg">{title}</h2>
      </div>
    </div>
  );
};

export default ChooseUsCard;

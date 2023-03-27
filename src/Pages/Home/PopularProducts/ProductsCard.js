import React from "react";

const PopularPrCard = ({ product }) => {
  const { title, price, img } = product;
  return (
    <div className="card  w-[100%] bg-white border-[2px] border-gray-200 rounded-sm">
      <div className="px-5 pt-6 pb-5">
        <figure className=" w-[100%] h-[100%] bg-gray-100 ">
          <img src={img} alt="Shoes" className=" w-[156px] h-[153px]" />
        </figure>
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400 w-5 h-5"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400 w-5 h-5"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400 w-5 h-5"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400 w-5 h-5"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400 w-5 h-5"
          />
        </div>

        <h2 className="card-title">{title}</h2>
        <p className="text-orange-600 font-bold pb-6">${price}</p>
      </div>
    </div>
  );
};

export default PopularPrCard;

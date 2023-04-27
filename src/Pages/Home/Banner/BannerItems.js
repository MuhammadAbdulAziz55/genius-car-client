import React from "react";
import "./BannerItems.css";
const BannerItems = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img ">
        <img alt="" src={image} className=" w-full rounded-xl " />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2  left-8 lg:left-24  lg:top-1/3 top-[25%]">
        <h1 className="text-[12px] lg:text-6xl text-white font-bold">
          Affordable <br />
          Price For Car <br />
          Servicing
        </h1>
      </div>
      <div className="absolute flex justify-end w-1/2 transform -translate-y-1/2 left-8 lg:left-24  lg:top-[60%] top-[55%]">
        <p className="text-[8px] lg:text-xl text-white ">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex justify-start w-1/2 transform -translate-y-1/2 left-8 lg:left-24  lg:top-[80%] top-[85%]">
        <button className="lg:btn lg:btn-warning btn-warning mr-5 inline-flex items-center justify-center text-center h-5 pl-2 pr-2 text-[12px] ">
          Warning
        </button>
        <button className="lg:btn lg:btn-outline lg:btn-warning btn-warning btn-outline inline-flex items-center justify-center text-center h-5 pl-2 pr-2 text-[12px] border-transparent">
          Warning
        </button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 lg:left-5 left-0 right-0 lg:right-5 bottom-[-5px]">
        <a
          href={`#slide${prev}`}
          className="lg:btn lg:btn-circle rounded-full h-5 w-5 mr-5 lg:bg-orange-600 bg-orange-600 inline-flex items-center justify-center text-center text-white"
        >
          ❮
        </a>
        <a
          href={`#slide${next}`}
          className="lg:btn lg:btn-circle rounded-full h-5 w-5 mr-5 lg:bg-orange-600 bg-orange-600 inline-flex items-center justify-center text-center text-white"
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItems;

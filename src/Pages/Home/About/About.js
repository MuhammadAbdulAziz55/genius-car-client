import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero  my-20 ">
      <div className="  z-0 flex items-center justify-center gap-4 flex-col lg:flex-row  ">
        <div className="lg:w-1/2 w-[100%] relative ">
          <img src={person} className="w-4/5  rounded-lg shadow-2xl" alt="" />
          <img
            src={parts}
            className="absolute w-[60%]   right-5  top-1/2 rounded-lg shadow-2xl border-8 border-white"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 w-[100%] lg:mt-0 mt-8">
          <p className="font-bold text-orange-600 text-2xl pb-4 lg:text-left text-center">
            About Us
          </p>
          <h1 className="lg:text-4xl text-[18px] font-bold lg:text-left text-center">
            We are qualified & of experience in this field
          </h1>
          <p className="py-4 lg:text-[16px] text-[12px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-4 lg:text-[16px] text-[12px] lg:text-left text-center">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <div className="lg:flex flex lg:items-start items-center lg:justify-start justify-center">
            <button className="lg:btn lg:btn-primary btn-primary lg:bg-orange-500 bg-orange-500 lg:hover:bg-orange-600 hover:bg-orange-600 lg:border-none border-none  inline-flex items-center justify-center text-center text-white h-5 p-3 text-sm">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

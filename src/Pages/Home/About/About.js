import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero  my-20 ">
      <div className="  z-0 flex items-center justify-center gap-4 flex-col lg:flex-row  ">
        <div className="w-1/2 relative ">
          <img src={person} className="w-4/5 rounded-lg shadow-2xl" alt="" />
          <img
            src={parts}
            className="absolute w-[60%] right-5 top-1/2 rounded-lg shadow-2xl border-8 border-white"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <p className="font-bold text-orange-600 text-2xl pb-4">About Us</p>
          <h1 className="text-4xl font-bold">
            We are qualified & <br />
            of experience in <br />
            this field
          </h1>
          <p className="py-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-4">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-primary bg-orange-500 hover:bg-orange-600 border-none">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

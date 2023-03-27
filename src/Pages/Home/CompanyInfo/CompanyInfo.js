import React from "react";
import { BsCalendar4 } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";

const CompanyInfo = () => {
  return (
    <div className="bg-black text-white w-full  mb-20 ">
      <div className="flex py-16 lg:py-24 px-12 lg:px-16 flex-col lg:flex-row">
        <div className="flex-1 flex pb-4 lg:pb-0">
          <div className="mr-5">
            <BsCalendar4 className="text-orange-600 w-7 h-7 lg:w-10 lg:h-10 text-center]" />
          </div>
          <div>
            <p className="text-white lg:text-sm text-xs font-medium">
              We are open monday-friday
            </p>
            <h3 className="text-white lg:text-xl text-base font-bold">
              7:00 am - 9:00 pm
            </h3>
          </div>
        </div>
        <div className="flex-1 flex pb-4 lg:pb-0">
          {" "}
          <div className="mr-5">
            <FiPhoneCall className="text-orange-600 w-7 h-7 lg:w-10 lg:h-10 text-center]" />
          </div>
          <div>
            <p className="text-white lg:text-sm text-xs font-medium">
              Have a question?
            </p>
            <h3 className="text-white lg:text-xl text-base font-bold">
              +2546 251 2658
            </h3>
          </div>
        </div>
        <div className="flex-1 flex">
          {" "}
          <div className="mr-5">
            <TfiLocationPin className="text-orange-600 w-7 h-7 lg:w-10 lg:h-10 text-center]" />
          </div>
          <div>
            <p className="text-white lg:text-sm text-xs font-medium">
              Need a repair? our address
            </p>
            <h3 className="text-white lg:text-xl text-base font-bold">
              Liza Street, New York
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Team.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
const Test = () => {
  return (
    <>
      <div className="text-center">
        <p className="text-orange-600 text-2xl mb-3">Team</p>
        <h2 className="text-4xl font-bold mb-5">Meet Our Team</h2>
        <p className="mb-10">
          the majority have suffered alteration in some form, by injected
          humour,
          <br /> or randomised words which don't look even slightly believable.
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },

          1260: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card  w-[100%] bg-white border-[2px] border-gray-200 rounded-sm">
            <div className="px-5 pt-6 pb-5">
              <figure className=" w-[100%] h-[100%] bg-gray-100 ">
                <img
                  src="/src/assets/images/team/1.jpg"
                  alt="Shoes"
                  className=" w-[314px] h-[293px]"
                />
              </figure>
            </div>
            <div className="flex flex-col items-center text-center">
              <h2 className="card-title">Muhammad</h2>
              <p className="text-base">Engine Expert</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Test;

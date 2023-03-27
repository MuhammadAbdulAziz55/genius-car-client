import React, { useEffect, useRef } from "react";
import "swiper/swiper.min.css";
import Swiper from "swiper";
import "./Team.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import TeamCard from "./TeamCard";
import img1 from "../../../assets/images/team/1.jpg";
import img2 from "../../../assets/images/team/2.jpg";
import img3 from "../../../assets/images/team/3.jpg";
import img4 from "../../../assets/images/team/2.jpg";
import img5 from "../../../assets/images/team/1.jpg";
import img6 from "../../../assets/images/team/3.jpg";

// SwiperCore.use([Navigation, Pagination]);

const Test2 = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    new Swiper(swiperRef.current, {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <div className="swiper-container" ref={swiperRef}>
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <TeamCard
            data={{ img: img1, name: "John", title: "Engine Expert" }}
          />
        </div>
        <div className="swiper-slide">
          <TeamCard
            data={{ img: img2, name: "John", title: "Engine Expert" }}
          />
        </div>
        <div className="swiper-slide"></div>
        <div className="swiper-slide"> </div>
        <div className="swiper-slide"> </div>
        <div className="swiper-slide"> </div>
      </div>
      <div className="swiper-button-next">
        <BsFillArrowRightCircleFill />
      </div>
      <div className="swiper-button-prev">
        <BsFillArrowLeftCircleFill />
      </div>
    </div>

    //
  );
};

export default Test2;

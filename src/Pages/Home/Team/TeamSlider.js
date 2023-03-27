import React, { useEffect, useState } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./Team.css";
import TeamCard from "./TeamCard";
import img1 from "../../../assets/images/team/1.jpg";
import img2 from "../../../assets/images/team/2.jpg";
import img3 from "../../../assets/images/team/3.jpg";
import img4 from "../../../assets/images/team/2.jpg";
import img5 from "../../../assets/images/team/1.jpg";
import img6 from "../../../assets/images/team/3.jpg";
SwiperCore.use([Navigation, Pagination]);

const TeamSlider = () => {
  const [teamInfo, setTeamInfo] = useState([]);

  useEffect(() => {
    fetch("teamInfo.json")
      .then((res) => res.json())
      .then((data) => setTeamInfo(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <div className=" mb-20">
        <div className="text-center">
          <p className="text-orange-600 text-2xl mb-3">Team</p>
          <h2 className="text-4xl font-bold mb-5">Meet Our Team</h2>
          <p className="mb-10">
            the majority have suffered alteration in some form, by injected
            humour,
            <br /> or randomised words which don't look even slightly
            believable.
          </p>
        </div>

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation={true}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="mb-20"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },

            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
        >
          <SwiperSlide>
            <TeamCard
              data={{ img: img1, name: "John", title: "Engine Expert" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              data={{ img: img2, name: "Adam ", title: "Engine Expert" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              data={{ img: img3, name: "Grisman", title: "Engine Expert" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              data={{ img: img4, name: "Kingsman", title: "Engine Expert" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              data={{ img: img5, name: "John", title: "Engine Expert" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              data={{ img: img6, name: "Abdullah", title: "Engine Expert" }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default TeamSlider;

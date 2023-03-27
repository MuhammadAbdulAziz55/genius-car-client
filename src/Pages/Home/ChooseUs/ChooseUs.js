import React, { useEffect, useState } from "react";
import ChooseUsCard from "./ChooseUsCard";
import img1 from "../../../assets/icons/group.svg";
import img2 from "../../../assets/icons/deliveryt.svg";
import img3 from "../../../assets/icons/person.svg";
import img4 from "../../../assets/icons/Wrench.svg";
import img5 from "../../../assets/icons/check.svg";
import img6 from "../../../assets/icons/deliveryt.svg";

const ChooseUs = () => {
  // const [chooseUsInfo, setChooseUsInfo] = useState([]);
  const chooseUsInfo = [
    { img: img1, title: "Expert Team", id: 1 },
    { img: img2, title: "Timely Delivery", id: 2 },
    { img: img3, title: "24/7 Support", id: 3 },
    { img: img4, title: "Best Equipment", id: 4 },
    { img: img5, title: "100% Guranty", id: 5 },
    { img: img6, title: "Timely Delivery", id: 6 },
  ];
  // useEffect(() => {
  //   fetch("chooseUsInfo.json")
  //     .then((res) => res.json())
  //     .then((data) => setChooseUsInfo(data))
  //     .catch((err) => console.error(err));
  // }, []);
  return (
    <div className=" mb-20">
      <div className="text-center">
        <p className="text-orange-600 text-2xl mb-3">Core Features</p>
        <h2 className="text-4xl font-bold mb-5">Why Choose Us</h2>
        <p className="mb-10">
          the majority have suffered alteration in some form, by injected
          humour, <br /> or randomised words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 ">
        {chooseUsInfo.map((info) => (
          <ChooseUsCard key={info.id} info={info} />
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;

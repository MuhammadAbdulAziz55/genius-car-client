import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://genius-car-server-ss73.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className=" mb-20">
      <div className="text-center">
        <p className="text-orange-600 text-2xl mb-3">Service</p>
        <h2 className="text-4xl font-bold mb-5">Our Service Area</h2>
        <p className="mb-10">
          the majority have suffered alteration in some form, by injected
          humour, <br />
          or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>

      <div className="flex justify-center items-center mt-16">
        <button className="btn btn-outline btn-error ">More Services</button>
      </div>
    </div>
  );
};

export default Services;

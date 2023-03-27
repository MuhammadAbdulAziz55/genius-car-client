import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Services from "../Services/Services";
import CompanyInfo from "../CompanyInfo/CompanyInfo";
import PopularProducts from "../PopularProducts/PopularProducts";

import ChooseUs from "../ChooseUs/ChooseUs";

import Test2 from "../Team/Test2";
import TeamSlider from "../Team/TeamSlider";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <CompanyInfo />
      <PopularProducts />
      <TeamSlider />
      <ChooseUs />
      {/* <Test /> */}
      {/* <Test2 /> */}
    </div>
  );
};

export default Home;

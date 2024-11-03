import React from "react";
import Banner from "../Banner/Banner";
import BannerImg from "../BannerImg/BannerImg";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div className="bg-slate-300">
      <Banner></Banner>
      <BannerImg></BannerImg>
      <Products></Products>
    </div>
  );
};

export default Home;

import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import BannerImg from "../BannerImg/BannerImg";
import Products from "../Products/Products";
import { Outlet } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Gadget Heaven";
  }, []);
  return (
    <div className="bg-slate-300">
      <Banner></Banner>
      <BannerImg></BannerImg>
      {/* <Products></Products> */}
      <Outlet></Outlet>
    </div>
  );
};

export default Home;

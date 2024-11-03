import React from "react";
import bannerImage from "../../assets/banner.jpg";

const BannerImg = () => {
  return (
    <div className="lg: relative lg:-top-20 top-0">
      <div className="border-2  max-w-[1062px] max-h-[563px]  mx-auto rounded-3xl bg-slate-400">
        <img
          className="w-[1062px] max-h-[563px] mx-auto p-5 rounded-[40px]"
          src={bannerImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default BannerImg;

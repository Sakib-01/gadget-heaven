import React from "react";

const Headline = ({ title, subtitle }) => {
  return (
    <div className="">
      <div className="flex flex-col w-full py-10 items-center  h-72 bg-violet-600 text-white ">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-thin mb-4">
          {title}
        </h1>
        <p className="text-xs md:text-base text-white text-center font-thin">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Headline;

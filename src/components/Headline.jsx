import React from "react";
import { Link, useLocation } from "react-router-dom";

const Headline = ({ title, subtitle }) => {
  const { pathname } = useLocation();
  return (
    <div className="">
      <div className="flex flex-col w-full py-10 items-center  h-72 bg-violet-600 text-white ">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-thin mb-4">
          {title}
        </h1>
        <p className="text-xs md:text-base text-white text-center font-thin">
          {subtitle}
        </p>
        {(pathname === "/dashboard" || pathname === "/dashboard/wish") && (
          <div className="mt-10">
            <Link
              to="/dashboard"
              className="btn btn-outline rounded-full text-white text-base px-5  btn-accent mr-5"
            >
              card
            </Link>
            <Link
              to="/dashboard/wish"
              className="btn btn-outline rounded-full text-white text-base px-5  btn-accent"
            >
              wish
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Headline;

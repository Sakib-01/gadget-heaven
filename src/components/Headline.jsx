import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

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
        {(pathname === "/dashboard/cart" ||
          pathname === "/dashboard/wish" ||
          pathname === "/dashboard") && (
          <div className="mt-10">
            <NavLink
              to="/dashboard/cart"
              className={({ isActive }) =>
                `btn  rounded-full text-black bg-violet-600 text-base px-5   mr-5 ${
                  isActive ? "bg-white text-purple-950" : "hover:text-white"
                }`
              }
            >
              card
            </NavLink>
            <NavLink
              to="/dashboard/wish"
              className={({ isActive }) =>
                `btn  rounded-full text-black bg-violet-600 text-base px-5   mr-5 ${
                  isActive ? "bg-white text-purple-950" : "hover:text-white"
                }`
              }
            >
              wish
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Headline;

import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className=" min-h-[650px] lg:mb-[350px] w-11/12 rounded-b-3xl mx-auto bg-purple-950">
      <div className="flex flex-col justify-center items-center pt-20 text-center text-white">
        <div className="max-w-5xl">
          <h1 className="text-5xl font-bold">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="py-6">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <Link to="/dashboard/cart" className="btn btn-primary">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

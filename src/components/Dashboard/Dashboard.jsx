import React from "react";
import Headline from "../Headline";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Headline
        title="Product Details"
        subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
      ></Headline>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;

import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  favouriteCount,
  getAllFavourite,
  wishlistCount,
} from "../../Utilities/storage";
import { TiShoppingCart } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";

const Header = () => {
  const { pathname } = useLocation();
  const bgColor =
    pathname === "/"
      ? "bg-purple-950 rounded-t-3xl mt-5 text-white"
      : "bg-white";
  const Link = (
    <>
      <li className="mr-5">
        <NavLink to="/">Home</NavLink>
      </li>

      <li className="mr-5">
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>

      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <div className={`navbar ${bgColor}  w-11/12 mx-auto`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {Link}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Link}</ul>
      </div>
      <div className="navbar-end">
        <NavLink to="/dashboard" className="btn rounded-full mr-2">
          <TiShoppingCart size={20} />
          {favouriteCount}
        </NavLink>
        <NavLink to="/dashboard/wish" className="btn rounded-full mr-2">
          <CiHeart size={20} />
          {wishlistCount}
        </NavLink>
      </div>
    </div>
  );
};

export default Header;

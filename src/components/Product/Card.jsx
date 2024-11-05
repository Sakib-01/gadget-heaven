import React from "react";
import { NavLink } from "react-router-dom";
import Headline from "../Headline";

const Card = ({ card }) => {
  return (
    <div>
      <div className="card bg-base-100 h-96 shadow-xl">
        <figure className="w-52 h-44 p-5  rounded-3xl m-10">
          <img className="" src={card.product_image} alt={card.product_title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{card.product_title}</h2>
          <p>price: ${card.price}</p>
          <div className="card-actions justify-start">
            <NavLink
              to={`/showProduct/product/${card.product_id}`}
              className="btn btn-outline rounded-full btn-info"
            >
              View Details
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

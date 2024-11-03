import React from "react";

const Card = ({ card }) => {
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{card.product_title}</h2>
        <p>price: ${card.price}</p>
        <div className="card-actions justify-start">
          <button className="btn btn-outline rounded-full btn-info">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

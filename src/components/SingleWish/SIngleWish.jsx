import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { addFavourite } from "../../Utilities/storage";

const SIngleWish = ({ wish, handleRemove }) => {
  const handleAddToCard = (wish) => {
    addFavourite(wish);
  };
  return (
    <div className="w-10/12 mx-auto flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-10">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-gray-300 rounded-lg"></div>
        <div>
          <h3 className="text-lg font-semibold">{wish.product_title}</h3>
          <p className="text-sm text-gray-500">{wish.description}</p>
          <p className="text-lg font-semibold">Price: ${wish.price}</p>
          <button
            className="btn btn-primary"
            onClick={() => handleAddToCard(wish)}
          >
            {" "}
            add to card
          </button>
        </div>
      </div>
      <button
        onClick={() => handleRemove(wish.product_id)}
        className="text-red-500"
      >
        <TiDeleteOutline size={30} />
      </button>
    </div>
  );
};

export default SIngleWish;

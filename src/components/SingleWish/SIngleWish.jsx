import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { addFavourite } from "../../Utilities/storage";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SIngleWish = ({ wish, handleRemove }) => {
  const handleAddToCard = (wish) => {
    addFavourite(wish);
  };
  return (
    <div className="w-10/12 mx-auto flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-10">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16  rounded-lg">
          <img src={wish.product_image} alt="" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{wish.product_title}</h3>
          <p className="text-sm text-gray-500">{wish.description}</p>
          <p className="text-lg font-semibold">Price: ${wish.price}</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              handleAddToCard(wish),
                toast.success(`${wish.product_title} has been added Cart!`);
            }}
          >
            {" "}
            add to card
          </button>
        </div>
      </div>

      <button
        onClick={() => {
          handleRemove(wish.product_id);
          toast.success(`${wish.product_title} has been removed Wishlist!`);
        }}
        className="text-red-500"
      >
        <TiDeleteOutline size={30} />
      </button>
    </div>
  );
};

export default SIngleWish;

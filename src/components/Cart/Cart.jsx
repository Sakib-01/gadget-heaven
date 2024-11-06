import React, { useEffect, useState } from "react";
import image from "../../assets/Group.png";
import {
  clearAllFavourites,
  getAllFavourite,
  removeFavorite,
} from "../../Utilities/storage";
import SingleCart from "../SingleCart/SingleCart";

const Cart = () => {
  const [carts, setCarts] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  useEffect(() => {
    const favourite = getAllFavourite();
    setCarts(favourite);
  }, []);

  const handleRemove = (cart) => {
    removeFavorite(cart);
    const favorite = getAllFavourite();
    setCarts(favorite);
  };

  useEffect(() => {
    const total = carts.reduce((price, cart) => price + cart.price, 0);
    setTotalCost(total);
  }, [carts]);

  const handleSort = () => {
    const sorted = [...carts].sort((a, b) => b.price - a.price);
    setCarts(sorted);
  };

  const [showModal, setShowModal] = useState(false);
  const handlePurchase = () => {
    setShowModal(true);
    clearAllFavourites();
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="flex justify-between w-10/12 mx-auto l p-4 border-b border-gray-300">
        <h2 className="text-xl font-semibold">Cart</h2>
        <div className="flex gap-5 items-center">
          <div className="text-right">
            <span className="text-lg font-semibold">Total cost:</span>
            <span className="text-lg font-semibold">${totalCost}</span>
          </div>

          <button
            onClick={handleSort}
            className="px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg"
          >
            Sort by Price
          </button>
          <button
            onClick={handlePurchase}
            className="px-4 py-2 bg-purple-500 text-white font-semibold rounded-lg"
          >
            Purchase
          </button>
        </div>
      </div>
      {carts.map((cart, idx) => (
        <SingleCart
          key={idx}
          cart={cart}
          handleRemove={handleRemove}
        ></SingleCart>
      ))}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="flex justify-center items-center mb-2">
              <img className="w-20 " src={image} alt="" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
            <p className="mb-4">Your purchase is successful.</p>
            <p className="mb-4">Total Cost: ${totalCost}</p>
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-purple-500 text-white font-semibold rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

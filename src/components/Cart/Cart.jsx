import React, { useEffect, useState } from "react";
import { getAllFavourite, removeFavorite } from "../../Utilities/storage";
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

  return (
    <div>
      <div className="flex justify-between w-10/12 mx-auto l p-4 border-b border-gray-300">
        <h2 className="text-xl font-semibold">Cart</h2>
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
        <button className="px-4 py-2 bg-purple-500 text-white font-semibold rounded-lg">
          Purchase
        </button>
      </div>
      {carts.map((cart, idx) => (
        <SingleCart
          key={idx}
          cart={cart}
          handleRemove={handleRemove}
        ></SingleCart>
      ))}
    </div>
  );
};

export default Cart;

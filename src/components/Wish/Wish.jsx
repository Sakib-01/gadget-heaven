import React, { useEffect, useState } from "react";
import { getAllWishlist, removeWishlist } from "../../Utilities/storage";
import SIngleWish from "../SingleWish/SIngleWish";

const Wish = () => {
  const [wishes, setWishes] = useState([]);
  useEffect(() => {
    const favourite = getAllWishlist();
    setWishes(favourite);
  }, []);

  const handleRemove = (cart) => {
    removeWishlist(cart);
    const favorite = getAllWishlist();
    setWishes(favorite);
  };
  return (
    <div>
      <div className="flex justify-between w-10/12 mx-auto l p-4 border-b border-gray-300">
        <h2 className="text-xl font-semibold">Wishlist</h2>
      </div>
      {wishes.map((wish, idx) => (
        <SIngleWish
          key={idx}
          wish={wish}
          handleRemove={handleRemove}
        ></SIngleWish>
      ))}
    </div>
  );
};

export default Wish;

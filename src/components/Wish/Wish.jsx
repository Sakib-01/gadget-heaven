import React, { useEffect, useState } from "react";
import { getAllWishlist } from "../../Utilities/storage";
import SIngleWish from "../SingleWish/SIngleWish";

const Wish = () => {
  const [wishes, setWishes] = useState([]);
  useEffect(() => {
    const favourite = getAllWishlist();
    setWishes(favourite);
  }, []);
  return (
    <div>
      <div className="flex justify-between w-10/12 mx-auto l p-4 border-b border-gray-300">
        <h2 className="text-xl font-semibold">Wishlist</h2>
      </div>
      {wishes.map((wish, idx) => (
        <SIngleWish key={idx} wish={wish}></SIngleWish>
      ))}
    </div>
  );
};

export default Wish;

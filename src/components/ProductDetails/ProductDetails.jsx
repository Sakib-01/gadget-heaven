import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import {
  addFavourite,
  addWishlist,
  getAllFavourite,
  getAllWishlist,
} from "../../Utilities/storage";

const ProductDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const singleData = data.find((item) => item.product_id == id);
    setProduct(singleData);
    const favourite = getAllFavourite();
    const wishlist = getAllWishlist();
    const isExist = wishlist.find((item) => item.product_id == singleData.id);
    if (isExist) {
      setIsFavorite(true);
    }
  }, [data, id]);

  const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    specification,
    availability,
    rating,
  } = product || {};

  const handleAddToCard = (product) => {
    addFavourite(product);
  };
  const handleAddToWishlist = (product) => {
    addWishlist(product);
    setIsFavorite(true);
  };

  return (
    <div className="hero w-8/12 mx-auto rounded-3xl bg-white relative -top-20 ">
      <div className="hero-content flex-col lg:flex-row ">
        <img
          src={
            product_image ||
            "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          }
          alt={product_title || "Product Image"}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="space-y-5 py-10">
          <h1 className="text-5xl font-bold">{product_title}</h1>
          <p className="py-6">{price}</p>
          <p>{description}</p>
          <ul className="text-lg ml-12">
            {specification &&
              specification.map((item, i) => (
                <li key={i}>
                  {i + 1}. {item}
                </li>
              ))}
          </ul>
          <button
            className="btn btn-primary mr-5"
            onClick={() => handleAddToCard(product)}
          >
            Add to Card{" "}
            <span>
              <TiShoppingCart size={15} />
            </span>
          </button>
          <button
            disabled={isFavorite}
            onClick={() => handleAddToWishlist(product)}
            className="btn rounded-full"
          >
            <CiHeart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

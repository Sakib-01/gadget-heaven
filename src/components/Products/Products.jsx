import React, { useEffect, useState } from "react";
import Categories from "../Categories/Categories";
import Cards from "../Cards/Cards";

const Products = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/public/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h2 className="font-bold text-3xl text-center">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-5 w-10/12 mx-auto mt-5">
        <Categories categories={categories}></Categories>
        <Cards></Cards>
      </div>
    </div>
  );
};

export default Products;

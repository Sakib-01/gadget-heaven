import React, { useEffect, useState } from "react";
import Categories from "../Categories/Categories";
import Cards from "../Cards/Cards";

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all products");

  useEffect(() => {
    fetch("/public/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    fetch("/public/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // const filteredProducts = selectedCategory
  //   ? products.filter((product) => product.category === selectedCategory)
  //   : products;

  const filteredProducts =
    selectedCategory === "all products"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <h2 className="font-bold text-3xl text-center">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-10/12 mx-auto mt-5">
        <Categories
          categories={categories}
          setSelectedCategory={setSelectedCategory}
        />
        <Cards products={filteredProducts} />
      </div>
    </div>
  );
};

export default Products;

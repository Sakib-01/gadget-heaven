import React from "react";

const Category = ({ category, setSelectedCategory }) => {
  const handleClick = () => {
    setSelectedCategory(category.category_name.toLowerCase());
  };

  return (
    <div
      onClick={handleClick}
      className="border-2 rounded-full p-5 text-center bg-slate-300 cursor-pointer"
    >
      <h2>{category.category_name}</h2>
    </div>
  );
};

export default Category;

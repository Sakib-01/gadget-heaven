import React from "react";

const Category = ({ category, setSelectedCategory, selected, setSelected }) => {
  const handleClick = () => {
    setSelectedCategory(category.category_name.toLowerCase());
    setSelected(category.category_name.toLowerCase());
  };
  const isSelected = selected === category.category_name.toLowerCase();

  return (
    <div
      onClick={() => handleClick()}
      className={`border-2 rounded-full p-5 text-center cursor-pointer ${
        isSelected ? "bg-purple-800 text-white" : "bg-white"
      }`}
    >
      <h2>{category.category_name}</h2>
    </div>
  );
};

export default Category;

import React from "react";

const Category = ({ category }) => {
  return (
    <div className="border-2 rounded-full p-5 text-center bg-slate-300">
      <h2>{category.category_name}</h2>
    </div>
  );
};

export default Category;

import React, { useState } from "react";
import Category from "../Product/Category/Category";

const Categories = ({ categories, setSelectedCategory }) => {
  const [selected, setSelected] = useState({});
  return (
    <div className="col-span-1 bg-white p-5 rounded-3xl lg:h-[550px] ">
      <div className="grid grid-cols-3 lg:grid-cols-1 gap-5 mb-10 justify-center items-center">
        {categories.map((category) => (
          <Category
            setSelectedCategory={setSelectedCategory}
            key={category.category_id}
            category={category}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;

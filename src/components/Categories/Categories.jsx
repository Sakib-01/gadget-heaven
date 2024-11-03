import Category from "../Product/Category/Category";

const Categories = ({ categories }) => {
  return (
    <div className="col-span-1  bg-white p-5">
      <div className="grid grid-cols-3 lg:grid-cols-1 gap-5 mb-10">
        {categories.map((category) => (
          <Category key={category.category_id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;

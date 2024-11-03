import Category from "../Product/Category/Category";

const Categories = ({ categories }) => {
  return (
    <div className="col-span-1 border-2">
      <div className="flex lg:flex-col gap-5">
        <h2>{categories.length}</h2>
        {categories.map((category) => (
          <Category key={category.category_id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;

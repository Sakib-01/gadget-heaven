import React from "react";
import Card from "../Product/Card";

const Cards = ({ products }) => {
  const displayedProducts = products.slice(0, 9);
  return (
    <div className="col-span-2 lg:col-span-4 px-5 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* <h2>{products.length}</h2> */}
        {displayedProducts.map((card, i) => (
          <Card key={i} card={card}></Card>
        ))}
      </div>
      <button className="btn btn-primary"> show all</button>
    </div>
  );
};

export default Cards;

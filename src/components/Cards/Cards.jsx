import React, { useState } from "react";
import Card from "../Product/Card";

const Cards = ({ products }) => {
  const [showAll, setShowAll] = useState(false);

  const displayedProducts = showAll ? products : products.slice(0, 9);

  return (
    <div className="col-span-2 lg:col-span-4 px-5 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {displayedProducts.map((card, i) => (
          <Card key={i} card={card}></Card>
        ))}
      </div>
      {!showAll && (
        <button
          className="btn btn-primary mt-5"
          onClick={() => setShowAll(true)}
        >
          Show All
        </button>
      )}
    </div>
  );
};

export default Cards;

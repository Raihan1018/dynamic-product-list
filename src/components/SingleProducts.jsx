import React from "react";

const SingleProducts = ({ product, handleAddCart }) => {
  const { id, title } = product;
  // console.log(product);
  return (
    <div className="bg-indigo-800 p-2 rounded-md flex flex-col">
      <h2>{id}$</h2>
      <h3>{title}</h3>
      <button
        onClickCapture={() => handleAddCart(product)}
        className="btn btn-secondary mt-auto"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default SingleProducts;

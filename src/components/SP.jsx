import React from "react";

const SingleProducts = ({ product, handleCart }) => {
  const { id, title, price, description, image } = product;
  //   console.log(handleCart);
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm border my-5">
        <figure>
          <img className="w-1/2" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button>
              <h2 className="bg-secondary p-3 text-3xl">{price}</h2>
            </button>
            <button
              onClick={() => handleCart(product)}
              className="btn btn-primary"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;

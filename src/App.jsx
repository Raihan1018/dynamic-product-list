import React, { useEffect, useState } from "react";
import SingleProducts from "./components/SingleProducts";
import Cart from "./components/Cart";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddCart = (p) => {
    console.log(p);
  };
  return (
    <div className="flex justify-between p-5">
      <div className="main-content w-[80%] border p-3 grid grid-cols-4 gap-3">
        {products.map((product) => (
          <SingleProducts handleAddCart={handleAddCart} key={product.id} product={product} />
        ))}
      </div>
      <div className="cart w-[20%] border p-3">
        <Cart />
      </div>
    </div>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import SingleProducts from "./components/SingleProducts";

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="p-5 grid-cols-12 flex justify-between">
      {/* main content */}
      <div className="grid-cols-6 ">
        <h2>Total Products: {products.length}</h2>
        {products.map((product) => (
          <SingleProducts key={product.id} product={product} />
        ))}
      </div>
      {/* cart */}
      <div className="grid-cols-6 bg-red-700">
        <h3>cart</h3>
      </div>
    </div>
  );
};

export default App;

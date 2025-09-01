import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

import SingleProducts from "./components/SingleProducts";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddCart = (p) => {
    const isExist = cart.find((item) => item.id === p.id);
    if (!isExist) {
      setCart([...cart, p]);
    } else {
      alert(`${isExist.title} - already added`);
    }
  };

  const handleDelete = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  return (
    <div className="flex justify-between p-5">
      <div className="main-content w-[80%] border p-3 grid grid-cols-4 gap-3">
        {products.map((product) => (
          <SingleProducts
            handleAddCart={handleAddCart}
            key={product.id}
            product={product}
          />
        ))}
      </div>
      <div className="cart w-[30%] border p-3">
        <div className="flex justify-between">
          <h4>Name</h4>
          <h5>Price</h5>
          <h6>Action</h6>
        </div>
        {cart.map((item, index) => (
          <div key={index}>
            <ul key={index} className="flex justify-between ">
              <li>{index + 1}. </li>
              <li>{item.title} - </li>
              <li>{item.id}$</li>
              <button onClick={() => handleDelete(item.id)}>
                <MdDelete className="hover:text-red-500" />
              </button>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

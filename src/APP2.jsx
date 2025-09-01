import { useEffect, useState } from "react";
import SingleProducts from "./components/SingleProducts";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleCart = (p) => {
    const isExits = cart.find((item) => item.id === p.id);
    if (!isExits) {
      setCart([...cart, p]);
    } else {
      alert(`already in cart `);
    }
    // console.log(cart);
  };

  const handleDelet = (id) => {
    const newCard = cart.filter((item) => item.id !== id);
    setCart(newCard);
  };

  return (
    <div className="p-5 flex ">
      <div className="main-container"></div>
      <div className="cards container ">
        {products.map((pd) => (
          <SingleProducts handleCart={handleCart} key={pd.id} product={pd} />
        ))}
      </div>

      <div className="card-container shadow-lg border p-5 w-[50%]  ">
        <div className="flex justify-between underline">
          <h2>Name</h2>
          <h3>price:</h3>
        </div>
        {cart.map((item, index) => (
          <div className="flex justify-between my-2" key={index}>
            <p className="italic">{index + 1}.</p>
            <h3> {item.title}</h3>
            <h6>{item.price}$</h6>
            <button
              onClick={() => handleDelet(item.id)}
              className="bg-red-500 rounded-md p-3"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

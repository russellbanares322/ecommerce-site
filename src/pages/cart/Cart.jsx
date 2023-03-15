import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevValue) => prevValue + 1);
  };
  const handleDecrement = () => {
    setQuantity((prevValue) => prevValue - 1);
  };

  useEffect(() => {
    const cart = localStorage.getItem("savedProduct" || "[]");
    if (cart) {
      setCartData(JSON.parse(cart));
    }
  }, []);
  const total = cartData.reduce(
    (prev, curr) => prev + curr.price * quantity,
    0
  );

  const handleRemoveProduct = (productID) => {
    const filteredCart = cartData.filter((val) => val.id !== productID);
    setCartData(filteredCart);
    localStorage.setItem("savedProduct", JSON.stringify(filteredCart));
  };

  return (
    <div className="h-screen bg-light-gray">
      {cartData.map((val) => (
        <div key={val.id}>
          <h1>{val.title}</h1>
          <h1>{quantity === 1 ? val.price : val.price * quantity}</h1>
          <div className="w-[8rem] flex justify-evenly items-center my-5">
            <button
              disabled={quantity === 1 ? true : false}
              onClick={handleDecrement}
              className="bg-dark-cyan text-white w-9"
            >
              -
            </button>
            <h3>{quantity}</h3>
            <button
              onClick={handleIncrement}
              className="bg-dark-cyan text-white w-9"
            >
              +
            </button>
          </div>
          <button
            onClick={() => handleRemoveProduct(val.id)}
            className="px-3 py-2 bg-light-cyan"
          >
            Remove
          </button>
        </div>
      ))}
      <h1 style={{ marginTop: "2rem" }}>Total: {total}</h1>
    </div>
  );
};

export default Cart;

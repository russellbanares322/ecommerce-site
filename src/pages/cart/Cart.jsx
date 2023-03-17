import React, { useState } from "react";
import useCartStore from "../../store/cartStore";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const cart = useCartStore((state) => state.cart);
  const handleRemoveProduct = useCartStore(
    (state) => state.handleRemoveProduct
  );

  const handleIncrement = () => {
    setQuantity((prevValue) => prevValue + 1);
  };
  const handleDecrement = () => {
    setQuantity((prevValue) => prevValue - 1);
  };

  const total = cart.reduce((prev, curr) => prev + curr.price * quantity, 0);

  return (
    <div className="h-screen bg-light-gray">
      {cart.map((val) => (
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

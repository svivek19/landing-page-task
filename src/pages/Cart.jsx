import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleRemove = (index) => {
    removeFromCart(index);
  };

  return (
    <div className="w-5/6 mx-auto mt-24">
      <h2 className="uppercase text-2xl font-semibold">
        Cart Items{`(${cartItems.length})`}
      </h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="mt-4">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="border-b py-2 flex justify-between items-center"
              >
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="mt-2">Price: ₹{item.price}</p>
                </div>
                <button
                  onClick={() => handleRemove(index)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-8 text-xl font-semibold">
            <h1>Total: {cartItems.map((item) => item.price)}</h1>
            <button className="bg-slate-900 px-6 py-1 font-normal rounded text-base my-4 text-white">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

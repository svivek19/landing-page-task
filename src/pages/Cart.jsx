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
      )}
    </div>
  );
};

export default Cart;

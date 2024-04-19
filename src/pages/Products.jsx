import React, { useContext, useEffect } from "react";
import SearchForm from "../components/SearchForm";
import data from "../data.json";
import { CartContext } from "../context/CartContext";

const Products = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <SearchForm />
        <div className="mt-10 w-full max-w-screen-lg mx-auto">
          {data.products.map((product, index) => (
            <div
              className="flex flex-col rounded-lg text-surface md:flex-row md:space-x-6 my-6"
              key={index}
            >
              <div className="w-full md:w-1/3 h-48 md:h-44">
                <img
                  className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="flex flex-col justify-start flex-1 px-6 py-4 md:p-0">
                <h5 className="mb-2 text-xl font-medium">{product.title}</h5>
                <p className="mb-3 text-base">{product.description}</p>
                <p className="mb-3 text-base text-red-500">₹ {product.price}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-slate-800 uppercase text-white px-6 py-2 rounded-md text-xl self-start"
                >
                  add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;

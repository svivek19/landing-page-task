import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import TopPerformer from "./components/TopPerformer";
import Reviews from "./components/Reviews";
import Footer from "./components/Foooter";
import Classes from "./pages/Classes";
import Products from "./pages/Products";
import About from "./pages/About";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";

const Home = () => (
  <div className="flex flex-col">
    <Carousel />
    <TopPerformer />
    <Reviews />
  </div>
);

const App = () => {
  return (
    <Router>
      <CartProvider>
        <div className="flex flex-col justify-between min-h-screen">
          <Navbar />
          <Routes className="flex-1">
            <Route path="/" exact element={<Home />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;

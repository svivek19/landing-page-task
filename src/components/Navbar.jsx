import React, { useState } from "react";
import { FaRegUser, FaShoppingCart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className=" fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap ">
          KaroAbhayas
        </span>
        <div className="flex md:order-2 space-x-3 md:space-x-8 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-slate-800 hover:bg-slate-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium uppercase px-4 py-2 rounded-lg text-sm"
          >
            join us
          </button>
          <button type="button" className="font-medium rounded-lg text-xl ">
            <FaRegUser />
          </button>
          <button type="button" className="font-medium rounded-lg text-xl ">
            <FaShoppingCart />
          </button>
          <button
            onClick={toggleMobileMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-smrounded-lg md:hidden  "
            aria-controls="navbar-sticky"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <RxHamburgerMenu className="text-xl" />
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 "
                aria-current="page"
              >
                Classes
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 ">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 ">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

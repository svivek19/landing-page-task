import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaDiscord } from "react-icons/fa";

const Foooter = () => {
  return (
    <div className="bg-slate-950 mt-20 p-10 text-slate-100">
      <div className="flex justify-between">
        <div className="text-xl uppercase leading-loose">
          <h1>Karo abhayaas</h1>
          <h1>112, electronic city</h1>
          <h1>bangalore, india</h1>
        </div>
        <div className="text-xl space-y-3 items-center">
          <h1 className="">Contact Here</h1>
          <div className="flex space-x-3 text-xl cursor-pointer">
            <FaDiscord className="hover:text-red-500 transition-all duration-300" />
            <FaFacebook className="hover:text-red-500 transition-all duration-300" />
            <FaInstagram className="hover:text-red-500 transition-all duration-300" />
            <FaTwitter className="hover:text-red-500 transition-all duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foooter;

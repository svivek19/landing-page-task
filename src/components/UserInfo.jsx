import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const UserInfo = () => {
  const { login, logout, loggedInUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    street: "",
    city: "",
    state: "",
    country: "",
    pin: "",
  });

  useEffect(() => {
    if (loggedInUser) {
      setFormData({
        name: loggedInUser.name,
        phone: loggedInUser.phone,
        email: loggedInUser.email,
        street: "",
        city: "",
        state: "",
        country: "",
        pin: "",
      });
    }
  }, [loggedInUser]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userInfo", JSON.stringify(formData));
    setIsEditing(false);
  };

  return (
    <div className="flex justify-around">
      <div className="px-6 py-3 space-y-4 rounded">
        {!isEditing ? (
          <>
            <h2 className="text-xl font-semibold">{loggedInUser.name}</h2>
            <h2 className="text-xl">{loggedInUser.phone}</h2>
            <h2 className="text-xl">{loggedInUser.email}</h2>
            <button
              className="bg-slate-900 rounded px-6 py-1 text-white text-center font-bold"
              onClick={handleEdit}
            >
              Edit
            </button>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleInputChange}
              placeholder="Street"
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="City"
            />
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              placeholder="State"
            />
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              placeholder="Country"
            />
            <input
              type="text"
              name="pin"
              value={formData.pin}
              onChange={handleInputChange}
              placeholder="Pin"
            />
            <button
              type="submit"
              className="bg-blue-600 rounded px-6 py-1 text-white text-center font-bold"
            >
              Save
            </button>
          </form>
        )}

        <button
          className="bg-red-600 rounded px-6 py-1 text-white text-center font-bold"
          onClick={logout}
        >
          Logout
        </button>
      </div>

      <div className="bg-slate-300 p-3 w-3/5 space-y-2 rounded capitalize">
        <h1 className="font-semibold text-xl">ADDRESS</h1>
        <p>Street: {formData.street}</p>
        <p>City: {formData.city}</p>
        <p>State: {formData.state}</p>
        <p>Country: {formData.country}</p>
        <p>PIN: {formData.pin}</p>
      </div>
    </div>
  );
};

export default UserInfo;

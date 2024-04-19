import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const SignUpSignIn = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUp = () => {
    // Validate form fields
    if (
      email.trim() !== "" &&
      name.trim() !== "" &&
      password.trim() !== "" &&
      phone.trim() !== ""
    ) {
      // Save user information to local storage
      localStorage.setItem("email", email);
      localStorage.setItem("name", name);
      localStorage.setItem("password", password);
      localStorage.setItem("phone", phone);
      setLoggedIn(true);
      toast.success("login sucessfull");
    } else {
      toast.error("Please fill in all fields.");
    }
  };

  const handleSignIn = () => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
      setLoggedIn(true);
      toast.success("login sucessfull");
    } else {
      toast.error("Invalid email or password.");
      setEmail("");
      setPassword("");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("password");
    localStorage.removeItem("phone");
    setLoggedIn(false);
  };

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Toaster />
      <div className="max-w-md w-full p-8 rounded shadow-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none bg-gray-300 p-2 w-full"
            />
          </div>
          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="outline-none bg-gray-300 p-2 w-full"
              />
            </div>
          )}
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="outline-none bg-gray-300 p-2 w-full"
            />
          </div>
          {isSignUp && (
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="outline-none bg-gray-300 p-2 w-full"
              />
            </div>
          )}
          <div>
            {isSignUp ? (
              <button
                onClick={handleSignUp}
                className="bg-sky-600 p-2 text-white w-full"
              >
                Sign Up
              </button>
            ) : (
              <button
                onClick={handleSignIn}
                className="bg-sky-600 p-2 text-white w-full"
              >
                Sign In
              </button>
            )}
          </div>
          <div className="text-center">
            <div>
              {isSignUp ? (
                <span>
                  Already have an account?{" "}
                  <span
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-violet-700 underline cursor-pointer"
                  >
                    Sign In
                  </span>
                </span>
              ) : (
                <span>
                  New user?{" "}
                  <span
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-violet-700 underline cursor-pointer"
                  >
                    Sign Up
                  </span>
                </span>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpSignIn;

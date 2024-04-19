import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

const SignUpSignIn = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const { login } = useAuth();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedName = localStorage.getItem("name");
    const storedPhone = localStorage.getItem("phone");
    const storedPassword = localStorage.getItem("password");
    if (storedEmail && storedName && storedPhone && storedPassword) {
      setEmail(storedEmail);
      setName(storedName);
      setPhone(storedPhone);
      setPassword(storedPassword);
    }
  }, []);

  const handleSignUp = () => {
    if (
      email.trim() !== "" &&
      name.trim() !== "" &&
      password.trim() !== "" &&
      phone.trim() !== ""
    ) {
      localStorage.setItem("email", email);
      localStorage.setItem("name", name);
      localStorage.setItem("password", password);
      localStorage.setItem("phone", phone);
      setLoggedIn(true);
      toast.success("login successful");
      login({ email, name, password, phone });
    } else {
      toast.error("Please fill in all fields.");
      setEmail("");
      setName("");
      setPassword("");
      setPhone("");
    }
  };

  const handleSignIn = () => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
      setLoggedIn(true);
      toast.success("login successful");
      login({ email, password });
    } else {
      toast.error("Invalid email or password.");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Toaster />
      <div className="md:w-1/2 w-full md:p-8 p-0 rounded shadow-md">
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

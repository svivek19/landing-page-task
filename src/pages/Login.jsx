import React from "react";
import SignUpSignIn from "../components/SignUpSignIn";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login, logout, loggedInUser } = useAuth();
  return (
    <div className="w-5/6 mx-auto mt-20">
      {loggedInUser ? (
        <div>
          <h2>Welcome, {loggedInUser.name}</h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <SignUpSignIn />
      )}
    </div>
  );
};

export default Login;

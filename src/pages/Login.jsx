import React from "react";
import SignUpSignIn from "../components/SignUpSignIn";
import { useAuth } from "../context/AuthContext";
import UserInfo from "../components/UserInfo";

const Login = () => {
  const { login, logout, loggedInUser } = useAuth();
  return (
    <div className="w-5/6 mx-auto mt-24">
      {loggedInUser ? <UserInfo /> : <SignUpSignIn />}
    </div>
  );
};

export default Login;

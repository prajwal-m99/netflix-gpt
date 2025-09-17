import React from "react";
import Header from "./Header";
import AuthForm from "./AuthForm";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="relative h-screen w-full">
      <Header />

      <img
        src="https://repository-images.githubusercontent.com/299409710/b42f7780-0fe1-11eb-8460-e459acd20fb4"
        alt="Netflix login background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex items-center justify-center">
        <AuthForm
          title="Sign In"
          buttonText="Sign In"
          footer={
            <p className="text-gray-400 text-sm">
              New to Netflix?{" "}
              <Link to="/signup" className="text-white hover:underline">
                Sign up now.
              </Link>
            </p>
          }
        />
      </div>
    </div>
  );
};

export default Login;

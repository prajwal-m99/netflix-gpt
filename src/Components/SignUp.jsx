import React from "react";
import Header from "./Header";
import AuthForm from "./AuthForm";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="relative h-screen w-full">
      <Header />

      <img
        src="https://repository-images.githubusercontent.com/299409710/b42f7780-0fe1-11eb-8460-e459acd20fb4"
        alt="Netflix signup background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 flex items-center justify-center">
        <AuthForm
          title="Sign Up"
          buttonText="Sign Up"
          showRemember={false}
          footer={
            <p className="text-gray-400 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-white hover:underline">
                Sign in.
              </Link>
            </p>
          }
        >
          {/* Extra field for SignUp only */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 rounded-xl bg-gray-800 text-white focus:outline-none"
          />
        </AuthForm>
      </div>
    </div>
  );
};

export default SignUp;

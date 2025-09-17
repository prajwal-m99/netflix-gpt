import React from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = ({ title, buttonText, footer, showRemember = true, children }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: sign-in / sign-up logic
    navigate("/browse");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black/75 p-8 rounded w-full max-w-md space-y-4"
    >
      <h1 className="text-2xl font-bold text-white text-left">{title}</h1>

      {/* Custom extra fields */}
      {children}

      <input
        type="text"
        placeholder="Email or phone number"
        className="w-full px-4 py-2 rounded-xl bg-gray-800 text-white focus:outline-none"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2 rounded-xl bg-gray-800 text-white focus:outline-none"
      />

      <button
        type="submit"
        className="w-full bg-red-600 text-white py-2 rounded-xl hover:bg-red-700 transition"
      >
        {buttonText}
      </button>

      {showRemember && (
        <label className="flex items-center text-gray-300 text-sm">
          <input type="checkbox" className="mr-2" />
          Remember me
        </label>
      )}

      {footer}
    </form>
  );
};

export default AuthForm;

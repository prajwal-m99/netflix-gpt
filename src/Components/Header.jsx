import React from "react";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-40">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix logo"
        className="w-40 h-12 object-contain ml-4 mt-4"
      />
    </div>
  );
};

export default Header;

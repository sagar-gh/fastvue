import React from "react";

const Nav = ({imageUrl}) => {
    
  return (
    <nav className="navbar navbar-dark bg-dark justify-content-between">
      <span className="navbar-brand">Fastvue</span>
      <img
        src={imageUrl}
        height="40px"
        width="80px"
        style={{ borderRadius: "100px" }}
        className="float-right ml-5"
        alt="logo"
      />
    </nav>
  );
};

export default Nav;

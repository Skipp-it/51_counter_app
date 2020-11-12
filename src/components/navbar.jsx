import React, { Component } from "react";

//Stateless Functional Component
//in SFC props este pasat ca argument si este eliminat "this" care se foloseste doar in contextul folosirii claselor

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;

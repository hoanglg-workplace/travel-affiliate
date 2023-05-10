import React from "react";
import "./Nav.scss";
import logo from "../../assets/logo/logo_1.png";

const Nav = () => {
  return (
    <nav>
      <img src={logo} className="logo" alt="Logo" title="Travel Affiliate" />
      <a className="nav-a_1" href="/home#home">
        Home
      </a>
      <a className="nav-a_1" href="/home#locations">
        Locations
      </a>
      <a className="nav-a_1" href="/home#package">
        Packages
      </a>
      <a className="nav-a_1" href="/about">
        About Us
      </a>
      <a className="nav-a_1" href="/contact">
        Contact Us
      </a>
    </nav>
  );
};

export default Nav;

import React, { useState } from "react";
import "./Nav.scss";
import logo from "../../assets/logo/logo_1.png";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false);

  return (
    <div>
      <nav>
        <img src={logo} className="logo" alt="Logo" title="Travel Affiliate" />
        <HashLink className="nav-link" to="/home#home">
          Home
        </HashLink>
        <HashLink className="nav-link" to="/home#locations">
          Locations
        </HashLink>
        <HashLink className="nav-link" to="/home#package">
          Packages
        </HashLink>
        <HashLink className="nav-link" to="/about">
          About Us
        </HashLink>
        <HashLink className="nav-link" to="/contact">
          Contact Us
        </HashLink>
      </nav>

      <nav className="mobile_nav" style={mobileNavActive ? {display: 'flex'} : {display: 'none'}}>
        <img src={logo} className="logo" alt="Logo" title="Travel Affiliate" />
        <HashLink className="nav-link" to="/home#home">
          Home
        </HashLink>
        <HashLink className="nav-link" to="/home#locations">
          Locations
        </HashLink>
        <HashLink className="nav-link" to="/home#package">
          Packages
        </HashLink>
        <HashLink className="nav-link" to="/about">
          About Us
        </HashLink>
        <HashLink className="nav-link" to="/contact">
          Contact Us
        </HashLink>
      </nav>

      <label className="hamburger">
        <input type="checkbox" />
        <svg
          viewBox="0 0 32 32"
          onClick={() => setMobileNavActive(!mobileNavActive)}
        >
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path className="line" d="M7 16 27 16"></path>
        </svg>
      </label>
    </div>
  );
};

export default Nav;

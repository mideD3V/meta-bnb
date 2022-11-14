import React from "react";
import Logo from "./../../asset/metabnb-logo.png"
import navStyles from './Navbar.css'
import rootStyles from '../root.css'

const Navbar = () => {
  return (
    <div className="navbar">
          <div className="logo">
              <a href="#">
                  <img src={Logo} alt="" />
        </a>
      </div>

      <ul className="nav-options">
        <li>Home</li>
        <li>Place to stay</li>
        <li>NFTs</li>
        <li>Community</li>
      </ul>

      <div className="wallet-btn">
        <a href="#">Connect wallet</a>
      </div>
    </div>
  );
};

export default Navbar;

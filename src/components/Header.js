import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logo.png";
import IcAbout from "../assets/images/ic-about.svg";
import IcCart from "../assets/images/ic-cart.svg";

export default function Header(props) {
  return (
    <div className="navigation container p-0">
      <nav className="navbar navbar-light bg-white justify-content-between mt-sm-0 mt-lg-3">
        <Link className="navbar-brand mr-auto" to="/">
          <img src={Logo} alt="Logo" height="50px" />
        </Link>
        <Link className="mr-4" to="/about">
          <img src={IcAbout} alt="Icon About" />
        </Link>
        <Link className="mr-3" to="/cart">
          <img src={IcCart} alt="Icon Cart" />
          <span className="badge badge-pill badge-secondary position-absolute">
            0
          </span>
        </Link>
      </nav>
    </div>
  );
}

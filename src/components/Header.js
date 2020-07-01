import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

import { store } from "../store";

import Logo from "../assets/images/logo.png";
import IcAbout from "../assets/images/ic-about.svg";
import IcCart from "../assets/images/ic-cart.svg";

export default function Header() {
  const globalState = useContext(store);
  const state = globalState.state;
  return (
    <Fade bottom>
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
              {state.cart}
            </span>
          </Link>
        </nav>
      </div>
    </Fade>
  );
}

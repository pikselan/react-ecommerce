import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logo.png";
import IcAbout from "../assets/images/ic-about.svg";
import IcCart from "../assets/images/ic-cart.svg";

export default function Landing() {
  return (
    <div className="container-fluid p-0">
      <div className="container p-0">
        <nav className="navbar navbar-light bg-white justify-content-between mt-sm-0 mt-lg-3">
          <Link className="navbar-brand mr-auto" to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <Link className="mr-4" to="/">
            <img src={IcAbout} alt="Icon About" />
          </Link>
          <Link className="mr-3" to="/">
            <img src={IcCart} alt="Icon Cart" />
            <span className="badge badge-pill badge-secondary position-absolute">
              0
            </span>
          </Link>
        </nav>
      </div>
      <div className="container-fluid p-0">
        <h2 className="slogan text-center mt-5">Made For Life</h2>
        <div className="container-fluid bg-gray-200">
          <div className="container">
            <div className="row">
              <div className="col-6 text-center">
                <h1 className="display-2 font-bold">Montage</h1>
                <p className="font-light h4">
                  Beautifully crafted eco-friendly bags to store your treasures
                  through your journey
                </p>
              </div>
              <div className="col-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

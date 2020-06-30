import React from "react";
import { Link } from "react-router-dom";

import Button from "../components/Button";

import Logo from "../assets/images/logo.png";
import IcAbout from "../assets/images/ic-about.svg";
import IcCart from "../assets/images/ic-cart.svg";

export default function Landing() {
  return (
    <div className="container-fluid p-0">
      <div className="navigation container p-0">
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
      <div className="hero container-fluid p-0">
        <h2 className="slogan text-center mt-5 mb-5">Made For Life</h2>
        <div
          className="container-fluid bg-gray-200"
          style={{ maxHeight: "662px" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-5 text-center middle">
                <div>
                  <h1 className="display-2 font-bold">Montage</h1>
                  <p className="font-weight-light h4 my-5">
                    Beautifully crafted eco-friendly bags to store your
                    treasures through your journey
                  </p>
                  <Button
                    type="link"
                    href="/cart"
                    className="btn-primary btn-lg px-4"
                  >
                    BUY IT!
                  </Button>
                </div>
              </div>
              <div className="col-7">
                <img src="/assets/images/hero-image.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="variation container middle">
        <div className="col-12">
          <div className="middle">
            <img src="/assets/images/bag-variation.jpg" alt="" />
            <div className="box-left bg-primary position-absolute"></div>
            <div className="box-right bg-primary position-absolute"></div>
          </div>
        </div>
      </div>
      <div className="content container">
        <div className="row">
          <div className="col-7">Image</div>
          <div className="col-5">Text</div>
        </div>
      </div>
      <div className="content container">
        <div className="row">
          <div className="col-5">Text</div>
          <div className="col-7">Image</div>
        </div>
      </div>
      <div className="content container">
        <div className="row">
          <div className="col-7">Image</div>
          <div className="col-5">Text</div>
        </div>
      </div>
      <div
        className="footer container-fluid"
        style={{
          background: "url(/assets/images/bg-footer.jpg) no-repeat cover",
        }}
      >
        footer
      </div>
    </div>
  );
}

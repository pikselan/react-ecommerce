import React from "react";

import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Item() {
  return (
    <div className="container-fluid p-0">
      <Header />
      <div className="hero container-fluid p-0">
        <h2 className="slogan text-center my-5">Made For Life</h2>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div>
                <h1 className="font-weight-bold">Your Item</h1>
                <div className="container mt-4">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        src="/assets/images/item-black.jpg"
                        alt=""
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-md-8 mt-4">
                      <h4>Montage Bag</h4>
                      <div className="row border-bottom py-3">
                        <div className="col-md-6">
                          <div className="form-inline">
                            <h6 className="font-weight-light mr-4">Color</h6>
                            <Button
                              className="btn-color btn-sm"
                              style={{ background: "#448A8D" }}
                            ></Button>
                            <Button
                              className="btn-color btn-sm"
                              style={{ background: "#565055" }}
                            ></Button>
                            <Button
                              className="btn-color btn-sm"
                              style={{ background: "#A8405E" }}
                            ></Button>
                          </div>
                          <div className="form-inline mt-3">
                            <h6 className="font-weight-light mr-4">QTY.</h6>
                            <Button className="btn-qty btn-dark btn-sm ml-2">
                              -
                            </Button>
                            <input
                              type="number"
                              className="input-qty form-control input-sm mx-2"
                              value="0"
                              onChange={() => null}
                            />
                            <Button className="btn-qty btn-dark btn-sm">
                              +
                            </Button>
                          </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                          <span className="text-right h4 mt-3">
                            Total
                            <br />
                            <b>$209.00 USD</b>
                          </span>
                        </div>
                      </div>
                      <div className="col-12 d-flex justify-content-center mt-5">
                        <Button
                          type="link"
                          href="/cart"
                          className="btn-primary font-weight-bold"
                        >
                          Checkout Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

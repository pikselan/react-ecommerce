import React, { useContext } from "react";
import Fade from "react-reveal/Fade";

import { store } from "../store";

import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Item() {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const state = globalState.state;

  const downCart = () => {
    dispatch({ type: "downCart" });
  };

  const upCart = () => {
    dispatch({ type: "upCart" });
  };

  const chooseColor = (color) => {
    dispatch({
      type: "chooseColor",
      payload: {
        color: color,
      },
    });
  };

  return (
    <div className="container-fluid p-0">
      <Header />
      <div className="hero container-fluid p-0">
        <Fade bottom delay={200}>
          <h2 className="slogan text-center my-5">Made For Life</h2>
        </Fade>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div>
                <Fade bottom delay={400}>
                  <h1 className="font-weight-bold">Your Item</h1>
                  <div className="container mt-4">
                    <div className="row">
                      <div className="col-md-4">
                        <img
                          src={`/assets/images/item-${state.color}.jpg`}
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
                                onClick={() => chooseColor("green")}
                              ></Button>
                              <Button
                                className="btn-color btn-sm"
                                style={{ background: "#565055" }}
                                onClick={() => chooseColor("black")}
                              ></Button>
                              <Button
                                className="btn-color btn-sm"
                                style={{ background: "#A8405E" }}
                                onClick={() => chooseColor("red")}
                              ></Button>
                            </div>
                            <div className="form-inline mt-3">
                              <h6 className="font-weight-light mr-4">QTY.</h6>
                              <Button
                                className="btn-qty btn-dark btn-sm ml-2"
                                onClick={downCart}
                              >
                                -
                              </Button>
                              <input
                                type="number"
                                className="input-qty form-control input-sm mx-2"
                                value={state.cart}
                                onChange={() => null}
                              />
                              <Button
                                className="btn-qty btn-dark btn-sm"
                                onClick={upCart}
                              >
                                +
                              </Button>
                            </div>
                          </div>
                          <div className="col-md-6 d-flex justify-content-end">
                            <span className="text-right h4 mt-3">
                              Total
                              <br />
                              <b>${state.priceItem * state.cart}.00 USD</b>
                            </span>
                          </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5">
                          <Button
                            type="link"
                            href="/cart"
                            className={`btn-primary font-weight-bold ${
                              state.cart !== 0 && state.color !== ""
                                ? " "
                                : " disabled"
                            }`}
                          >
                            Checkout Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

import React from "react";
import Fade from "react-reveal/Fade";

import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Paypal from "../assets/images/paypal.png";

export default function Cart(props) {
  const item = props.item;
  if (item === 0) {
    return (
      <div className="container-fluid p-0">
        <Header />
        <div className="hero container-fluid p-0">
          <Fade bottom delay={200}>
            <h2 className="slogan text-center my-5">Made For Life</h2>
            <div className="container text-center">
              <h1>Please add item before checkout</h1>
              <Button type="link" href="/item" className="btn-primary mt-3">
                To Item
              </Button>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
  return (
    <div className="container-fluid p-0">
      <Header />
      <div className="hero container-fluid p-0">
        <Fade bottom delay={200}>
          <h2 className="slogan text-center my-5">Made For Life</h2>
        </Fade>
        <div className="container">
          <div className="row">
            <Fade bottom delay={400}>
              <div className="form-checkout order-md-1 col-md-8">
                <h2 className="mt-3 h4 font-weight-bold">
                  Contact Information
                </h2>
                <div className="row">
                  <div className="col-12">
                    <div className="full-input">
                      <label>Email</label>
                      <input type="text" name="email" required />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="full-input">
                      <label>First Name</label>
                      <input type="text" name="firstName" required />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="full-input">
                      <label>Last Name</label>
                      <input type="text" name="lastName" required />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="full-input">
                      <label>Address</label>
                      <input type="text" name="address" required />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="full-input">
                      <label>City</label>
                      <input type="text" name="city" required />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="full-input">
                      <label>Province</label>
                      <input type="text" name="province" required />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="full-input">
                      <label>Postal Code</label>
                      <input type="text" name="postalCode" required />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="full-input">
                      <label>Country/Region</label>
                      <input type="text" name="country" required />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="full-input">
                      <label>Phone</label>
                      <input type="text" name="phone" required />
                    </div>
                  </div>
                </div>

                <h2 className="mt-3 h4 font-weight-bold">Shipping Method</h2>
                <div className="row">
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="shippingMethod"
                        id="dhlExpress"
                        value="DHL Express"
                      />
                      <label className="form-check-label" htmlFor="dhlExpress">
                        DHL Express ($19.95)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade bottom delay={400}>
              <div className="order-md-2 col-md-4 mt-5">
                <div className=" bg-gray-200 p-3 mb-5">
                  <div className="row">
                    <div className="col-3">
                      <img
                        src="/assets/images/item-black.jpg"
                        alt=""
                        width="100%"
                      />
                    </div>
                    <div className="col-9">
                      <span>
                        <h5>Montage Bag</h5>
                        <span className="font-weight-ligth">
                          QTY: 1 <br />
                          PriceL $209.00 USD
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="row border-top border-bottom border-white py-3 my-3">
                    <div className="col-6">
                      <span className="font-weight-ligth">
                        Subtotal <br />
                        Shipping
                      </span>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                      <span className="font-weight-ligth text-right">
                        $209.00
                        <br />
                        $19.95
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                      <span className="text-right h4 mt-3">
                        Total
                        <br />
                        <b>$228.95 USD</b>
                      </span>
                    </div>
                  </div>
                </div>

                <h2 className="mt-3 h4 font-weight-bold">Payment</h2>
                <p>
                  Express checkout
                  <Button className="btn-outline-info ml-3" isDisabled>
                    <img src={Paypal} alt="" />
                  </Button>
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

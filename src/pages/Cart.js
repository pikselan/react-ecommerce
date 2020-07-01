import React, { useContext, useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { useHistory } from "react-router-dom";
import { PayPalButton } from "react-paypal-button-v2";
import { toast } from "react-toastify";

import { store } from "../store";

import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Cart() {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const state = globalState.state;

  const shippingMethod = (item) => {
    setShipping(item);
  };

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [shipping, setShipping] = useState(0);

  const [totalAmount, setTotalAmount] = useState(0);
  const fillForm =
    email &&
    firstName &&
    lastName &&
    address &&
    city &&
    province &&
    postalCode &&
    country &&
    phone &&
    shipping !== 0;

  const history = useHistory();

  const paymentHandler = (details, data) => {
    console.log(details, data);
    dispatch({
      type: "reset",
    });
    toast.dark("Successful payment!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    history.push("/");
  };

  useEffect(() => {
    setTotalAmount(state.priceItem * state.cart + shipping);
  }, [state.priceItem, state.cart, shipping]);

  if (state.cart === 0 || state.color === "") {
    return (
      <div className="container-fluid p-0" style={{ height: "80vh" }}>
        <Header />
        <div className="hero container-fluid p-0">
          <Fade bottom delay={200}>
            <h2 className="slogan text-center my-5">Made For Life</h2>
            <div className="container text-center">
              <h1>Please add item before checkout</h1>
              <Button type="link" href="/item" className="btn-primary mt-3">
                Add Item
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
                <Button type="link" className="btn-primary" href="/item">
                  Back
                </Button>
                <h2 className="mt-3 h4 font-weight-bold">
                  Contact Information
                </h2>
                <div className="row">
                  <div className="col-12">
                    <div className="full-input">
                      <label>Email</label>
                      <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="full-input">
                      <label>First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="full-input">
                      <label>Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="full-input">
                      <label>Address</label>
                      <input
                        type="text"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="full-input">
                      <label>City</label>
                      <input
                        type="text"
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="full-input">
                      <label>Province</label>
                      <input
                        type="text"
                        name="province"
                        value={province}
                        onChange={(e) => setProvince(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="full-input">
                      <label>Postal Code</label>
                      <input
                        type="text"
                        name="postalCode"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="full-input">
                      <label>Country/Region</label>
                      <input
                        type="text"
                        name="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="full-input">
                      <label>Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
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
                        onClick={() => shippingMethod(19.95)}
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
                        src={`/assets/images/item-${state.color}.jpg`}
                        alt=""
                        width="100%"
                      />
                    </div>
                    <div className="col-9">
                      <span>
                        <h5>{`Montage Bag (${state.color})`}</h5>
                        <span className="font-weight-ligth">
                          QTY: {state.cart} <br />
                          Price: ${state.priceItem}.00 USD /item
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
                        ${state.priceItem * state.cart}.00
                        <br />${shipping}
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                      <span className="text-right h4 mt-3">
                        Total
                        <br />
                        <b>${totalAmount} USD</b>
                      </span>
                    </div>
                  </div>
                </div>
                <h2 className="mt-3 h4 font-weight-bold">Payment</h2>
                Express checkout
                <div className={`${fillForm ? " " : " d-none"}`}>
                  <PayPalButton
                    amount={totalAmount}
                    currency={"USD"}
                    onSuccess={paymentHandler}
                    options={{
                      clientId:
                        "AY7PkZPK6i075bjGoIJvTgn_dHaWJsgAOb6-NWp_4IoH32zWbfRqskoZnegyFuOeKJnE3PTTEXnTjiYt",
                    }}
                  />
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

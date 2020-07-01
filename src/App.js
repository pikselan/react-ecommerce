import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { store } from "./store";

import Landing from "./pages/Landing";
import About from "./pages/About";
import Item from "./pages/Item";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

import "bootstrap/js/src/index";
import "./styles.scss";

function App() {
  const globalState = useContext(store);
  const state = globalState.state;

  useEffect(() => {
    localStorage.setItem("itemCart", JSON.stringify(state.cart));
    localStorage.setItem("itemColor", JSON.stringify(state.color));
  }, [state.cart, state.color]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/item" component={Item} />
        <Route path="/cart" component={Cart} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;

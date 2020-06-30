import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import About from "./pages/About";
import Item from "./pages/Item";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

import "./assets/js/index";
import "./styles.scss";

function App() {
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

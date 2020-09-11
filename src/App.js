import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Order from "./Order";
import Orders from "./Orders";
const promise = loadStripe("pk_test_51HQ2rXKgCe55mKhh9Frjyrtu6AtMIZzNYYW79KWyUQ4teQmcEX0GBvyn9GyfIP8sQk4vEG4jVpH2nQpGivQrBA7b007YYi6ZEL");



function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will run only once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // if user is logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <ReactNotification />
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>

          </Route>

          <Route path="/login">
            <Login />
          </Route>
          
          {/* Default root */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>

        {/* We need react-router */}
      </div>
    </Router>
  );
}

export default App;

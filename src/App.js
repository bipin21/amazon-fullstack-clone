import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function App() {

  useEffect(() => {
    // will run only once when the app component loads
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // if user is logged in

      }
      else {
        // user is logged out
      }
    })
  }, []);

  return (
    <div className="App">

      <Router>
        <div className="app">
          <Switch>
            <Route path="/checkout">
              <Header />
              <Checkout />
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
    </div>
  );
}

export default App;

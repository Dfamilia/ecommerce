/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage";
import ShopPage from "./pages/shop";
import Header from "./components/header";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage";

import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;

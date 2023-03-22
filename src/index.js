import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import store from "./store";
import Routes from "./component/Routes";
import "./App.css";

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);

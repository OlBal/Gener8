import React from "react";
import ReactDOM from "react-dom";
import store from "./data/store";
import App from "../src/components/App";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

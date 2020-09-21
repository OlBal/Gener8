import React from "react";
import ReactDOM from "react-dom";
import App from "../src/components/App";
import { Provider } from "react-redux";
import store from "./data/store";
import initial from "./data/initial";
import reducers from "./data/reducer";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

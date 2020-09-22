import React from "react";
import ReactDOM from "react-dom";
import App from "../src/components/App";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initial = {
  playerName: "",
  players: [1, 2, 3, 4, 5],
  pairs: [1, 2, 3, 4, 5],
};

export const reset = () => {
  return {
    type: "RESET",
  };
};
export const reducer = (state = initial, action) => {
  switch (action.type) {
    case "RESET":
      return initial;
    default:
      return state;
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  console.log(initial),
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

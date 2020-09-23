import React from "react";
import Settings from "../Settings";
import Tournament from "../Tournament";
// import "../App.scss";
const App = ({ round }) => <>{round !== 0 ? <Settings /> : <Tournament />}</>;
export default App;

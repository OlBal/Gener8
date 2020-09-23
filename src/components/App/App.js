import React from "react";
import Settings from "../Settings";
import Tournament from "../Tournament";
import FourOhFour from "../FourOhFour/FourOhFour";
// import "../App.scss";
const App = ({ round, started }) => (
  <>
    {round === 0 ? (
      <Settings />
    ) : round === 1 || round === 2 || round === 3 || round === 4 ? (
      <Tournament />
    ) : (
      <FourOhFour />
    )}
    ;
  </>
);
export default App;

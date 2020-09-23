import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = ({ round, started }) => ({ round, started });

export default connect(mapStateToProps)(App);

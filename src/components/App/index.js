import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = (state) => ({
  view: state.view,
});

export default connect(mapStateToProps)(App);

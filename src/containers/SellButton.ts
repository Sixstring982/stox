import * as Action from "../actions";
import { connect } from "react-redux";
import Button from "../components/Button.tsx";

const mapStateToProps = state => ({
  text: "-1 Share",
  color: "red",
  enabled: state.stox.getCurrentShareCount() > 0,
});

const mapDispatchToProps = dispatch => ({
  onclick: () => {
    dispatch(Action.sellCurrentShare());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
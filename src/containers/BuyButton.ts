import * as Action from "../actions";
import { connect } from "react-redux";
import Button from "../components/Button.tsx";

const mapStateToProps = state => ({
  text: "Buy",
  color: "green",
  enabled: state.stox.money >= state.stox.getCurrentValue(),
});

const mapDispatchToProps = dispatch => ({
  onclick: () => {
    dispatch(Action.buyCurrentShare());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
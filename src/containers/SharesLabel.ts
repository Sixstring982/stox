import { connect } from "react-redux";
import Label from "../components/Label.tsx";

const mapStateToProps = state => ({
  text: `${
    state.stox.getCurrentShareCount()
  } share${
    state.stox.getCurrentShareCount() == 1 ? "" : "s"
  } ${state.stox.getCurrentShareCount() === 0 ? "" :
  `(Bought at $${
    state.stox.getCurrentBuyAverage().toFixed(2)
  })`}`,
  heading_size: 0
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Label);
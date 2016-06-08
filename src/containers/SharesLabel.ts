import { connect } from "react-redux";
import Label from "../components/Label.tsx";

const mapStateToProps = state => ({
  text: `${state.stox.getCurrentShareCount()} share${state.stox.getCurrentShareCount() == 1 ? "" : "s"}`,
  heading_size: 0
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Label);
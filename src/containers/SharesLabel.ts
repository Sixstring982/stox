import { connect } from "react-redux";
import Label from "../components/Label.tsx";

const mapStateToProps = state => ({
  text: `${state.stox.getCurrentShareCount()} shares`,
  heading_size: 0
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Label);
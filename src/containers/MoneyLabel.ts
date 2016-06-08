import { connect } from "react-redux";
import Label from "../components/Label.tsx";

const mapStateToProps = state => ({
  text: `$${state.stox.money.toFixed(2)}`,
  heading_size: 4,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Label);
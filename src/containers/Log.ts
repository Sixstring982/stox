import { connect } from "react-redux";
import LogCard from "../components/LogCard.tsx";

const mapStateToProps = (state) => ({
  color: "grey",
  content: state.stox.log,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogCard);
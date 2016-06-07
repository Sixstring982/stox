import { connect } from "react-redux";
import LogCard from "../components/LogCard.tsx";

const mapStateToProps = (state) => ({
  color: "grey",
  content: ["This is the first log line.", "This is the second.", "Third!"]
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogCard);
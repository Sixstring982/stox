import * as Action from "../actions";
import { connect } from "react-redux";
import Button from "../components/Button.tsx";

const mapStateToProps = state => ({
    text: "Advance",
    color: "teal"
});

const mapDispatchToProps = dispatch => ({
    onclick: () => {
        dispatch(Action.advance());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Button);
import { connect } from "react-redux";
import StockView from "../components/StockView.tsx";

const mapStateToProps = state => ({
    id: 0,
    color: "white",
    textColor: "black",
    chartTitle: "Stock View",
    values: state.stox.getCurrentValues(),
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StockView);
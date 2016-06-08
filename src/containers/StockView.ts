import { connect } from "react-redux";
import StockView from "../components/StockView.tsx";

const mapStateToProps = state => ({
    id: 0,
    chartTitle: state.stox.getCurrentSymbol(),
    values: state.stox.getCurrentValues(),
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StockView);
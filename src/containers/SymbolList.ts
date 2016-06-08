import * as Action from "../actions";
import { connect } from "react-redux";
import ClickList from "../components/ClickList.tsx";

const mapStateToProps = state => {
    const symbols = state.stox.getSymbolsAndValues();
    const buttons = [];

    for (let i = 0; i < symbols.length; i++) {
        buttons.push({
            title: `${symbols[i][0]}: $${symbols[i][1].toFixed(2)}`,
            active: (i === state.stox.selected_stock),
        });
    }

    return { buttons };
};

const mapDispatchToProps = dispatch => ({
    onClick: (idx: number) => () => dispatch(Action.setSelectedStock(idx)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ClickList);
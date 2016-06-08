import * as Action from "../actions";
import { connect } from "react-redux";
import ClickList from "../components/ClickList.tsx";

const mapStateToProps = state => {
    const symbols = state.stox.getStockInfos();
    const buttons = [];

    for (let i = 0; i < symbols.length; i++) {
        buttons.push({
            icon: symbols[i].delta >= 0 ? "trending_up" : "trending_down",
            title: `${symbols[i].symbol}: $${symbols[i].current_value.toFixed(2)}`,
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
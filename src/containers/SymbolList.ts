import * as Action from "../actions";
import { connect } from "react-redux";
import ClickList from "../components/ClickList.tsx";

const mapStateToProps = state => {
    const symbols = state.stox.getStockInfos();
    const buttons = [];

    for (let i = 0; i < symbols.length; i++) {
        const active = (i === state.stox.selected_stock);

        const trend_color = (symbols[i].delta >= 0 ? "green" : "red");
        let icon_color;
        let line_two_color;
        if (active) {
            icon_color = `lighten-1 ${trend_color}`;
            line_two_color = `text-lighten-3 ${trend_color}`;
        } else {
            icon_color = line_two_color = trend_color;
        }

        buttons.push({
            icon: symbols[i].delta >= 0 ? "trending_up" : "trending_down",
            icon_color,
            title: `${symbols[i].symbol}: $${symbols[i].current_value.toFixed(2)}`,
            active,
            line_two: `${symbols[i].delta >= 0 ? "+" : ""}${symbols[i].delta.toFixed(2)} (${symbols[i].delta_percent.toFixed(2)}%)`,
            line_two_color,
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
import * as React from "react";
import * as HighCharts from "highcharts";

interface StockViewPropTypes {
    id: number,
    color: string,
    textColor: string,
    chartTitle: string,
    values: Array<number>,
}

export default class StockView extends React.Component<StockViewPropTypes, any> {
    componentDidMount() {
        this.renderChart();
    }

    componentDidUpdate() {
        this.renderChart();
    }

    render() {
        let titleElement = null;
        if (this.props.chartTitle !== null && this.props.chartTitle !== undefined) {
            titleElement = <span className="card-title">{this.props.chartTitle}</span>
        }

        return (
            <div className={`card ${this.props.color}`}>
              <div className={`card-content ${this.props.textColor}-text`}>
                {titleElement}
                <div id={`chart-${this.props.id}`}></div>
              </div>
            </div>
        );
    }

    private renderChart() {
        const props = this.props;
        const chartOptions = {
            chart: {
                renderTo: `chart-${props.id}`,
            },
            series: [{
                data: props.values
            },],
        };  
        HighCharts.chart(chartOptions);
    }
}
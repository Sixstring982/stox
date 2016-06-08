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
        return (
            <div className={`card ${this.props.color}`}>
              <div className={`card-content ${this.props.textColor}-text`}>
                <div id={`chart-${this.props.id}`}></div>
              </div>
            </div>
        );
    }

    private renderChart() {
        const chartOptions = {
            chart: {
                type: 'areaspline',
                renderTo: `chart-${this.props.id}`,
            },
            title: {
                text: this.props.chartTitle
            },
            yAxis: {
                title: {
                    text: 'Price ($)'
                },
            },
            series: [{
                name: this.props.chartTitle,
                data: this.props.values
            },],
        };
        HighCharts.chart(chartOptions);
    }
}
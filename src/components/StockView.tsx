import * as React from "react";
import * as HighCharts from "highcharts";

interface StockViewPropTypes {
    id: number,
    chartTitle: string,
    values: Array<number>,
    buy_average: number,
}

export default class StockView extends React.Component<StockViewPropTypes, any> {
    componentDidMount() {
        this.renderChart();
    }

    componentDidUpdate() {
        this.renderChart();
    }

    render() {
        return <div id={`chart-${this.props.id}`}></div>;
    }

    private generatePlotLines(): Array<Object> {
        if (this.props.buy_average === null) {
            return [];
        }

        const last_value = this.props.values[this.props.values.length - 1];

        let average_line_color: string;
        if (last_value === this.props.buy_average) {
            average_line_color = 'gray';
        } else if (last_value > this.props.buy_average) {
            average_line_color = 'green';
        } else {
            average_line_color = 'red';
        }

        return [{
            color: average_line_color,
            dashStyle: 'longdash',
            value: this.props.buy_average,
            width: 2,
        }];
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
                plotLines: this.generatePlotLines(),
            },
            series: [{
                name: this.props.chartTitle,
                data: this.props.values
            },],
        };
        HighCharts.chart(chartOptions);
    }
}
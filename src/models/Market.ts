import Stock from "./Stock.ts";

export default class Market {
    private _stocks: Array<Stock>;

    constructor(stocks: Array<Stock>) {
        if (stocks === null || stocks === undefined) {
            this._stocks = this.generateInitialStocks();
        } else {
            this._stocks = stocks;
        }
    }

    getValues(stock_idx: number): Array<number> {
        const values = [];
        const stock = this._stocks[stock_idx];

        for (let i = 0; i < stock.value_count; i++) {
            values.push(stock.getValue(i));
        }

        return values;
    }

    getSymbols(): Array<string> {
        const symbols = [];

        for (let i = 0; i < this._stocks.length; i++) {
            symbols.push(this._stocks[i].symbol);
        }

        return symbols;
    }

    advance(): Market {
        let new_stocks = [];
        for (let i = 0; i < this._stocks.length; i++) {
            new_stocks.push(this._stocks[i].advance());
        }

        return new Market(new_stocks);
    }

    private generateInitialStocks(): Array<Stock> {
        const stocks = [];

        stocks.push(new Stock("BIG", 200.0, null),
                    new Stock("BMI", 64.0,  null),
                    new Stock("FOO", 28.0,  null));

        return stocks;
    }
}
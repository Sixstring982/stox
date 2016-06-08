const INITIAL_VALUE_COUNT: number = 10;
const VOLATILITY: number = 0.4;

export default class Stock {
    private _symbol: string;
    private _average: number;
    private _values: Array<number>;
    private _rumor: number;

    constructor(symbol: string, average: number, values: Array<number>) {
        this._symbol = symbol;
        this._average = average;
        if (values === undefined || values === null) {
            this._values = this.createInitialValues();
        } else {
            this._values = values;
        }
    }

    get symbol(): string {
        return this._symbol;
    }

    get value_count(): number {
        return this._values.length;
    }

    getValue(idx: number): number {
        return this._values[idx];
    }

    advance(): Stock {
        const new_values = [];
        for (let i = 0; i < this._values.length; i++) {
            new_values.push(this._values[i]);
        }

        new_values.push(this.nextValue(new_values));

        return new Stock(this._symbol, this._average, new_values);
    }

    private createInitialValues(): Array<number> {
        const values = [];

        for (let i = 0; i < INITIAL_VALUE_COUNT; i++) {
            values.push(this.nextValue(values));
        }

        return values;
    }

    private nextValue(values: Array<number>): number {
        let old_price = this._average;
        if (values.length > 0) {
            old_price = values[values.length - 1];
        }

        const rnd = Math.random();
        let change_percent = 2.0 * VOLATILITY * rnd;
        if (change_percent > VOLATILITY) {
            change_percent -= (2.0 * VOLATILITY); 
        }
        const change_amount = old_price * change_percent;

        /* Truncate to two decimal points */
        let new_value = old_price + change_amount;
        new_value *= 100.0;
        new_value = Math.round(new_value);
        new_value /= 100.0;

        return new_value; 
    }
}
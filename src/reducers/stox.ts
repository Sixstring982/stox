import * as Action from "../actions";
import Market, { StockInfo } from "../models/Market.ts";
import BuyAverage from "../models/BuyAverage.ts";

export class State {
  private _market: Market;
  private _selected_stock: number;
  private _money: number;
  private _shares: Array<BuyAverage>;
  private _log: Array<string>;

  constructor(market: Market, selected_stock: number,
              money: number, shares: Array<BuyAverage>, log: Array<string>) {
    this._market = market;
    this._selected_stock = selected_stock;
    this._money = money;
    if (shares === null) {
      this._shares = [];
      for (let i = 0; i < this._market.size; i++) {
        this._shares.push(new BuyAverage(0, 0));
      }
    } else {
      this._shares = shares;
    }
    this._log = log;
  }

  get selected_stock(): number {
    return this._selected_stock;
  }

  get money(): number {
    return this._money;
  }

  get log(): Array<string> {
    const log = [];
    for (let i = 0; i < this._log.length; i++) {
      log.push(this._log[i]);
    }
    return log;
  }

  getCurrentShareCount(): number {
    return this.getShareCount(this.selected_stock);
  }

  getCurrentBuyAverage(): number {
    return this._shares[this._selected_stock].average;
  }

  getShareCount(stock_idx: number): number {
    return this._shares[stock_idx].size;
  }

  getCurrentSymbol(): string {
    return this._market.getStock(this._selected_stock).symbol;
  }

  getSymbols(): Array<string> {
    return this._market.getSymbols();
  }

  getStockInfos(): Array<StockInfo> {
    return this._market.getStockInfos();
  }

  getSymbolsAndValues(): Array<[string, number]> {
    return this._market.getSymbolsAndValues();
  }

  getCurrentValues(): Array<number> {
    return this._market.getValues(this._selected_stock);
  }

  getCurrentValue(): number {
    const values = this.getCurrentValues();
    return values[values.length - 1];
  }

  advance(): State {
    return new State(this._market.advance(), this._selected_stock,
                     this._money, this._shares, this._log);
  }

  setSelectedStock(selected_stock: number): State {
    return new State(this._market, selected_stock,
                     this._money, this._shares, this._log);
  }

  buyCurrentShare(): State {
    if (this._money >= this.getCurrentValue()) {
      let new_shares = [];
      for (let i = 0; i < this._shares.length; i++) {
        if (i === this._selected_stock) {
          new_shares.push(this._shares[i].add(this.getCurrentValue()));
        } else {
          new_shares.push(this._shares[i].clone());
        }
      }
      return new State(this._market, this._selected_stock,
                       this._money - this.getCurrentValue(), new_shares,
                       [`Bought one share of ${this.getCurrentSymbol()}.`]);
    }
    return new State(this._market, this._selected_stock,
                     this._money, this._shares,
                     [`Cannot afford one share of ${this.getCurrentSymbol()}.`]);
  }

  sellCurrentShare(): State {
    if (this.getCurrentShareCount() > 0) {
      let new_shares = [];
      for (let i = 0; i < this._shares.length; i++) {
        if (i === this._selected_stock) {
          new_shares.push(this._shares[i].remove(this.getCurrentValue()));
        } else {
          new_shares.push(this._shares[i].clone());
        }
      }
      return new State(this._market, this._selected_stock,
                       this._money + this.getCurrentValue(), new_shares,
                       [`Sold one share of ${this.getCurrentSymbol()}.`]);
    }
    return new State(this._market, this._selected_stock,
                     this._money, this._shares,
                     [`Cannot sell ${this.getCurrentSymbol()}: not enough shares.`]);
  }
}

const INITIAL_STATE = new State(new Market(null), 0, 50.0, null, []);

export default (state: State = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case Action.ADVANCE: {
      return state.advance();
    }
    case Action.SET_SELECTED_STOCK: {
      return state.setSelectedStock(action.selected_stock);
    }
    case Action.BUY_CURRENT_SHARE: {
      return state.buyCurrentShare();
    }
    case Action.SELL_CURRENT_SHARE: {
      return state.sellCurrentShare();
    }
    default: {
      return state;
    }
  }
};
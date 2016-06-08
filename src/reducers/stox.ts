import * as Action from "../actions";
import Market, { StockInfo } from "../models/Market.ts";

export class State {
  private _market: Market;
  private _selected_stock: number;

  constructor(market: Market, selected_stock: number) {
    this._market = market;
    this._selected_stock = selected_stock;
  }

  get selected_stock(): number {
    return this._selected_stock;
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

  advance(): State {
    return new State(this._market.advance(), this._selected_stock);
  }

  setSelectedStock(selected_stock: number): State {
    return new State(this._market, selected_stock);
  }
}

const INITIAL_STATE = new State(new Market(null), 0);

export default (state: State = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case Action.ADVANCE: {
      return state.advance();
    }
    case Action.SET_SELECTED_STOCK: {
      return state.setSelectedStock(action.selected_stock);
    }
    default: {
      return state;
    }
  }
};
import * as Action from "../actions";
import Market from "../models/Market.ts";

class State {
  private _market: Market;
  private _selectedStock: number;

  constructor(market: Market, selectedStock: number) {
    this._market = market;
    this._selectedStock = selectedStock;
  }

  getCurrentValues(): Array<number> {
    return this._market.getValues(this._selectedStock);
  }

  advance(): State {
    return new State(this._market.advance(), this._selectedStock); 
  }
}

const INITIAL_STATE = new State(new Market(null), 0);

export default (state: State = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case Action.ADVANCE: {
      return state.advance();
    }
    default: {
      return state;
    }
  }
};
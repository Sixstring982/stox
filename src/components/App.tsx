import * as React from "react";
import Log from "../containers/Log.ts";
import StockView from "../containers/StockView.ts";
import AdvanceButton from "../containers/AdvanceButton.ts";

interface AppPropTypes {

}

export default class App extends React.Component<AppPropTypes, any> {
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col s4">
            <div className="card white">
              <div className="card-content grey-text">
                <span className="card-title">
                  I'm a card!
                </span>
                <AdvanceButton />
              </div>
            </div>
          </div>
          <div className="col s8">
            <StockView />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <Log />
          </div>
        </div>
      </div>
    );
  }
}
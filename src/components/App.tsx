import * as React from "react";
import Log from "../containers/Log.ts";
import StockView from "../containers/StockView.ts";
import SymbolList from "../containers/SymbolList.ts";
import AdvanceButton from "../containers/AdvanceButton.ts";
import MoneyLabel from "../containers/MoneyLabel.ts";
import SharesLabel from "../containers/SharesLabel.ts";

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
                <AdvanceButton />
                <SymbolList />
              </div>
            </div>
          </div>
          <div className="col s8">
            <div className="card white">
              <div className="card-content black-text">
                <div className="row">
                  <div clasName="col s12">
                    <StockView />
                  </div>
                </div>
                <div className="row">
                  <div className="col s3">
                    <MoneyLabel />
                  </div>
                </div>
                <div className="row">
                  <div className="col s3">
                    <SharesLabel />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <Log />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <a href="https://github.com/Sixstring982/stox">
              <i className="material-icons">code</i>
            </a>
            View on GitHub
          </div>
        </div>
      </div>
    );
  }
}
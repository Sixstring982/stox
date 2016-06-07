import * as React from "react";
import Log from "../containers/Log.ts";

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
              </div>
            </div>
          </div>
          <div className="col s8">
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
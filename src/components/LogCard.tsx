import * as React from "react";

interface LogCardPropTypes {
  color: string,
  content: Array<string>
}

export default class LogCard extends React.Component<LogCardPropTypes, any> {
  render() {
    return (
      <div className={`card ${this.props.color}`} >
        <div className="card-content">
          {this.props.content.map((c, i) => {
            return <p key={i}>{c}</p>;
          })}
        </div>
      </div>
    )
  }
}
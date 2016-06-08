import * as React from "react";

interface LabelPropTypes {
  text: string;
  heading_size: number;
}

export default class Label extends React.Component<LabelPropTypes, any> {
  render() {
    let tag;
    switch (this.props.heading_size) {
      case 1: tag = <h1>{this.props.text}</h1>; break;
      case 2: tag = <h2>{this.props.text}</h2>; break;
      case 3: tag = <h3>{this.props.text}</h3>; break;
      case 4: tag = <h4>{this.props.text}</h4>; break;
      case 5: tag = <h5>{this.props.text}</h5>; break;
      case 6: tag = <h6>{this.props.text}</h6>; break;
      default: tag = <p>{this.props.text}</p>;
    }
    return tag;
  }
}
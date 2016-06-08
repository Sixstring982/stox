import * as React from "react";

interface ButtonPropTypes {
    onclick: () => void,
    text: string,
    color: string,
}

export default class Button extends React.Component<ButtonPropTypes, any> {
    render() {
        return (
            <a className={`waves-effect waves-light btn ${this.props.color}`} 
               onClick={this.props.onclick}>
               {this.props.text}
            </a>
        );
    }
}
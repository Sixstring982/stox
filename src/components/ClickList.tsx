import * as React from "react";

interface ListButton {
    title: string,
    active: boolean,
}

interface ClickListPropTypes {
    buttons: Array<ListButton>,
    onClick: (number) => () => void,
}

export default class ClickList extends React.Component<ClickListPropTypes, any> {
    render() {
        return (
           <div className="collection">
             {this.props.buttons.map((b, i) => 
                 <a key={i} 
                    onClick={this.props.onClick(i)}
                    className={`collection-item${b.active ? " active" : ""}`}>
                    {b.title}
                 </a>
             )}
           </div> 
        );
    }
}
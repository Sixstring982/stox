import * as React from "react";

interface ListButton {
    icon: string,
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
           <ul className="collection">
             {this.props.buttons.map((b, i) =>
                 <li className={`collection-item avatar${b.active ? " active" : ""}`}
                     key={i}
                     onClick={this.props.onClick(i)}>
                   <i className="material-icons circle">{b.icon}</i>
                   <span class="title">{b.title}</span>
                 </li>
             )}
           </ul>
        );
    }
}
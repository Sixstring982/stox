import * as React from "react";

interface ListButton {
    icon: string,
    icon_color: string,
    title: string,
    line_two: string,
    line_two_color: string,
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
                 <li className={`collection-item avatar ${b.active ? " active" : ""}`}
                     key={i}
                     onClick={this.props.onClick(i)}>
                   <i className={`material-icons circle ${b.icon_color}`}>{b.icon}</i>
                   <span className="title">{b.title}</span>
                   <br />
                   <span className={`${b.line_two_color}-text`}>{b.line_two}</span>
                 </li>
             )}
           </ul>
        );
    }
}
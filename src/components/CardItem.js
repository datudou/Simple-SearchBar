/**
 * Created by qianyiwang on 15/10/19.
 */

import React,{Component} from 'react';
class CardItem extends Component {
    render() {
        console.log(this.props.card);
        let name = this.props.card.ended ?
            this.props.card.name :
            <span style={{color:"red"}}>
                {this.props.card.name}
                </span>;
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.card.price}</td>
            </tr>
        );

    }
}

export default CardItem;

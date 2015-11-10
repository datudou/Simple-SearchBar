/**
 * Created by qianyiwang on 15/10/19.
 */

import React,{Component} from 'react';
class CardItem extends Component {
    render() {
        let name = this.props.card.get('endPrice') ?
            this.props.card.get('cardName') :
            <span style={{color:"red"}}>
                {this.props.card.get('cardName')}
                </span>;
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.card.get('endPrice')}</td>
            </tr>
        );

    }
}

export default CardItem;

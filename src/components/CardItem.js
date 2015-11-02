/**
 * Created by qianyiwang on 15/10/19.
 */

import React,{Component} from 'react';
class CardItem extends Component {
    render() {
        let name = this.props.card.get('ended') ?
            this.props.card.get('name') :
            <span style={{color:"red"}}>
                {this.props.card.get('name')}
                </span>;
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.card.get('price')}</td>
            </tr>
        );

    }
}

export default CardItem;

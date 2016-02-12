/**
 * Created by qianyiwang on 15/10/19.
 */

import React,{Component} from 'react';
class CardItem extends Component {

    renderImage(){
        

    }

    renderMetaData(){

    }

    render() {
        const {filterText,card} = this.props;
        let name = <td>{card.get('cardName')}</td>;
        if (filterText) {
            let pattern = new RegExp(filterText.replace(/\W\s/g, ''), 'i');
            let match = pattern.exec(card.get('cardName'));
            name = match ?
                <td>
                    {card.get('cardName').slice(0, match.index)}
                    <span style={{color:"red"}}>
                        {card.get('cardName').slice(match.index, match.index + filterText.length)}
                    </span>
                    {card.get('cardName').slice(match.index + filterText.length, -1)}
                </td>:
                <td>
                    {card.get('cardName')}
                </td>;
        }
        return (
            <tr>
                {name}
                <td>{card.get('endPrice')}</td>
            </tr>
        );
    }
}

export default CardItem;

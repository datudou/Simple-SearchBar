/**
 * Created by qianyiwang on 15/10/19.
 */

import React,{Component} from 'react';
import CardItem from './CardItem';
import {connect} from 'react-redux';

class CardList extends Component {
    constructor(props) {
        super(props);
    }


    static renderTable(cardItems) {
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{cardItems}</tbody>
            </table>

        )

    }

    render() {
        let cardItems = [];
        if (!this.props.cards)
            return CardList.renderTable(cardItems);
        else
            this.props.cards.forEach(card =>
                cardItems.push(<CardItem card={card} key={card.get('cardName')}/>)
            );
        return CardList.renderTable(cardItems);
    }
}


export default CardList;

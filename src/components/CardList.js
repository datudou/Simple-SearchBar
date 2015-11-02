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

    render() {
        let cardItems = [];
        this.props.cards.forEach(card =>
                cardItems.push(<CardItem card={card} key={card.get('name')}/>)
        );
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
        );
    }
}


export default CardList;

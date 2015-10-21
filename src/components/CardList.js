/**
 * Created by qianyiwang on 15/10/19.
 */

import React,{Component} from 'react';
import CardItem from './CardItem'

class CardList extends Component{
    //constructor(props) {
    //    super(props);
    //}

    render(){
        console.log(this.props.cards);
        let cardItems = [];
        this.props.cards.forEach(function(card){
            cardItems.push(<CardItem card={card} key={card.name}/>);
        }.bind(this));

        return(
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

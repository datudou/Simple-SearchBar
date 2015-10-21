/**
 * Created by qianyiwang on 15/10/19.
 */
import React,{Component} from 'react';
import SearchBar from './SearchBar'
import CardList from './CardList'


class MainSection extends Component {
    constructor(props) {
        super(props);
        this.cards = [
            {category: 'Sporting Goods', price: '$49.99', ended: true, name: 'Kobe'},
            {category: 'Sporting Goods', price: '$9.99', ended: true, name: 'Steven Curry'},
            {category: 'Sporting Goods', price: '$29.99', ended: false, name: 'Kobe'},
            {category: 'Electronics', price: '$99.99', ended: true, name: 'Jordan'},
            {category: 'Electronics', price: '$399.99', ended: false, name: 'Lin'},
            {category: 'Electronics', price: '$199.99', ended: true, name: 'YaoMing'}
        ];

        this.state = {
            filterText: "",
            inEndedOnly: false
        }
    }


    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inEndedOnly={this.state.inEndedOnly}
                    />
                <CardList
                    cards={this.cards}
                    filterText={this.state.filterText}
                    inEndedOnly={this.state.inEndedOnly}
                    />
            </div>
        )
    }
}

export default MainSection;
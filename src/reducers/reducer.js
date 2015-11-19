/**
 * Created by qianyiwang on 15/10/18.
 */
import {filterByStarName} from './../core';
import {Map,List,toMap} from 'immutable';

const initialState = Map({
    cards: List.of()
    //Map({category: 'Sporting Goods', price: '$49.99', ended: true, name: 'aaa'}),
    //Map({category: 'Sporting Goods', price: '$49.99', ended: true, name: 'aaa'}),
    //Map({category: 'Sporting Goods', price: '$29.99', ended: false, name: 'Kobe'}),
    //Map({category: 'Electronics', price: '$99.99', ended: true, name: 'Jordan'}),
    //Map({category: 'Electronics', price: '$399.99', ended: false, name: 'Lin'}),
    //Map({category: 'Electronics', price: '$199.99', ended: true, name: 'YaoMing'})
    //)
});
export default function reducer(state = initialState, action = "") {
    switch (action.type) {
        case "FILTER_BY_STAR_NAME":
            state = Map({
                cards: List(action.allCards.map(x=>Map(x))),
                searchIndex:""
            });
            return filterByStarName(state,action.starName);
        case "SET_STATE":
            return state;
        case "RECEIVE_DATA":
            return Map({
                cards: List(action.results.map(x=>Map(x)))
            });
        default:
            return state;
    }
}



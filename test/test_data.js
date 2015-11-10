/**
 * Created by qianyiwang on 15/10/18.
 */


import {List,Map} from 'immutable';

export const initialState = Map({
    cards: List.of(
        Map({category: 'Sporting Goods', price: '$49.99', ended: true, name: 'Kobe'}),
        Map({category: 'Sporting Goods', price: '$49.99', ended: true, name: 'Steven Curry'}),
        Map({category: 'Sporting Goods', price: '$29.99', ended: false, name: 'Kobe'}),
        Map({category: 'Electronics', price: '$99.99', ended: true, name: 'Jordan'}),
        Map({category: 'Electronics', price: '$399.99', ended: false, name: 'Lin'}),
        Map({category: 'Electronics', price: '$199.99', ended: true, name: 'YaoMing'})
    )
});


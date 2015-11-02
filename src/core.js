import {List,Map} from 'immutable';
import ObjectAssign from 'object-assign'

const initialState = Map({
    cards: List.of(
        Map({category: 'Sporting Goods', price: '$49.99', ended: true, name: 'aaa'}),
        Map({category: 'Sporting Goods', price: '$49.99', ended: true, name: 'aaa'}),
        Map({category: 'Sporting Goods', price: '$29.99', ended: false, name: 'Kobe'}),
        Map({category: 'Electronics', price: '$99.99', ended: true, name: 'Jordan'}),
        Map({category: 'Electronics', price: '$399.99', ended: false, name: 'Lin'}),
        Map({category: 'Electronics', price: '$199.99', ended: true, name: 'YaoMing'})
    )
});

export function setCards(state, cards) {
    return state.set('cards', cards);
}

export function getCards() {
    return state;
}

export function filterByStarName(state , starName="") {
    console.log('---->core.js' + starName);
    return Map({
        cards: initialState.get('cards').filter((card)=>
            card.get('name').match(new RegExp('^' + starName.replace(/\W\s/g, ''), 'i')))})

}

export function filterBySeries(state, seriesName) {
}

export function filterByTeam(state, teamName) {

}

export function filterByDecade(state, decade) {

}


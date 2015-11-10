import {List,Map} from 'immutable';
import ObjectAssign from 'object-assign'

export function setCards(state, cards) {
    return state.set('cards', cards);
}

export function getCards() {
    return state;
}

export function filterByStarName(state , starName="") {
    return Map({
        cards: state.get('cards').filter((card)=>
            card.get('cardName').match(new RegExp('^' + starName.replace(/\W\s/g, ''), 'i')))
    })

}

export function filterBySeries(state, seriesName) {
}

export function filterByTeam(state, teamName) {

}

export function filterByDecade(state, decade) {

}


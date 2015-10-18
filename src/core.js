import {List} from 'immutable';

export function setCards(state, cards) {
    return state.set('cards', cards);
}

export function getCards(){
    return state;
}

export function filterByStarName(state,starName){
    return state.get('cardMetaData').toSeq().filter(x=>x.get('starName')===starName).toList();
}

export function filterBySeries(state,seriesName){
}

export function filterByTeam(state,teamName){

}

export function filterByDecade(state,decade){

}

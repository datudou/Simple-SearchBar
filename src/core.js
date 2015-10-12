
export function setCards(state,cards){
  return state.set('cards',cards);
}

export function bid(state){
    const cards = state.get('cards');
    return cards;
}

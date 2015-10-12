import {expect} from 'chai';

import {List} from 'immutable';


describe('immutability',()=> {
  describe('a number',()=>{
    function increment(currentState){
      return currentState + 1;
    }

    it('is immutable',()=>{
      let state = 42;
      let nextState = increment(state);

      expect(nextState).to.equal(43);
      expect(state).to.equal(42);
    });
  });

  describe('A List',()=>{
    function addCard(currentState,cardName){
      return currentState.push(cardName);
    }

    it('is immutable',()=>{
      let state = List.of('Steven Curry','Kobe');
      let nextState= addCard(state,'Jodan');

      expect(nextState).to.equal(List.of(
        "Steven Curry",
        "Kobe",
        "Jodan"
      ));

      expect(state).to.equal(List.of(
        "Steven Curry",
        "Kobe"
      ));
    });
  });
});


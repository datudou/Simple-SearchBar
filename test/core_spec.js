import {List,Map} from 'immutable';
import {expect} from 'chai';
import {setCards} from '../src/core';

describe('application logic',()=>{
  describe("setCards",()=>{
    it('add cards to the state',()=>{
      const state = Map();
      const cards = List.of('Steven Curry','Kobe');
      const nextState = setEntries(state,cards);
      expect(nextState).to.equal(Map({
        cards: List.of('Steven Curry','Kobe');
      }));
    });
  });
});

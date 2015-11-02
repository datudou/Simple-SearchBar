import {List,Map} from 'immutable';
import {expect} from 'chai';
import {getCards,filterByStarName} from '../src/core';
import {initialState} from './test_data'

describe('application logic', ()=> {
    describe("setCards", ()=> {
        it('add cards to the state', ()=> {
        });
    });

    describe('filter by star name', ()=> {
        "use strict";
        it('search cards by star name', ()=> {
            const nextState = filterByStarName(initialState, "Kobe");
            console.log(nextState);
            console.log("----------------------->");
            expect(nextState).to.equal(
                List.of(Map({
                        category: 'Sporting Goods',
                        price: '$49.99',
                        ended: true,
                        name: 'Kobe'
                    }),
                    Map({
                        category:'Sporting Goods',
                        price: '$29.99',
                        ended: false,
                        name: 'Kobe'
                    })
                ));
        });
    });

    describe('filter by series', ()=> {
        "use strict";
    });

    describe('filter by team', ()=> {
        "use strict";
    });

    describe('filter by decade', ()=> {
        "use strict";
    });

});

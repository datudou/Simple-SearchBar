import {List,Map} from 'immutable';
import {expect} from 'chai';
import {getCards,filterByStarName,kmp} from '../src/core';
import {initialState} from './test_data'

describe('application logic', ()=> {
    describe("setCards", ()=> {
        it('add cards to the state', ()=> {
        });
    });

    describe("test kmp filter", ()=> {
        console.log(kmp("wang lemons","l"));
        console.log(kmp("wang lemons,le","le"));
        console.log(kmp("StevenCurry","Curry"));
        console.log(kmp("StevenCurry","QQ"));
    });

    //describe('filter by star name', ()=> {
    //    "use strict";
    //    it('search cards by star name', ()=> {
    //        const nextState = filterByStarName(initialState, "Kobe");
    //        expect(nextState).to.equal(
    //            Map({
    //                cards: List.of(Map({
    //                        category: 'Sporting Goods',
    //                        price: '$49.99',
    //                        ended: true,
    //                        name: 'Kobe'
    //                    }),
    //                    Map({
    //                        category: 'Sporting Goods',
    //                        price: '$29.99',
    //                        ended: false,
    //                        name: 'Kobe'
    //                    }))
    //            }))

    //});
    //});

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

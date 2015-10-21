import {List,Map} from 'immutable';
import {expect} from 'chai';
import {getCards,filterByStarName} from '../src/core';
import {cardInitData} from './test_data'

describe('application logic', ()=> {
    describe("setCards", ()=> {
        it('add cards to the state', ()=> {
        });
    });

    describe('filter by star name', ()=> {
        "use strict";
        it('search cards by star name', ()=> {
            const nextState = filterByStarName(cardInitData, "Kobe");
            console.log(nextState);
            expect(nextState).to.equal(
                List.of(Map({
                        starName: "Kobe",
                        cardName: "Kobe Sin",
                        endPrice: "700.00",
                        endDate: "2015.10.12",
                        seriesName: "Nori"
                    }),
                    Map({
                        starName: "Kobe",
                        cardName: "Kobe Siaa",
                        endPrice:"222.00",
                        endDate: "2015.10.13",
                        seriesName: "Nori"
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

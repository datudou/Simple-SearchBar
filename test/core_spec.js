import {List,Map} from 'immutable';
import {expect} from 'chai';
import {getCards,filterByStarName} from '../src/core';

describe('application logic', ()=> {
    describe("setCards", ()=> {
        it('add cards to the state', ()=> {
        });
    });

    describe('filter by star name', ()=> {
        "use strict";
        it('search cards by star name', ()=> {
            const state = Map({
                cardMetaData: List.of(
                    Map({
                        starName: "Steven Curry",
                        cardName: "Panini Nori 签字卡 24/35限量",
                        endPrice: "365.00",
                        endDate: "2015.10.7",
                        series: "Nori"
                    }),
                    Map({
                        starName: "Kobe",
                        cardName: "Kobe Sin",
                        endPrice: "700.00",
                        endDate: "2015.10.12",
                        seriesName: "Nori"
                    }),
                    Map({
                        starName: "Kobe",
                        cardName: "Kobe Siaa",
                        endPrice: "222.00",
                        endDate: "2015.10.13",
                        seriesName: "Nori"
                    })
                )
            });


            const nextState = filterByStarName(state, "Kobe");
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

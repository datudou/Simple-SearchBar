/**
 * Created by qianyiwang on 15/10/18.
 */
import {fromJS} from 'immutable';
import reducer from '../src/reducers/reducer';
import {cardInitData} from './test_data';
import {expect} from 'chai';

describe('reducer', ()=> {
    it('handles filter by star name', ()=> {
        const initalState = cardInitData;
        const action = {type: "FILTER_BY_STAR_NAME",starName:"Kobe"};
        const nextState = reducer(cardInitData, action);
        console.log(nextState);
        expect(nextState).to.equal(fromJS(
            [{
                starName: "Kobe",
                cardName: "Kobe Sin",
                endPrice: "700.00",
                endDate: "2015.10.12",
                seriesName: "Nori"
            }, {
                starName: "Kobe",
                cardName: "Kobe Siaa",
                endPrice: "222.00",
                endDate: "2015.10.13",
                seriesName: "Nori"
            }]
        ));
    });

});

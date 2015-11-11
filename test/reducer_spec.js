///**
// * Created by qianyiwang on 15/10/18.
// */
//import {List,Map} from 'immutable';
//import reducer from '../src/reducers/reducer';
//import {initialState} from './test_data';
//import {expect} from 'chai';
//
//describe('reducer', ()=> {
//    it('handles filter by star name', ()=> {
//        const action = {type: "FILTER_BY_STAR_NAME",starName:"Kobe"};
//        const nextState = reducer(action);
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
//    });
//
//});

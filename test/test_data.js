/**
 * Created by qianyiwang on 15/10/18.
 */


import {List,Map} from 'immutable';

export const initialState = Map({
    cards: List.of(
        Map({category: 'Sporting Goods', price: '$49.99', ended: true, name: 'Kobe'}),
        Map({category: 'Sporting Goods', price: '$49.99', ended: true, name: 'Steven Curry'}),
        Map({category: 'Sporting Goods', price: '$29.99', ended: false, name: 'Kobe'}),
        Map({category: 'Electronics', price: '$99.99', ended: true, name: 'Jordan'}),
        Map({category: 'Electronics', price: '$399.99', ended: false, name: 'Lin'}),
        Map({category: 'Electronics', price: '$199.99', ended: true, name: 'YaoMing'})
    )
});

//---丢弃的
//export const cardInitData = Map({
//    cardMetaData: List.of(
//        Map({
//            starName: "Steven Curry",
//            cardName: "Panini Nori 签字卡 24/35限量",
//            endPrice: "365.00",
//            endDate: "2015.10.7",
//            series: "Nori"
//        }),
//        Map({
//            starName: "Kobe",
//            cardName: "Kobe Sin",
//            endPrice: "700.00",
//            endDate: "2015.10.12",
//            seriesName: "Nori"
//        }),
//        Map({
//            starName: "Kobe",
//            cardName: "Kobe Siaa",
//            endPrice: "222.00",
//            endDate: "2015.10.13",
//            seriesName: "Nori"
//        })
//    )
//});
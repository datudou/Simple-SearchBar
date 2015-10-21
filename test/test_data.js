/**
 * Created by qianyiwang on 15/10/18.
 */


import {List,Map} from 'immutable';
export const cardInitData = Map({
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
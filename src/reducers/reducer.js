/**
 * Created by qianyiwang on 15/10/18.
 */
import {filterByStarName} from './../core';
export default function reducer(state,action){
    switch(action.type){
        case "FILTER_BY_STAR_NAME":
            return filterByStarName(state,action.starName);
        default:
            return state;
    }


}



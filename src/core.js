import {List,Map} from 'immutable';
import ObjectAssign from 'object-assign'

export function setCards(state, cards) {
    return state.set('cards', cards);
}

export function getCards() {
    return state;
}

export function filterByStarName(state, starName = "") {
    return Map({
        cards: state.get('cards').filter((card)=>
            card.get('cardName').match(new RegExp(starName.replace(/\W\s/g, ''), 'i')))
    })
}

export function kmp(sourceStr, subStr){
    var partMatch = kmpGetPartMatchLen(subStr);
    var result = false;

    for(var i = 0; i < sourceStr.length; i++){
        for(var j = 0; j < subStr.length; j++){
            if(subStr.charAt(j) === sourceStr.charAt(i + j)){
                if(j === subStr.length - 1){
                    result = true;
                    break;
                }
            }else{
                //实现回滚,以subStr为参照物，即sourceStr往前移动
                if(j > 0 && partMatch[j-1] >= 0){
                    //公式在此处实现
                    i += (j - 1 - partMatch[j-1] - 1);
                }else{
                    break;
                }
            }
        }
        if(result) break;
    }

    if(result){
        return i;
    }else{
        return -1;
    }
};

function kmpGetPartMatchLen(str){
    var partMatch = [];
    for(var i = 0; i < str.length; i++){
        var prefix = "",
            suffix = "";
        var newStr = str.slice(0, i + 1);
        if(newStr.length <= 1){
            partMatch[i] = 0;
        }else{
            //判断前后缀是否相同
            for(var j = 0; j < i; j++){
                prefix = newStr.slice(0, j + 1);
                suffix = newStr.slice(-j - 1); //利用负参数尾巴开始取
                if(prefix === suffix){
                    partMatch[i] = prefix.length;
                }
            }
            //不存在检测
            partMatch[i] = partMatch[i]? partMatch[i] : 0;
        }
    }
    return partMatch;
}


export function filterBySeries(state, seriesName) {
}

export function filterByTeam(state, teamName) {

}

export function filterByDecade(state, decade) {

}


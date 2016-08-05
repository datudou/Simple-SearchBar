/**
 * Created by qianyiwang on 10/26/15.
 */

import fetch from 'isomorphic-fetch';

export function filterByStarName(starName, allCards) {
  return {
    type: 'FILTER_BY_STAR_NAME',
    starName,
    allCards,

  };
}

function receiveCardData(results) {
  return {
    type: 'RECEIVE_DATA',
    results,
  };
}

export function filterInAllCards(starName) {
  return (dispatch, getState) => {
    return fetch('https://leancloud.cn/1.1/classes/Card', {
      method: 'get',
      headers: {
        'X-LC-Id': 'W0pvfebRPNdnvf8NLAUdybJg',
        'X-LC-Key': 'AUurht9oU6bDAWkoK66LrHtq',
        'Content-Type': 'application/json',
      },
    }).then(response => response.json())
            .then(json =>
                dispatch(filterByStarName(starName, json.results)));
  };
}


export function fetchCardData() {
  return (dispatch, getState) => {
    return fetch('https://leancloud.cn/1.1/classes/Card', {
      method: 'get',
      headers: {
        'X-LC-Id': 'W0pvfebRPNdnvf8NLAUdybJg',
        'X-LC-Key': 'AUurht9oU6bDAWkoK66LrHtq',
        'Content-Type': 'application/json',
      },
    }).then(response => response.json())
            .then(json => {
              console.log(json.results);
              dispatch(receiveCardData(json.results)); });
  };
}


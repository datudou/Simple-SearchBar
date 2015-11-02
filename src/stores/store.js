/**
 * Created by qianyiwang on 10/26/15.
 */
import {createStore} from 'redux';
import reducer from '../reducers/reducer';
import {Map,List} from 'immutable';

export default function configureStore() {

    const store = createStore(reducer);
    //if (module.hot) {
    //    // Enable Webpack hot module replacement for reducers
    //    //module.hot.accept('../reducers', () => {
        //    const nextReducer = require('../reducers');
        //    store.replaceReducer(nextReducer);
        //});
    //}
    return store;
}





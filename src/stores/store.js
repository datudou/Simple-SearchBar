/**
 * Created by qianyiwang on 10/26/15.
 */
import {createStore,applyMiddleware} from 'redux';
import reducer from '../reducers/reducer';
import {Map,List} from 'immutable';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import fetchCardData from '../actions/actions'

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    createLogger()
)(createStore);

export default function configureStore() {

    const store = createStoreWithMiddleware(reducer);
    //const store = createStore(reducer);
    //if (module.hot) {
    //    // Enable Webpack hot module replacement for reducers
    //    //module.hot.accept('../reducers', () => {
        //    const nextReducer = require('../reducers');
        //    store.replaceReducer(nextReducer);
        //});
    //}

    return store;
}





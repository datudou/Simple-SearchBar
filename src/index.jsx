/**
 * Created by qianyiwang on 15/10/19.
 */

import React,{Component} from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './containers/App'
import configureStore from './stores/store';

const store = configureStore();

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);






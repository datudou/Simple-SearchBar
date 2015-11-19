/**
 * Created by qianyiwang on 15/10/19.
 */

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import MainSectionContainer from './components/MainSection';
import { Provider } from 'react-redux';
import * as actions from './actions/actions';
import {createStore} from 'redux';
import reducer from './reducers/reducer';
import configureStore from './stores/store';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MainSectionContainer/>
            </Provider>
        );
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));




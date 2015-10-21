/**
 * Created by qianyiwang on 15/10/19.
 */

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import MainSection from './components/MainSection';

class App extends Component {


    render() {
        return (
            <MainSection/>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));




/**
 * Created by qianyiwang on 15/10/19.
 */
import React,{Component} from 'react';
import SearchBar from './SearchBar';
import CardList from './CardList';
import {connect} from  'react-redux';
import * as filterActions from '../actions/actions';
import { bindActionCreators } from 'redux';
import {List,Map} from 'immutable';
import {Button} from 'react-bootstrap';

class MainSection extends Component {
    constructor(props) {
        super(props);
        //this.props.actions.fetchCardData();
    }

    componentWillMount() {
        this.props.actions.fetchCardData();
    }


    render() {
        return (
            <div>
                <SearchBar
                    filterText={null}
                    actions={this.props.actions}
                    onChange={this.onChange}
                    />
                <CardList
                    cards={this.props.cards}
                    />
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.get('cards'));
    return {
        cards: state.get('cards')
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(filterActions, dispatch)
    };
}

var MainSectionContainer = connect(mapStateToProps, mapDispatchToProps)(MainSection);


export default MainSectionContainer;

import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as filterActions from '../actions/actions';
import MainSection from '../components/MainSection';
import MyTable from '../components/Table';

class App extends Component {
    render() {
        //<MainSection cards={cards} actions={actions}/>
        const { cards, actions } = this.props

        return (
            <div>
                <MyTable></MyTable>
            </div>
        )

    }
}

//App.propTypes = {
//    todos: PropTypes.array.isRequired,
//    actions: PropTypes.object.isRequired
//}


function mapStateToProps(state) {
    return {
        cards: state.get('cards')
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(filterActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

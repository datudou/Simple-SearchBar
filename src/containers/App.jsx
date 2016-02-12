import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as filterActions from '../actions/actions';
import MainSection from '../components/MainSection'

class App extends Component {
    render() {
        const { cards, actions } = this.props

        return (
            <div>
                <MainSection cards={cards} actions={actions}/>
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

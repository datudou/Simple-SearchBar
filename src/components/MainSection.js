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
import {Grid,Col,Row} from 'react-bootstrap';

class MainSection extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.actions.fetchCardData();
    }

    onChange(filterText){
        this.filterText = filterText;
    }


    render() {
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={6} xsOffset={3}>
                            <SearchBar
                                filterText={null}
                                actions={this.props.actions}
                                onChange={this.onChange.bind(this)}
                            />
                        </Col>
                    </Row>
                </Grid>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={6} xsOffset={3}>
                            <CardList
                                cards={this.props.cards}
                                filterText={this.filterText}
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

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

var MainSectionContainer = connect(mapStateToProps, mapDispatchToProps)(MainSection);


export default MainSectionContainer;

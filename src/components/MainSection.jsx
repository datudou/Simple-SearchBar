/**
 * Created by qianyiwang on 15/10/19.
 */
import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import SearchBar from './SearchBar';
import CardList from './CardList';

class MainSection extends Component {

  componentWillMount() {
    this.props.actions.fetchCardData();
  }

  onChange(filterText) {
    this.filterText = filterText;
    this.props.actions.filterInAllCards(filterText);
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
                onChange={this.onChange.bind(this)}/>
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
    );
  }
}


export default MainSection;

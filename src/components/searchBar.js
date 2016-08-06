/**
 * Created by qianyiwang on 15/10/19.
 */

import React, { Component } from 'react';
import { FormGroup, InputGroup, FormControl } from 'react-bootstrap';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const filterText = e.target.value.toLowerCase().trim();
    this.props.onChange(filterText);
  }

  render() {
    return (
      <FormGroup>
        <InputGroup>
          <FormControl
            type="text"
            placeholder="Search ..."
            onChange={this.handleChange}
          />
        </InputGroup>
      </FormGroup>
    );
  }
}

export default SearchBar;

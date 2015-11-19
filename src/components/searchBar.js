/**
 * Created by qianyiwang on 15/10/19.
 */

import React,{Component,PropTypes} from 'react';
import {Input} from 'react-bootstrap';

class SearchBar extends Component {
    constructor(props){
        super(props);

    }

    handleChange(e){
        let filterText = e.target.value.toLowerCase().trim();
        this.props.onChange(filterText);
        this.props.actions.filterInAllCards(filterText);
    }


    render() {
        return (
            <form>
                <Input
                    type="text"
                    placeholder="Search ..."
                    ref="filterTextInput"
                    value={this.props.filterText}
                    onChange={this.handleChange.bind(this)}
                    onKeyDown={this.onKeyDown}
                    />
            </form>
        );
    }
}
export default SearchBar;



/**
 * Created by qianyiwang on 15/10/19.
 */

import React,{Component,PropTypes} from 'react';


class SearchBar extends Component {
    constructor(props){
        super(props);
    }

    handleChange(e){
        let filterText = e.target.value.toLowerCase().trim();
        console.log(filterText);
        this.props.actions.filterByStarName(filterText);
    }


    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search ..."
                    ref="filterTextInput"
                    value={this.props.filterText}
                    onChange={this.handleChange.bind(this)}
                    onKeyDown={this.onKeyDown}
                    />

                <p>
                    <input type="checkbox"/>
                    {' '}
                    Only show products in stocks
                </p>
            </form>
        );
    }
}
export default SearchBar;



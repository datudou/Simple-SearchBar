/**
 * Created by qianyiwang on 15/10/19.
 */

import React,{Component} from 'react';


class SearchBar extends Component {
   render() {
        return (
            <form>
                <input type="text" placeholder="Search ..." value={this.props.filterText}/>
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



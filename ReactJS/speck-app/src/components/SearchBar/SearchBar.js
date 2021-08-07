import React from 'react';
import './SearchBar.scss';

const SearchBar = (props) => {
    return (
        <div className="search-container">
            <input type="text" 
                   disabled={ props.state }
                   value={ props.input }
                   onChange={ (e) => props.onValueChange(e.target.value) }
                   placeholder={ props.placeholder }/>
        </div>
    );
}

export default SearchBar;
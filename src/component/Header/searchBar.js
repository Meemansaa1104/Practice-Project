import React from 'react';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import './searchBar.css';

const Search = () => {

    return(
        <div className ='SearchBar'>
            <input placeholder='Search for products, brands and more' type = 'text'></input>
            <SearchOutlinedIcon/>
        </div>
    )
}
export default Search;
import React from "react"
import "../styles/Search.css";

function Search(props) {
    
    return (
        
        <input
        className="searchbar"
        type="text"
        placeholder="search here"
        value={props.value}
        onChange={props.handleInputChange}
        id="search"

        />
    )
}

export default Search;
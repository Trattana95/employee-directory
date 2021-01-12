import React from "react"

function Search(props) {

    return (
        <input
        className="searchbar"
        type="text"
        placeholder="search here"
        value={props.search}
        onChange={props.searchChange}/>
    )
}

export default Search;
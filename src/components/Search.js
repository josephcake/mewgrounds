import React from 'react'

function Search(props){
  return(
    <div id="SearchDiv">
      {
        props.currentPage === "About" || props.currentPage === "Teams"
        ?
        null
        :
        <form id="SearchForm" onSubmit={props.handleSubmit}>
        <input id="SearchInput"type="text" value={props.value} placeholder={
          props.currentPage === "Home" || props.currentPage === "Stats"
          ?
          "Search for a Pokemon..."
          :
          `Search for a ${props.currentPage}...`

        } onChange={props.handleChange}/>
        </form>
      }
    </div>
  )
}
export default Search

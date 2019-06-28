import React, {Component} from 'react'

class Search extends Component {
  render(){
    return(
      <div id="SearchDiv">
        {
          this.props.currentPage === "About" || this.props.currentPage === "Teams"
          ?
          null
          :          
          <form id="SearchForm" onSubmit={this.props.handleSubmit}>
          <input id="SearchInput"type="text" value={this.props.value} placeholder={
            this.props.currentPage === "Home" || this.props.currentPage === "Stats"
            ?
            "Search for a pokemon..."
            :
            this.props.currentPage === "Moves"
            ?
            "Search for a move..."
            :
            this.props.currentPage === "Abilities"
            ?
            "Search for an ability..."
            :
            this.props.currentPage === "Items"
            ?
            "Search for an item..."
            :
            null
          } onChange={this.props.handleChange}/>
          </form>
        }
      </div>
    )
  }
}
export default Search

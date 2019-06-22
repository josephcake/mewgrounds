import React, {Component} from 'react'

class Search extends Component {
  render(){
    return(
      <div id="SearchDiv">
        <form id="SearchForm" onSubmit={this.props.handleSubmit}>
          <input id="SearchInput"type="text" value={this.props.value} placeholder="Search for a pokemon..." onChange={this.props.handleChange}/>
        </form>
      </div>
    )
  }
}
export default Search

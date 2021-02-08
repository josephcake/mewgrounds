import React from 'react'
import Search from '../components/Search.js'
import { Link } from 'react-router-dom'
import NavAttributes from '../components/NavAttributes.js'
import NavMoves from '../components/NavMoves.js'
import NavItems from '../components/NavItems.js'


class Nav extends React.PureComponent{
  render(){    
    return(
      <div id="Nav">
        <div id="navSites" className="navDiv">
          <div className={this.props.currentPage === "Home" ? `navChoices highlightNav` : "navChoices"}>
            <Link onClick={this.props.handlePage} to="/">Home</Link>
          </div>
          <div className={this.props.currentPage === "Stats" ? `navChoices highlightNav` : "navChoices"}>
            <Link onClick={this.props.handlePage} to="/stats">Stats</Link>
          </div>
          <div className={this.props.currentPage === "Moves" ? `navChoices highlightNav` : "navChoices"}>
            <Link onClick={this.props.handlePage} to="/moves">Moves</Link>
          </div>
          <div className={this.props.currentPage === "Items" ? `navChoices highlightNav` : "navChoices"}>
            <Link onClick={this.props.handlePage} to="/items">Items</Link>
          </div>
          <div className={this.props.currentPage === "Abilities" ? `navChoices highlightNav` : "navChoices"}>
            <Link onClick={this.props.handlePage} to="/abilities">Abilities</Link>
          </div>
          <div className={this.props.currentPage === "Teams" ? `navChoices highlightNav` : "navChoices"}>
            <Link onClick={this.props.handlePage} to="/teams">Teams</Link>
          </div>
          <div className={this.props.currentPage === "About" ? `navChoices highlightNav` : "navChoices"}>
            <Link onClick={this.props.handlePage} to="/about">About</Link>
          </div>
        </div>
        {
          this.props.currentPage === "Home" || this.props.currentPage === "Stats"
          ?
          <NavAttributes secondaryDataTypes={this.props.secondaryDataTypes} filterSecondType={this.props.filterSecondType} filteredType={this.props.filteredType} filterType={this.props.filterType}/>
          :
          this.props.currentPage === "Moves"
          ?
          <NavMoves filterType={this.props.filterType}/>
          :
          this.props.currentPage === "Items"
          ?
          <NavItems filterType={this.props.filterType}/>
          :
          null
        }
        <div className="navDiv">
          <Search currentPage={this.props.currentPage} handleSubmit={this.props.handleSubmit} handleFilter={this.props.handleFilter} value={this.props.value}/>
        </div>
      </div>
    )
  }
}
export default Nav

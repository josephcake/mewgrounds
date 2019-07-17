import React from 'react'
import Search from '../components/Search.js'
import { Link } from 'react-router-dom'
import NavAttributes from '../components/NavAttributes.js'
import NavMoves from '../components/NavMoves.js'
import NavItems from '../components/NavItems.js'


function Nav(props){
  return(
    <div id="Nav">
      <div id="navSites" className="navDiv">
        <div className={props.currentPage === "Home" ? `navChoices highlightNav` : "navChoices"}>
          <Link onClick={props.handlePage} to="/">Home</Link>
        </div>
        <div className={props.currentPage === "Stats" ? `navChoices highlightNav` : "navChoices"}>
          <Link onClick={props.handlePage} to="/stats">Stats</Link>
        </div>
        <div className={props.currentPage === "Moves" ? `navChoices highlightNav` : "navChoices"}>
          <Link onClick={props.handlePage} to="/moves">Moves</Link>
        </div>
        <div className={props.currentPage === "Items" ? `navChoices highlightNav` : "navChoices"}>
          <Link onClick={props.handlePage} to="/items">Items</Link>
        </div>
        <div className={props.currentPage === "Abilities" ? `navChoices highlightNav` : "navChoices"}>
          <Link onClick={props.handlePage} to="/abilities">Abilities</Link>
        </div>
        <div className={props.currentPage === "Teams" ? `navChoices highlightNav` : "navChoices"}>
          <Link onClick={props.handlePage} to="/teams">Teams</Link>
        </div>
        <div className={props.currentPage === "About" ? `navChoices highlightNav` : "navChoices"}>
          <Link onClick={props.handlePage} to="/about">About</Link>
        </div>
      </div>
      {
        props.currentPage === "Home" || props.currentPage === "Stats"
        ?
        <NavAttributes secondaryDataTypes={props.secondaryDataTypes} filterSecondType={props.filterSecondType} filteredType={props.filteredType} filterType={props.filterType}/>
        :
        props.currentPage === "Moves"
        ?
        <NavMoves filterType={props.filterType}/>
        :
        props.currentPage === "Items"
        ?
        <NavItems filterType={props.filterType}/>
        :
        null
      }
      <div className="navDiv">
        <Search currentPage={props.currentPage} handleSubmit={props.handleSubmit} handleFilter={props.handleFilter} value={props.value}/>
      </div>
    </div>
  )

}
export default Nav

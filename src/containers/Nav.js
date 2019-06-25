import React, {Component} from 'react'
// import { withRouter } from 'react-router-dom'
import Search from '../components/Search.js'
import { Link } from 'react-router-dom'
import NavAttributes from '../components/NavAttributes.js'
import NavMoves from '../components/NavMoves.js'
import NavItems from '../components/NavItems.js'


class Nav extends Component {
  render(){


    return(
      <div id="Nav">
        <div className="navDiv">
          <div className="navChoices">
            <Link onClick={this.props.handlePage} to="/">Home</Link>
          </div>
          <div className="navChoices">
            <Link onClick={this.props.handlePage} to="/stats">Stats</Link>
          </div>
          <div className="navChoices">
            <Link onClick={this.props.handlePage} to="/moves">Moves</Link>
          </div>
          <div className="navChoices">
            <Link onClick={this.props.handlePage} to="/items">Items</Link>
          </div>
          <div className="navChoices">
            <Link onClick={this.props.handlePage} to="/abilities">Abilities</Link>
          </div>
          <div className="navChoices">
            -7-
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
          this.props.currentPage === "Items"
          ?
          null
          :
          null
        }


        <div className="navDiv">
          <Search currentPage={this.props.currentPage} handleSubmit={this.props.handleSubmit} handleChange={this.props.handleChange} value={this.props.value}/>
        </div>
      </div>
    )
  }
}
export default Nav

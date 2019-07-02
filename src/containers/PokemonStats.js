import React, {Component} from 'react'
import Stat from '../components/Stat.js'
import {compareAll} from '../methods/Sort.js'


class PokemonStats extends Component {
  state = {
    currentSort:this.props.pData,
    sort: false
  }

  sort=(e)=>{
  let value = e.target.innerText.toLowerCase()
    if(e.target.innerText === "img" || e.target.innerText === "#"){
      this.setState({
        currentSort: this.state.sort ? this.props.pData.sort( compareAll.num) : this.props.pData.sort( compareAll.num).reverse(),
        sort: !this.state.sort
      })
    }else{
      this.setState({
        currentSort: this.state.sort ? this.props.pData.sort( compareAll[`${value}`]) : this.props.pData.sort( compareAll[`${value}`]).reverse(),
        sort: !this.state.sort
      })

    }
  }
  render(){
    let statRows = this.props.pData.map(p=><Stat currentPage={this.props.currentPage} p={p} value={this.props.value}/>)
    return (
      <div className="pokemonTableDiv">
        <table className="pokemonTable">
          <tbody>
          <tr className="pokemonTableTR">
            <th onClick={this.sort} className="pokemonTableHeaders">img</th>
            <th onClick={this.sort} className="pokemonTableHeaders">#</th>
            <th onClick={this.sort} className="pokemonTableHeaders">Name</th>
            <th className="pokemonTableHeaders">Type</th>
            <th onClick={this.sort} className="pokemonTableHeaders">Total</th>
            <th onClick={this.sort} className="pokemonTableHeaders">HP</th>
            <th onClick={this.sort} className="pokemonTableHeaders">Attack</th>
            <th onClick={this.sort} className="pokemonTableHeaders">Defense</th>
            <th onClick={this.sort} className="pokemonTableHeaders">SpAtk</th>
            <th onClick={this.sort} className="pokemonTableHeaders">SpDef</th>
            <th onClick={this.sort} className="pokemonTableHeaders">Speed</th>
          </tr>
            {statRows}
          </tbody>
        </table>
      </div>
    )
  }
}

export default PokemonStats

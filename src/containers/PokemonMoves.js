import React, {Component} from 'react'
import pokemonMovesData from '../data/pokemonMovesData.json'
import Move from '../components/Move.js'
import {compareAll} from '../methods/Sort.js'

class PokemonMoves extends Component {
  state = {
    currentSort:pokemonMovesData,
    sort: false
  }

  sort=(e)=>{
  let value = e.target.innerText.toLowerCase()
  this.setState({
    currentSort: this.state.sort ? this.state.currentSort.sort( compareAll[`${value}`]) : this.state.currentSort.sort( compareAll[`${value}`]).reverse(),
    sort: !this.state.sort
  })
  }
  render(){
    let pMovesData = []
    if(this.props.filteredType !== "" && this.props.filteredType !== "all"){
      this.state.currentSort.forEach(p => {
        if(p.type.toLowerCase() === this.props.filteredType.toLowerCase()){
          pMovesData.push(p)
        }
      })
    }else{
      pMovesData = this.state.currentSort
    }
    let movesRows = pMovesData.map(p=><Move p={p} value={this.props.value}/>)
    // debugger
    return(
      <div className="pokemonTableDiv">
        <table className="pokemonTable">
          <tbody>
          <tr className="pokemonTableTR">
            <th onClick={this.sort} className="pokemonTableHeaders">Name</th>
            <th onClick={this.sort} className="pokemonTableHeaders">Type</th>
            <th onClick={this.sort} className="pokemonTableHeaders">Cat</th>
            <th onClick={this.sort} className="pokemonTableHeaders">Power</th>
            <th onClick={this.sort} className="pokemonTableHeaders">Acc</th>
            <th onClick={this.sort} className="pokemonTableHeaders">PP</th>
            <th onClick={this.sort} className="pokemonTableHeaders">TM</th>
            <th className="pokemonTableHeaders">Desc</th>
            <th onClick={this.sort} className="pokemonTableHeaders">Per</th>
          </tr>
          {movesRows}
          </tbody>
        </table>
      </div>
    )
  }
}
export default PokemonMoves

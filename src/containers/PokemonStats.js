import React, {PureComponent} from 'react'
import Stat from '../components/Stat.js'
import {compareAll} from '../methods/Sort.js'


class PokemonStats extends PureComponent {
  state = {
    currentSort:this.props.pData,
    sort: false
  }

  sort=(e)=>{    
    let value = e.target.innerText.toLowerCase()
    this.setState({
      currentSort: this.state.sort ? compareAll.mergeSort(this.state.currentSort, value) : compareAll.mergeSort(this.state.currentSort, value).reverse(),
      sort: !this.state.sort
    })
  }
  render(){
    let statRows = this.state.currentSort.map(p=><Stat key={p.name} primaryType={this.props.primaryType} secondaryType={this.props.secondaryType} currentPage={this.props.currentPage} p={p} value={this.props.value}/>)
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

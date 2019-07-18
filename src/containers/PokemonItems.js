import React, {Component} from 'react'
import items from '../data/pokemonItemsData.json'
import Item from '../components/Item.js'
import {compareAll} from '../methods/Sort.js'

class PokemonItems extends Component {
  state = {
    currentSort:items,
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
    let pItemsData = []
    if(this.props.filteredType !== "" && this.props.filteredType !== "all"){
      this.state.currentSort.forEach(p => {
        if(p.cat.toLowerCase().includes(this.props.filteredType.toLowerCase())){
          pItemsData.push(p)
        }
      })
    }else{
      pItemsData = this.state.currentSort
    }
    let itemsRows = pItemsData.map(p=><Item key={p.name} p={p} value={this.props.value}/>)
    // debugger
    return(
      <div className="pokemonTableDiv">
        <table className="pokemonTable">
          <tbody>
            <tr className="pokemonTableTR">
              <th className="pokemonTableHeaders"></th>
              <th onClick={this.sort} className="pokemonTableHeaders">Name</th>
              <th onClick={this.sort} className="pokemonTableHeaders">Cat</th>
              <th className="pokemonTableHeaders-effect">Effect</th>
            </tr>
            {itemsRows}
          </tbody>
        </table>
      </div>
    )
  }
}
export default PokemonItems

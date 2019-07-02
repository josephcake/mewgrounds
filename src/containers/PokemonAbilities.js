import React, {Component} from 'react'
import abilities from "../data/pokemonAbilitiesData.json"
import Ability from '../components/Ability.js'
import {compareAll} from '../methods/Sort.js'


class PokemonAbilities extends Component {
  state = {
    currentSort:abilities,
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
    let pAbilitiesData = []
    if(this.props.filteredType !== "" && this.props.filteredType !== "all"){
      this.state.currentSort.forEach(p => {
        if(p.gen.toLowerCase().includes(this.props.filteredType.toLowerCase())){
          pAbilitiesData.push(p)
        }
      })
    }else{
      pAbilitiesData = this.state.currentSort
    }
    let abilitiesRows = pAbilitiesData.map(p=><Ability clickPoke={this.props.clickPoke} p={p} value={this.props.value}/>)
    // debugger
    return(
      <div className="pokemonTableDiv">
        <table className="pokemonTable">
          <tbody>
            <tr className="pokemonTableTR">
              <th onClick={this.sort} className="pokemonTableHeaders">Name</th>
              <th onClick={this.sort} className="pokemonTableHeaders">Gen</th>
              <th onClick={this.sort} className="pokemonTableHeaders">Pokemon</th>
              <th className="pokemonTableHeaders-effect">Text</th>
            </tr>
            {abilitiesRows}
          </tbody>
        </table>
      </div>
    )
  }
}
export default PokemonAbilities

import React, {Component} from 'react'
import {abilities} from "../pokemonAbilitiesData.js"
import Ability from '../components/Ability.js'
class PokemonAbilities extends Component {
  state = {
    currentSort:abilities,
    sort: false
  }

  compareName=( a, b )=>{
    if(this.state.sort){
      if ( a.name < b.name ){
        return 1;
      }else if ( a.name > b.name ){
        return -1;
      }else{
        return 0;
      }
    }else{

      if ( a.name < b.name ){
        return -1;
      }else if ( a.name > b.name ){
        return 1;
      }else{
        return 0;
      }
    }
  }

  compareGen=( a, b )=>{
    if(this.state.sort){
      if ( a.gen < b.gen ){
        return -1;
      }else if ( a.gen > b.gen ){
        return 1;
      }else{
        return 0;
      }
    }else{

      if ( a.gen < b.gen ){
        return 1;
      }else if ( a.gen > b.gen ){
        return -1;
      }else{
        return 0;
      }
    }
  }
  comparePokemon=( a, b )=>{
    if(this.state.sort){
      if ( a.pokemon.length < b.pokemon.length ){
        return -1;
      }else if ( a.pokemon.length > b.pokemon.length ){
        return 1;
      }else{
        return 0;
      }
    }else{

      if ( a.pokemon.length < b.pokemon.length ){
        return 1;
      }else if ( a.pokemon.length > b.pokemon.length ){
        return -1;
      }else{
        return 0;
      }
    }
  }

  sort=(e)=>{
    // console.log(e.target);

    if(e.target.innerText === "Name"){
      this.setState({
        currentSort: this.state.currentSort.sort( this.compareName ),
        sort: !this.state.sort
      })
    } else if(e.target.innerText === "Gen"){
      this.setState({
        currentSort: this.state.currentSort.sort( this.compareGen ),
        sort: !this.state.sort
      })
    } else if(e.target.innerText === "Pokemon"){
      this.setState({
        currentSort: this.state.currentSort.sort( this.comparePokemon ),
        sort: !this.state.sort
      })
    }

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


    // let abilitiesRows = [
    //   <tr className="pokemonTableTR">
    //     <th onClick={this.sort} className="pokemonTableHeaders">Name</th>
    //     <th onClick={this.sort} className="pokemonTableHeaders">Gen</th>
    //     <th onClick={this.sort} className="pokemonTableHeaders">Pokemon</th>
    //     <th className="pokemonTableHeaders-effect">Text</th>
    //   </tr>
    // ]
    // for (let i=0; i<pAbilitiesData.length; i++){
    //     abilitiesRows.push(
    //     <tr className={pAbilitiesData[i].name.toLowerCase().includes(this.props.value.toLowerCase()) ? "pokemonStatsTR" : "hideSprite"}>
    //       <td className="pokemonTableDatas">{pAbilitiesData[i].name}</td>
    //       <td className="pokemonTableDatas">{pAbilitiesData[i].gen}</td>
    //       <td className="pokemonTableDatas">{pAbilitiesData[i].pokemon.length}</td>
    //       <td className="pokemonTableDatas">{pAbilitiesData[i].text}</td>
    //     </tr>)
    // }
    
    let abilitiesRows = pAbilitiesData.map(p=><Ability p={p} value={this.props.value}/>)
    return(
      <div className="pokemonTableDiv">
        <table className="pokemonTable">
        <tr className="pokemonTableTR">
          <th onClick={this.sort} className="pokemonTableHeaders">Name</th>
          <th onClick={this.sort} className="pokemonTableHeaders">Gen</th>
          <th onClick={this.sort} className="pokemonTableHeaders">Pokemon</th>
          <th className="pokemonTableHeaders-effect">Text</th>
        </tr>
            {abilitiesRows}
        </table>
      </div>
    )
  }
}
export default PokemonAbilities

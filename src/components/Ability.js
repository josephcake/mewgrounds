import React, {Component} from 'react'
import IndieAbilityPokemon from './indieAbilityPokemon'

class Ability extends Component {
  state={
    showPokemonList:false
  }
  showPokemonList=()=>{
    this.setState({
      showPokemonList:!this.state.showPokemonList
    })
  }
  render(){
    let listPokemon = this.props.p.pokemon.map(p=> <IndieAbilityPokemon clickPoke={this.props.clickPoke} p={p}/>)
    console.log(this.props.p.name);
    console.log(this.props.p.pokemon);

    return(
      <tr className={this.props.p.name.toLowerCase().includes(this.props.value.toLowerCase()) ? "pokemonStatsTR" : "hideSprite"}>
        <td onClick={this.showPokemonList} className="pokemonTableDatas clickable">{this.props.p.name}</td>
        <td className="pokemonTableDatas">{this.props.p.gen}</td>
        <td className="pokemonTableDatas">
        {
          this.state.showPokemonList
          ?
          listPokemon
          :
          this.props.p.pokemon.length
        }
        </td>
        <td className="pokemonTableDatas">{this.props.p.text}</td>
      </tr>
    )
  }
}
export default Ability

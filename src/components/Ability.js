import React, {PureComponent} from 'react'
import IndieAbilityPokemon from './indieAbilityPokemon'

class Ability extends PureComponent {
  state={
    showPokemonList:false
  }
  showPokemonList=()=>{
    this.setState({
      showPokemonList:!this.state.showPokemonList
    })
  }
  render(){
    let listPokemon = this.props.p.pokemon.map(p=> <IndieAbilityPokemon key={p.name} clickPoke={this.props.clickPoke} p={p}/>)
    // <tr className={(this.props.p.gen.includes(this.props.primaryType) || this.props.primaryType === 'all') && this.props.p.name.toLowerCase().includes(this.props.value.toLowerCase()) ? `Sprite` : "hideSprite"}>
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

import React, {Component} from 'react'

class Ability extends Component {
  render(){
    return(
      <tr className={this.props.p.name.toLowerCase().includes(this.props.value.toLowerCase()) ? "pokemonStatsTR" : "hideSprite"}>
        <td className="pokemonTableDatas">{this.props.p.name}</td>
        <td className="pokemonTableDatas">{this.props.p.gen}</td>
        <td className="pokemonTableDatas">{this.props.p.pokemon.length}</td>
        <td className="pokemonTableDatas">{this.props.p.text}</td>
      </tr>
    )
  }
}
export default Ability

import React, {Component} from 'react'

class Move extends Component {
  render(){
    return(
      <tr className={this.props.p.name.toLowerCase().includes(this.props.value.toLowerCase()) ? "pokemonStatsTR" : "hideSprite"}>
        <td className="pokemonTableDatas">{this.props.p.name}</td>
        <td className="pokemonTableDatas"><p className={`${this.props.p.type.toLowerCase()}Type nav-tag`}>{this.props.p.type}</p></td>
        <td className="pokemonTableDatas">{this.props.p.cat}</td>
        <td className="pokemonTableDatas">{this.props.p.power}</td>
        <td className="pokemonTableDatas">{this.props.p.acc}</td>
        <td className="pokemonTableDatas">{this.props.p.pp}</td>
        <td className="pokemonTableDatas">{this.props.p.tm}</td>
        <td className="pokemonTableDatas">{this.props.p.desc}</td>
        <td className="pokemonTableDatas">{this.props.p.perc}</td>
      </tr>
    )
  }
}
export default Move

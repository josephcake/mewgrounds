import React, {Component} from 'react'

class Item extends Component {
  render(){
    return(
      <tr className={this.props.p.name.toLowerCase().includes(this.props.value.toLowerCase()) ? "pokemonStatsTR" : "hideSprite"}>
        <td className="pokemonTableDatas"><img alt={`${this.props.p.name} icon`} src={this.props.p.icon}/></td>
        <td className="pokemonTableDatas">{this.props.p.name}</td>
        <td className="pokemonTableDatas-cat">{this.props.p.cat}</td>
        <td className="pokemonTableDatas">{this.props.p.effect}</td>
      </tr>
    )
  }
}
export default Item

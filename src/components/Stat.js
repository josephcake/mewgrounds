import React, {Component} from 'react'

class Stat extends Component {
  render(){
    return(
      <tr className={this.props.p.name.toLowerCase().includes(this.props.value.toLowerCase()) ? "pokemonStatsTR" : "hideSprite"}>
        <td className="pokemonTableDatas"><img alt={`${this.props.p.name} icon`} src={this.props.p.sprite}/></td>
        <td className="pokemonTableDatas">{this.props.p.poke_id}</td>
        <td className="pokemonTableDatas">{this.props.p.name}</td>

        <td className="pokemonTableDatas"><p className={`${Object.keys(this.props.p.type)[0]}Type nav-tag`}>{Object.keys(this.props.p.type)[0]}</p>
        {
          Object.keys(this.props.p.type)[1]
          ?
          <p className={`${Object.keys(this.props.p.type)[1]}Type nav-tag`}>{Object.keys(this.props.p.type)[1]}</p>
          :
          null
        }
        </td>

        <td className="pokemonTableDatas">{this.props.p.stat.hp.base+this.props.p.stat.attack.base+this.props.p.stat.defense.base+this.props.p.stat.spAtk.base+this.props.p.stat.spDef.base+this.props.p.stat.speed.base}</td>
        <td className="pokemonTableDatas">{this.props.p.stat.hp.base}</td>
        <td className="pokemonTableDatas">{this.props.p.stat.attack.base}</td>
        <td className="pokemonTableDatas">{this.props.p.stat.defense.base}</td>
        <td className="pokemonTableDatas">{this.props.p.stat.spAtk.base}</td>
        <td className="pokemonTableDatas">{this.props.p.stat.spDef.base}</td>
        <td className="pokemonTableDatas">{this.props.p.stat.speed.base}</td>
      </tr>
    )
  }
}
export default Stat

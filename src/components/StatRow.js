import React, {Component} from 'react'


class StatRow extends Component {
  render(){
    return (
      <tr className="pokemonStatsTR">
        <td className="statTableDatas">{this.props.pData.poke_id}</td>
        <td className="statTableDatas">{this.props.pData.name}</td>
        <td className="statTableDatas">{this.props.pData.name}</td>
        <td className="statTableDatas">{this.props.pData.stat.hp.base+this.props.pData.stat.attack.base+this.props.pData.stat.defence.base+this.props.pData.stat.spAtk.base+this.props.pData.stat.spDef.base+this.props.pData.stat.speed.base}</td>
        <td className="statTableDatas">{this.props.pData.stat.hp.base}</td>
        <td className="statTableDatas">{this.props.pData.stat.attack.base}</td>
        <td className="statTableDatas">{this.props.pData.stat.defence.base}</td>
        <td className="statTableDatas">{this.props.pData.stat.spAtk.base}</td>
        <td className="statTableDatas">{this.props.pData.stat.spDef.base}</td>
        <td className="statTableDatas">{this.props.pData.stat.speed.base}</td>
      </tr>
    )
  }
}

export default StatRow

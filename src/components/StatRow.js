import React, {Component} from 'react'
function StatRow(props){
  return (
    <tr className="pokemonStatsTR">
      <td className="statTableDatas">{props.pData.poke_id}</td>
      <td className="statTableDatas">{props.pData.name}</td>
      <td className="statTableDatas">{props.pData.name}</td>
      <td className="statTableDatas">{props.pData.stat.hp.base+props.pData.stat.attack.base+props.pData.stat.defence.base+props.pData.stat.spAtk.base+props.pData.stat.spDef.base+props.pData.stat.speed.base}</td>
      <td className="statTableDatas">{props.pData.stat.hp.base}</td>
      <td className="statTableDatas">{props.pData.stat.attack.base}</td>
      <td className="statTableDatas">{props.pData.stat.defence.base}</td>
      <td className="statTableDatas">{props.pData.stat.spAtk.base}</td>
      <td className="statTableDatas">{props.pData.stat.spDef.base}</td>
      <td className="statTableDatas">{props.pData.stat.speed.base}</td>
    </tr>
  )

}

export default StatRow

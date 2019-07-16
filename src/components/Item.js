import React from 'react'

function Item (props){
  return(
    <tr className={props.p.name.toLowerCase().includes(props.value.toLowerCase()) ? "pokemonStatsTR" : "hideSprite"}>
      <td className="pokemonTableDatas"><img alt={`${props.p.name} icon`} src={props.p.icon}/></td>
      <td className="pokemonTableDatas">{props.p.name}</td>
      <td className="pokemonTableDatas-cat">{props.p.cat}</td>
      <td className="pokemonTableDatas">{props.p.effect}</td>
    </tr>
  )
}
export default Item

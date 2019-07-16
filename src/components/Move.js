import React from 'react'

function Move(props){
  return(
    <tr className={props.p.name.toLowerCase().includes(props.value.toLowerCase()) ? "pokemonStatsTR" : "hideSprite"}>
      <td className="pokemonTableDatas">{props.p.name}</td>
      <td className="pokemonTableDatas"><p className={`${props.p.type.toLowerCase()}Type nav-tag`}>{props.p.type}</p></td>
      <td className="pokemonTableDatas">{props.p.cat}</td>
      <td className="pokemonTableDatas">{props.p.power}</td>
      <td className="pokemonTableDatas">{props.p.acc}</td>
      <td className="pokemonTableDatas">{props.p.pp}</td>
      <td className="pokemonTableDatas">{props.p.tm}</td>
      <td className="pokemonTableDatas">{props.p.desc}</td>
      <td className="pokemonTableDatas">{props.p.perc}</td>
    </tr>
  )

}
export default Move

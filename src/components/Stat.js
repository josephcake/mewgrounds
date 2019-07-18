import React from 'react'

function Stat(props){
  return(

    <tr className={((Object.keys(props.p.type).includes(props.primaryType) || props.primaryType === 'all') && (Object.keys(props.p.type).includes(props.secondaryType) || props.secondaryType === '')) && props.p.name.toLowerCase().includes(props.value.toLowerCase()) ? `pokemonStatsTR` : "hideSprite"}>
      {
        props.currentPage !== "Stats"
        ?
        <td className="pokemonTableDatas"><span><i onClick ={()=>props.deletePoke(props.p)} className="fas fa-minus-circle"></i></span></td>
        :
        null
      }
      <td className="pokemonTableDatas"><img alt={`${props.p.name} icon`} src={props.p.sprite}/></td>
      <td className="pokemonTableDatas">{props.p.poke_id}</td>
      <td className="pokemonTableDatas">{props.p.name}</td>

      <td className="pokemonTableDatas"><p className={`${Object.keys(props.p.type)[0]}Type nav-tag`}>{Object.keys(props.p.type)[0]}</p>
      {
        Object.keys(props.p.type)[1]
        ?
        <p className={`${Object.keys(props.p.type)[1]}Type nav-tag`}>{Object.keys(props.p.type)[1]}</p>
        :
        null
      }
      </td>

      <td className="pokemonTableDatas">{props.p.stat.hp.base+props.p.stat.attack.base+props.p.stat.defense.base+props.p.stat.spAtk.base+props.p.stat.spDef.base+props.p.stat.speed.base}</td>
      <td className="pokemonTableDatas">{props.p.stat.hp.base}</td>
      <td className="pokemonTableDatas">{props.p.stat.attack.base}</td>
      <td className="pokemonTableDatas">{props.p.stat.defense.base}</td>
      <td className="pokemonTableDatas">{props.p.stat.spAtk.base}</td>
      <td className="pokemonTableDatas">{props.p.stat.spDef.base}</td>
      <td className="pokemonTableDatas">{props.p.stat.speed.base}</td>
    </tr>
  )

}
export default Stat

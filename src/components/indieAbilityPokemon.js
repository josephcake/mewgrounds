import React from 'react'

function IndieAbilityPokemon(props){
  return(
      <li  className={props.p.is_hidden ? "hidden-ability " : "ability"}>
        <span onClick={()=>props.clickPoke(props.p.pokemon)} className="clickable">
          {props.p.pokemon.name}
        </span>
      </li>
  )
}
export default IndieAbilityPokemon

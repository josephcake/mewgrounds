import React from 'react'

function HeaderCells(props){
  return (
    <th onClick={props.sort} className="pokemonTableHeaders">{props.header}</th>
  )
}
export default HeaderCells

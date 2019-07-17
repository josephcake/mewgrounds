import React from 'react'
function NavCells(props){
  return (
    <p onClick={props.filterType} className={`${props.type}Type nav-tag`}>{props.type}</p>
  )
}
export default NavCells

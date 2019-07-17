import React from 'react'
import NavCells from './NavCells'
import {allAttributeTypes} from '../data/headers.js'

function NavMoves(props){
  let primary_types = allAttributeTypes.map(type => <NavCells key={type} filterType={props.filterType} type={type}/>)
  return(
      <div className="navDiv">
        {primary_types}
      </div>
  )

}
export default NavMoves

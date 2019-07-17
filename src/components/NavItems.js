import React from 'react'
import NavCells from './NavCells'
import {allItems} from '../data/headers.js'

function NavItems(props){
  let items = allItems.map(type => <NavCells key={type} filterType={props.filterType} type={type}/>)
  return(
      <div className="navDiv">
        {items}
      </div>
  )
}
export default NavItems

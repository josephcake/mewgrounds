import React from 'react'
import NavCells from './NavCells.js'
import {allAttributeTypes} from '../data/headers.js'

function NavAttributes(props){
  let primary_types = allAttributeTypes.map(type => <NavCells key={type} filterType={props.filterType} type={type}/>)
  let secondary_type = props.secondaryDataTypes.map(type => <p key={type} onClick={props.filterSecondType} className={`${type}Type nav-tag`}>{type}</p>)
  // debugger
  return(
      <div>
      {
      props.filteredType !== "all"
        ?
        <div>
          <div className="navDiv">
            {primary_types}
          </div>
          <div className="navDiv">
            {secondary_type}
          </div>
        </div>
      :
      <div className="navDiv">
        {primary_types}
      </div>
    }
    </div>
  )

}
export default NavAttributes

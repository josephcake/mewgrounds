import React from 'react'
import NavCells from './NavCells.js'
import {allAttributeTypes} from '../data/headers.js'

function NavAttributes(props){
  let primary_types = allAttributeTypes.map(type => <NavCells key={type} filterType={props.filterType} type={type}/>)
  let secondary_type = [<p className="allType nav-tag">Type 2</p>]
  for(let i=0; i<props.secondaryDataTypes.length; i++){
      secondary_type.push(<p onClick={props.filterSecondType} className={`${props.secondaryDataTypes[i]}Type nav-tag`}>{props.secondaryDataTypes[i]}</p>)
  }
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

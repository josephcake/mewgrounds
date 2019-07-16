import React from 'react'
import DataCells from './DataCells'

function NavMoves(props){
  let allTypes = ['all','normal','flying','grass','fire','water','bug','poison','electric','ground','fairy','ghost','psychic','dark','rock','steel','fighting','dragon','ice']
  let primary_types = allTypes.map(type => <DataCells filterType={props.filterType} type={type}/>)
  return(
      <div className="navDiv">
        {primary_types}
      </div>
  )

}
export default NavMoves

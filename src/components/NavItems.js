import React from 'react'
import DataCells from './DataCells'
function NavItems(props){
  let allItems = ['all','general','battle','hold','machines','pokeballs','medicine','berries']
  let items = allItems.map(type => <DataCells filterType={props.filterType} type={type}/>)
  return(
      <div className="navDiv">
        {items}
      </div>
  )
}
export default NavItems

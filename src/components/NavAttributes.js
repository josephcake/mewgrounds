import React, {Component} from 'react'
import Attributes from './Attributes.js'

class NavAttributes extends Component {
  render(){
    let allTypes = ['all','normal','flying','grass','fire','water','bug','poison','electric','ground','fairy','ghost','psychic','dark','rock','steel','fighting','dragon','ice']
    let primary_types = allTypes.map(type => <Attributes filterType={this.props.filterType} type={type}/>)
    let secondary_type = [<p className="allType nav-tag">Type 2</p>]
    for(let i=0; i<this.props.secondaryDataTypes.length; i++){
        secondary_type.push(<p onClick={this.props.filterSecondType} className={`${this.props.secondaryDataTypes[i]}Type nav-tag`}>{this.props.secondaryDataTypes[i]}</p>)
    }
    return(
        <div>
        {
        this.props.filteredType !== "all"
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
}
export default NavAttributes

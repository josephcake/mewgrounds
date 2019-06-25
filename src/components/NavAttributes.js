import React, {Component} from 'react'

class NavAttributes extends Component {
  render(){
    let secondary_type = [<p className="allType nav-tag">Type 2</p>,]
    // let secondary_type_keys = Object.keys(this.props.secondaryDataTypes)
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
              <p onClick={this.props.filterType} className="allType nav-tag">all</p>
              <p onClick={this.props.filterType} className="normalType nav-tag">normal</p>
              <p onClick={this.props.filterType} className="flyingType nav-tag">flying</p>
              <p onClick={this.props.filterType} className="grassType nav-tag">grass</p>
              <p onClick={this.props.filterType} className="fireType nav-tag">fire</p>
              <p onClick={this.props.filterType} className="waterType nav-tag">water</p>
              <p onClick={this.props.filterType} className="bugType nav-tag">bug</p>
              <p onClick={this.props.filterType} className="poisonType nav-tag">poison</p>
              <p onClick={this.props.filterType} className="electricType nav-tag">electric</p>
              <p onClick={this.props.filterType} className="groundType nav-tag">ground</p>
              <p onClick={this.props.filterType} className="fairyType nav-tag">fairy</p>
              <p onClick={this.props.filterType} className="ghostType nav-tag">ghost</p>
              <p onClick={this.props.filterType} className="psychicType nav-tag">psychic</p>
              <p onClick={this.props.filterType} className="darkType nav-tag">dark</p>
              <p onClick={this.props.filterType} className="rockType nav-tag">rock</p>
              <p onClick={this.props.filterType} className="steelType nav-tag">steel</p>
              <p onClick={this.props.filterType} className="iceType nav-tag">ice</p>
              <p onClick={this.props.filterType} className="dragonType nav-tag">dragon</p>
              <p onClick={this.props.filterType} className="fightingType nav-tag">fighting</p>
            </div>
            <div className="navDiv">
              {secondary_type}
            </div>
          </div>
        :
        <div className="navDiv">
          <p onClick={this.props.filterType} className="allType nav-tag">all</p>
          <p onClick={this.props.filterType} className="normalType nav-tag">normal</p>
          <p onClick={this.props.filterType} className="flyingType nav-tag">flying</p>
          <p onClick={this.props.filterType} className="grassType nav-tag">grass</p>
          <p onClick={this.props.filterType} className="fireType nav-tag">fire</p>
          <p onClick={this.props.filterType} className="waterType nav-tag">water</p>
          <p onClick={this.props.filterType} className="bugType nav-tag">bug</p>
          <p onClick={this.props.filterType} className="poisonType nav-tag">poison</p>
          <p onClick={this.props.filterType} className="electricType nav-tag">electric</p>
          <p onClick={this.props.filterType} className="groundType nav-tag">ground</p>
          <p onClick={this.props.filterType} className="fairyType nav-tag">fairy</p>
          <p onClick={this.props.filterType} className="ghostType nav-tag">ghost</p>
          <p onClick={this.props.filterType} className="psychicType nav-tag">psychic</p>
          <p onClick={this.props.filterType} className="darkType nav-tag">dark</p>
          <p onClick={this.props.filterType} className="rockType nav-tag">rock</p>
          <p onClick={this.props.filterType} className="steelType nav-tag">steel</p>
          <p onClick={this.props.filterType} className="iceType nav-tag">ice</p>
          <p onClick={this.props.filterType} className="dragonType nav-tag">dragon</p>
          <p onClick={this.props.filterType} className="fightingType nav-tag">fighting</p>
        </div>
      }
      </div>
    )
  }
}
export default NavAttributes

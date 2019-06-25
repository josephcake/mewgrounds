import React, {Component} from 'react'
class NavItems extends Component {
  render(){

    // let movesType = [<p className="allType nav-tag">All</p>,]
    // // let movesType_keys = Object.keys(this.props.secondaryDataTypes)
    // for(let i=0; i<pokemonItems.length; i++){
    //     movesType.push(<p onClick={this.props.filterSecondType} className={`${this.props.secondaryDataTypes[i]}Type nav-tag`}>{this.props.secondaryDataTypes[i]}</p>)
    // }
    return(

        <div className="navDiv">
          <p onClick={this.props.filterType} className="allType nav-tag">all</p>
          <p onClick={this.props.filterType} className="normalType nav-tag">general</p>
          <p onClick={this.props.filterType} className="poisonType nav-tag">battle</p>
          <p onClick={this.props.filterType} className="waterType nav-tag">hold</p>
          <p onClick={this.props.filterType} className="darkType nav-tag">machines</p>
          <p onClick={this.props.filterType} className="fireType nav-tag">pokeballs</p>
          <p onClick={this.props.filterType} className="psychicType nav-tag">medicine</p>
          <p onClick={this.props.filterType} className="grassType nav-tag">berries</p>
        </div>
    )
  }
}
export default NavItems

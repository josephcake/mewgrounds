import React, {Component} from 'react'
import Search from '../components/Search.js'


class Nav extends Component {
  render(){
    return(
      <div id="Nav">
        <div className="navDiv">
          <div className="navChoices">
            -1-
          </div>
          <div className="navChoices">
            -2-
          </div>
          <div className="navChoices">
            -3-
          </div>
          <div className="navChoices">
            -4-
          </div>
          <div className="navChoices">
            -6-
          </div>
          <div className="navChoices">
            -7-
          </div>
        </div>

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
          <Search handleSubmit={this.props.handleSubmit} handleChange={this.props.handleChange} value={this.props.value}/>
        </div>
      </div>
    )
  }
}
export default Nav

import React, {Component} from 'react'
import color from '../data/color.json'

class Sprite extends Component {

  clickPoke=()=>{
    this.props.clickPoke(this.props.pokeData)
  }
  addPoke=()=>{
    this.props.addPoke(this.props.pokeData)
  }

  render(){
    let allColors = color
    let types = []

    let keys = Object.keys(this.props.pokeData.type)
    if(keys.length > 0){
      keys.forEach(type =>{
        types.push(<p onClick={this.props.filterType} className={`${type}Type small`}>{type}</p>)
      })
    }
    let style = {border: `white solid 7px`}
    let color1=''
    let color2=''
    if(keys.length === 1){
      color1 = allColors[keys[0]]
    }else{
      color1 = allColors[keys[0]]
      color2 = allColors[keys[1]]
    }
    if(!this.props.team.includes(this.props.pokeData)){
      if(keys.length === 1){
        style={border: `${color1} solid 3px`}
      } else {
        style={borderTop:`${color1} solid 3px`, borderLeft:`${color1} solid 3px`, borderRight:`${color2} solid 3px`, borderBottom:`${color2} solid 3px`}
      }
    }else{
      if(keys.length === 1){
        style={border: `${color1} solid 10px`}
      } else {
        style={borderTop:`${color1} solid 10px`, borderLeft:`${color1} solid 10px`, borderRight:`${color2} solid 10px`, borderBottom:`${color2} solid 10px`}
      }
    }
    // debugger
    return(
      <div id={this.props.id} style={style} className={this.props.pokeData.name.toLowerCase().includes(this.props.value.toLowerCase()) ? `Sprite` : "hideSprite"}>
        <header className="SpriteName">
          <text onClick={this.addPoke}><i class="fas fa-plus-circle"></i></text>
          <text>{this.props.pokeData.name}</text>
        </header>

        <div className="SpriteImg">
          <img onClick={this.clickPoke} alt={this.props.id} src={this.props.pokeData.image}/>
        </div>

        <div>
          <med>
          #{this.props.pokeData.poke_id}
          </med>
        </div>

        <div className="smallTypeDiv">
          <small className="smallType">
            {types}
          </small>
        </div>

      </div>
    )
  }
}
export default Sprite

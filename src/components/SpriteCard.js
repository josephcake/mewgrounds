import React from 'react'
import TypeTags from './TypeTags.js'
import colorType from '../data/color.json'

class Sprite extends React.PureComponent{
  render(){
    let types = Object.keys(this.props.pokeData.type).map(type => <TypeTags key={type} type={type}/>)
    // debugger
    return(
      <div id={this.props.id} style={{border:`${colorType[Object.keys(this.props.pokeData.type)[0]]} solid 2px`}} className={((Object.keys(this.props.pokeData.type).includes(this.props.primaryType) || this.props.primaryType === 'all') && (Object.keys(this.props.pokeData.type).includes(this.props.secondaryType) || this.props.secondaryType === '')) && this.props.pokeData.name.toLowerCase().includes(this.props.value.toLowerCase()) ? `Sprite` : "hideSprite"}>
        <header className="SpriteName">
          <span onClick={()=>this.props.addPoke(this.props.pokeData)}><i className="fas fa-plus-circle"></i></span>
          <span>{this.props.pokeData.name}</span>
        </header>
        <div className="SpriteImg">
          <img onClick={()=>this.props.clickPoke(this.props.pokeData)} alt={this.props.id} src={this.props.pokeData.image}/>
        </div>
        <div>
          <span>
          #{this.props.pokeData.poke_id}
          </span>
        </div>
        <div className="smallTypeDiv">
          <span className="smallType">
            {types}
          </span>
        </div>

      </div>
    )
  }

}
export default Sprite

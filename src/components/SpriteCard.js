import React from 'react'
import TypeTags from './TypeTags.js'
import colorType from '../data/color.json'

function Sprite(props){
  let types = Object.keys(props.pokeData.type).map(type => <TypeTags key={type} type={type}/>)
  // debugger
  return(
    <div id={props.id} style={{border:`${colorType[Object.keys(props.pokeData.type)[0]]} solid 2px`}} className={((Object.keys(props.pokeData.type).includes(props.primaryType) || props.primaryType === 'all') && (Object.keys(props.pokeData.type).includes(props.secondaryType) || props.secondaryType === '')) && props.pokeData.name.toLowerCase().includes(props.value.toLowerCase()) ? `Sprite` : "hideSprite"}>
      <header className="SpriteName">
        <span onClick={()=>props.addPoke(props.pokeData)}><i className="fas fa-plus-circle"></i></span>
        <span>{props.pokeData.name}</span>
      </header>
      <div className="SpriteImg">
        <img onClick={()=>props.clickPoke(props.pokeData)} alt={props.id} src={props.pokeData.image}/>
      </div>
      <div>
        <span>
        #{props.pokeData.poke_id}
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
export default Sprite

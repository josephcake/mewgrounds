import React from 'react'
import color from '../data/color.json'

function Sprite(props){
  let allColors = color
  let types = []

  let keys = Object.keys(props.pokeData.type)
  if(keys.length > 0){
    keys.forEach(type =>{
      types.push(<p key={type} onClick={props.filterType} className={`${type}Type small`}>{type}</p>)
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
  if(!props.team.includes(props.pokeData)){
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
    <div id={props.id} style={style} className={props.pokeData.name.toLowerCase().includes(props.value.toLowerCase()) ? `Sprite` : "hideSprite"}>
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

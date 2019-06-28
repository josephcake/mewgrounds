import React, {Component} from 'react'

class Sprite extends Component {

  clickPoke=()=>{
    this.props.clickPoke(this.props.pokeData)
  }
  addPoke=()=>{
    this.props.addPoke(this.props.pokeData)
  }

  render(){
    // let type = this.props.pokeData.type.map(a=><p>{a}</p>)
    let type = []

    let keys = Object.keys(this.props.pokeData.type)
    if(keys.length > 0){
      keys.forEach(a=>{
        // debugger
        if(a==="normal"){
          type.push(<p onClick={this.props.filterType} className="normalType small">{a}</p>)
        }else if(a==="flying"){
          type.push(<p onClick={this.props.filterType} className="flyingType small">{a}</p>)
        }else if(a==="grass"){
          type.push(<p onClick={this.props.filterType} className="grassType small">{a}</p>)
        }else if(a==="fire"){
          type.push(<p onClick={this.props.filterType} className="fireType small">{a}</p>)
        }else if(a==="water"){
          type.push(<p onClick={this.props.filterType} className="waterType small">{a}</p>)
        }else if(a==="bug"){
          type.push(<p onClick={this.props.filterType} className="bugType small">{a}</p>)
        }else if(a==="poison"){
          type.push(<p onClick={this.props.filterType} className="poisonType small">{a}</p>)
        }else if(a==="electric"){
          type.push(<p onClick={this.props.filterType} className="electricType small">{a}</p>)
        }else if(a==="ground"){
          type.push(<p onClick={this.props.filterType} className="groundType small">{a}</p>)
        }else if(a==="fairy"){
          type.push(<p onClick={this.props.filterType} className="fairyType small">{a}</p>)
        }else if(a==="ghost"){
          type.push(<p onClick={this.props.filterType} className="ghostType small">{a}</p>)
        }else if(a==="psychic"){
          type.push(<p onClick={this.props.filterType} className="psychicType small">{a}</p>)
        }else if(a==="dark"){
          type.push(<p onClick={this.props.filterType} className="darkType small">{a}</p>)
        }else if(a==="rock"){
          type.push(<p onClick={this.props.filterType} className="rockType small">{a}</p>)
        }else if(a==="steel"){
          type.push(<p onClick={this.props.filterType} className="steelType small">{a}</p>)
        }else if(a==="ice"){
          type.push(<p onClick={this.props.filterType} className="iceType small">{a}</p>)
        }else if(a==="dragon"){
          type.push(<p onClick={this.props.filterType} className="dragonType small">{a}</p>)
        }else if(a==="fighting"){
          type.push(<p onClick={this.props.filterType} className="fightingType small">{a}</p>)
        }
      })
    }
    let style = {border: `white solid 7px`}
    let color1=''
    let color2=''
    if(keys.length === 1){
      if (keys[0] === 'normal'){
           color1 = '#A8A77A'
         }else if
          (keys[0] === 'flying'){
           color1 = '#A98FF3'
         }else if
          (keys[0] === 'fire'){
           color1 = '#EE8130'
         }else if
          (keys[0] === 'water'){
           color1 = '#6390F0'
         }else if
          (keys[0] === 'electric'){
           color1 = '#F7D02C'
         }else if
          (keys[0] === 'grass'){
           color1 = '#7AC74C'
         }else if
          (keys[0] === 'ice'){
           color1 = '#96D9D6'
         }else if
          (keys[0] === 'fighting'){
           color1 = '#C22E28'
         }else if
          (keys[0] === 'poison'){
           color1 = '#A33EA1'
         }else if
          (keys[0] === 'ground'){
           color1 = '#E2BF65'
         }else if
          (keys[0] === 'psychic'){
           color1 = '#F95587'
         }else if
          (keys[0] === 'bug'){
           color1 = '#A6B91A'
         }else if
          (keys[0] === 'rock'){
           color1 = '#B6A136'
         }else if
          (keys[0] === 'ghost'){
           color1 = '#735797'
         }else if
          (keys[0] === 'dragon'){
           color1 = '#6F35FC'
         }else if
          (keys[0] === 'dark'){
           color1 = '#705746'
         }else if
          (keys[0] === 'steel'){
           color1 = '#B7B7CE'
         }else if
          (keys[0] === 'fairy'){
           color1 = '#D685AD'
         }
    } else {
      if (keys[0] === 'normal'){
           color1 = '#A8A77A'
         }else if
          (keys[0] === 'flying'){
           color1 = '#A98FF3'
         }else if
          (keys[0] === 'fire'){
           color1 = '#EE8130'
         }else if
          (keys[0] === 'water'){
           color1 = '#6390F0'
         }else if
          (keys[0] === 'electric'){
           color1 = '#F7D02C'
         }else if
          (keys[0] === 'grass'){
           color1 = '#7AC74C'
         }else if
          (keys[0] === 'ice'){
           color1 = '#96D9D6'
         }else if
          (keys[0] === 'fighting'){
           color1 = '#C22E28'
         }else if
          (keys[0] === 'poison'){
           color1 = '#A33EA1'
         }else if
          (keys[0] === 'ground'){
           color1 = '#E2BF65'
         }else if
          (keys[0] === 'psychic'){
           color1 = '#F95587'
         }else if
          (keys[0] === 'bug'){
           color1 = '#A6B91A'
         }else if
          (keys[0] === 'rock'){
           color1 = '#B6A136'
         }else if
          (keys[0] === 'ghost'){
           color1 = '#735797'
         }else if
          (keys[0] === 'dragon'){
           color1 = '#6F35FC'
         }else if
          (keys[0] === 'dark'){
           color1 = '#705746'
         }else if
          (keys[0] === 'steel'){
           color1 = '#B7B7CE'
         }else if
          (keys[0] === 'fairy'){
           color1 = '#D685AD'
         }
     if (keys[1] === 'normal'){
           color2 = '#A8A77A'
         }
          else if(keys[1] === 'flying'){
           color2 = '#A98FF3'
         }
          else if(keys[1] === 'fire'){
           color2 = '#EE8130'
         }
          else if(keys[1] === 'water'){
           color2 = '#6390F0'
         }
          else if(keys[1] === 'electric'){
           color2 = '#F7D02C'
         }
          else if(keys[1] === 'grass'){
           color2 = '#7AC74C'
         }
          else if(keys[1] === 'ice'){
           color2 = '#96D9D6'
         }
          else if(keys[1] === 'fighting'){
           color2 = '#C22E28'
         }
          else if(keys[1] === 'poison'){
           color2 = '#A33EA1'
         }
          else if(keys[1] === 'ground'){
           color2 = '#E2BF65'
         }
          else if(keys[1] === 'psychic'){
           color2 = '#F95587'
         }
          else if(keys[1] === 'bug'){
           color2 = '#A6B91A'
         }
          else if(keys[1] === 'rock'){
           color2 = '#B6A136'
         }
          else if(keys[1] === 'ghost'){
           color2 = '#735797'
         }
          else if(keys[1] === 'dragon'){
           color2 = '#6F35FC'
         }
          else if(keys[1] === 'dark'){
           color2 = '#705746'
         }
          else if(keys[1] === 'steel'){
           color2 = '#B7B7CE'
         }
          else if(keys[1] === 'fairy'){
           color2 = '#D685AD'
         }
    }
    if(!this.props.team.includes(this.props.pokeData)){
      if(keys.length === 1){
        style={border: `${color1} solid 7px`}
      } else {
        style={borderTop:`${color1} solid 7px`, borderLeft:`${color1} solid 7px`, borderRight:`${color2} solid 7px`, borderBottom:`${color2} solid 7px`}
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
            {type}
          </small>
        </div>

      </div>
    )
  }
}
export default Sprite

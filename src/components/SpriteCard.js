import React, {Component} from 'react'

class Sprite extends Component {

  clickPoke=()=>{
    this.props.clickPoke(this.props.pokeData)
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
    return(
      <div id={this.props.id} className={this.props.pokeData.name.toLowerCase().includes(this.props.value.toLowerCase()) ? "Sprite" : "hideSprite"}>
        <header className="SpriteName">
          {this.props.pokeData.name}
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

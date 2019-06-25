import React, {Component} from 'react'

class TempDisplay extends Component {



//

  // let statTable = document.querySelector(".resp-scroll .vitals-table tbody")
  // statTable = $$('tr', document.querySelector(".resp-scroll .vitals-table tbody"))
  // let tableObj = []
  // for(let i=0;i<statTable.length;i++){
  // 	tableObj.push(statTable[i].innerText)
  // }
  // copy(tableObj)
  // [
  //   "HP\t60\t\n\t230\t324",
  //   "Attack\t62\t\n\t116\t245",
  //   "Defense\t63\t\n\t117\t247",
  //   "Sp. Atk\t80\t\n\t148\t284",
  //   "Sp. Def\t80\t\n\t148\t284",
  //   "Speed\t60\t\n\t112\t240"
  // ]




  render(){
    const {
      currentPoke,
      filterType,
      closeTemp,
      currentPokeDb
    } = this.props

    let type = []

    let keys = currentPoke.types.map(a=>a.type.name)
    if(keys.length > 0){
      keys.forEach(a=>{
        // debugger
        if(a==="normal"){
          type.push(<p onClick={filterType} className="normalType temp-type">{a}</p>)
        }else if(a==="flying"){
          type.push(<p onClick={filterType} className="flyingType temp-type">{a}</p>)
        }else if(a==="grass"){
          type.push(<p onClick={filterType} className="grassType temp-type">{a}</p>)
        }else if(a==="fire"){
          type.push(<p onClick={filterType} className="fireType temp-type">{a}</p>)
        }else if(a==="water"){
          type.push(<p onClick={filterType} className="waterType temp-type">{a}</p>)
        }else if(a==="bug"){
          type.push(<p onClick={filterType} className="bugType temp-type">{a}</p>)
        }else if(a==="poison"){
          type.push(<p onClick={filterType} className="poisonType temp-type">{a}</p>)
        }else if(a==="electric"){
          type.push(<p onClick={filterType} className="electricType temp-type">{a}</p>)
        }else if(a==="ground"){
          type.push(<p onClick={filterType} className="groundType temp-type">{a}</p>)
        }else if(a==="fairy"){
          type.push(<p onClick={filterType} className="fairyType temp-type">{a}</p>)
        }else if(a==="ghost"){
          type.push(<p onClick={filterType} className="ghostType temp-type">{a}</p>)
        }else if(a==="psychic"){
          type.push(<p onClick={filterType} className="psychicType temp-type">{a}</p>)
        }else if(a==="dark"){
          type.push(<p onClick={filterType} className="darkType temp-type">{a}</p>)
        }else if(a==="rock"){
          type.push(<p onClick={filterType} className="rockType temp-type">{a}</p>)
        }else if(a==="steel"){
          type.push(<p onClick={filterType} className="steelType temp-type">{a}</p>)
        }else if(a==="ice"){
          type.push(<p onClick={filterType} className="iceType temp-type">{a}</p>)
        }else if(a==="dragon"){
          type.push(<p onClick={filterType} className="dragonType temp-type">{a}</p>)
        }else if(a==="fighting"){
          type.push(<p onClick={filterType} className="fightingType temp-type">{a}</p>)
        }
      })
    }

    let abilites = []
    currentPoke.abilities.forEach(a=>{
      if(a.is_hidden === false){
        abilites.push(<a className="ability" href={a.ability.url}>{a.ability.name}</a>)
      }else if(a.is_hidden === true){
        abilites.push(<a className="hidden-ability" href={a.ability.url}>{a.ability.name} (hidden)</a>)
      }
    })

    return(
      <div id="TempDisplayDiv">
        <div  className="topDisplayDiv">
          <button id="closeTemp-btn" onClick={closeTemp}>X</button>
          <h1 className="tempName">
            {currentPoke.name}
          </h1>
        </div>
        <div className="headerDisplayDiv">
          <div className="frontSprite-nonShiny temp-sprites">
            <img src={currentPoke.sprites.front_default}/>
          </div>
          <div className="backSprite-nonShiny temp-sprites">
            <img src={currentPoke.sprites.back_default}/>
          </div>
          <div className="frontSprite-Shiny temp-sprites">
            <img src={currentPoke.sprites.front_shiny}/>
          </div>
          <div className="backSprite-Shiny temp-sprites">
            <img src={currentPoke.sprites.back_shiny}/>
          </div>
        </div>
        <div className="mainDisplayDiv">
          <div className="mainSprite">
            <img src={`https://img.pokemondb.net/artwork/${currentPoke.species.name}.jpg`}/>
          </div>
          <table  className="mainInfo">
            <h1 className="pokedexHeader">Pokedex Data</h1>
            <tr className="mainTr"><th className="info-left" >National Pokedex No: </th> <td className="info-right"> {currentPoke.id} </td></tr>
            <tr className="mainTr"><th className="info-left" >Type: </th> <td className="info-right"> {type} </td></tr>
            <tr className="mainTr"><th className="info-left" >Height: </th> <td className="info-right"> {(currentPoke.height/10).toFixed(2)}m <span className="conversion">({((currentPoke.height/10)*3.2).toFixed(2)} ft)</span></td></tr>
            <tr className="mainTr"><th className="info-left" >Weight: </th> <td className="info-right"> {(currentPoke.weight/10).toFixed(2)}kg <span className="conversion">({((currentPoke.weight/10)*2.2).toFixed(2)} lbs)</span></td></tr>
            <tr className="mainTr"><th className="info-left" >Abilities: </th> <td className="info-right"> {abilites} </td></tr>
          </table>
        </div>
        <div className="statsDiv">
          <h1 className="tempName-stat">Base Stats <span className="gray_italic_text">(stats are compared to the highest within that category)</span></h1>
          <table id="statTable">
            <tr className="statTr"><th className="statHeaders info-right">Stat</th><td className="info-right stat-data">Base</td><td className="bar"><div></div></td><td className="info-right stat-data">Min</td><td className="info-right stat-data">Max</td></tr>
            <tr className="statTr"><th className="statHeaders info-right">HP</th><td className="info-right stat-data">{currentPokeDb.stat.hp.base}</td><td className="bar"><div style={{width:`${currentPokeDb.stat.hp.base/2.55}%`, borderRadius: `10px`, backgroundColor: 'coral', height: `15px`}}></div></td><td className="info-right stat-data">{currentPokeDb.stat.hp.min}</td><td className="info-right stat-data">{currentPokeDb.stat.hp.max}</td></tr>
            <tr className="statTr"><th className="statHeaders info-right">Attack</th><td className="info-right stat-data">{currentPokeDb.stat.attack.base}</td><td className="bar"><div style={{width:`${currentPokeDb.stat.attack.base/1.9}%`, borderRadius: `10px`, backgroundColor: 'coral', height: `15px`}}></div></td><td className="info-right stat-data">{currentPokeDb.stat.attack.min}</td><td className="info-right stat-data">{currentPokeDb.stat.attack.max}</td></tr>
            <tr className="statTr"><th className="statHeaders info-right">Defense</th><td className="info-right stat-data">{currentPokeDb.stat.defense.base}</td><td className="bar"><div style={{width:`${currentPokeDb.stat.defense.base/2.3}%`, borderRadius: `10px`, backgroundColor: 'coral', height: `15px`}}></div></td><td className="info-right stat-data">{currentPokeDb.stat.defense.min}</td><td className="info-right stat-data">{currentPokeDb.stat.defense.max}</td></tr>
            <tr className="statTr"><th className="statHeaders info-right">Sp.Atk</th><td className="info-right stat-data">{currentPokeDb.stat.spAtk.base}</td><td className="bar"><div style={{width:`${currentPokeDb.stat.spAtk.base/1.94}%`, borderRadius: `10px`, backgroundColor: 'coral', height: `15px`}}></div></td><td className="info-right stat-data">{currentPokeDb.stat.spAtk.min}</td><td className="info-right stat-data">{currentPokeDb.stat.spAtk.max}</td></tr>
            <tr className="statTr"><th className="statHeaders info-right">Sp.Def</th><td className="info-right stat-data">{currentPokeDb.stat.spDef.base}</td><td className="bar"><div style={{width:`${currentPokeDb.stat.spDef.base/2.3}%`, borderRadius: `10px`, backgroundColor: 'coral', height: `15px`}}></div></td><td className="info-right stat-data">{currentPokeDb.stat.spDef.min}</td><td className="info-right stat-data">{currentPokeDb.stat.spDef.max}</td></tr>
            <tr className="statTr"><th className="statHeaders info-right">Speed</th><td className="info-right stat-data">{currentPokeDb.stat.speed.base}</td><td className="bar"><div style={{width:`${currentPokeDb.stat.speed.base/1.8}%`, borderRadius: `10px`, backgroundColor: 'coral', height: `15px`}}></div></td><td className="info-right stat-data">{currentPokeDb.stat.speed.min}</td><td className="info-right stat-data">{currentPokeDb.stat.speed.max}</td></tr>
          </table>
        </div>
      </div>
    )
  }
}
export default TempDisplay

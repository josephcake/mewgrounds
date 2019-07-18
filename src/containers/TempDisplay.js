import React, {Component} from 'react'
import TempDisplayMoves from '../components/TempDisplayMoves'
import HeaderCells from '../components/HeaderCells.js'
import {teamDisplayHeaders} from '../data/headers.js'

class TempDisplay extends Component {

  compare=( a, b )=>{
      if ( a.lvl < b.lvl ){
        return -1;
      }else if ( a.lvl > b.lvl ){
        return 1;
      }else{
        return 0;
      }
  }

  evolve=()=>{
    this.props.evolve(this.props.currentPokeDb.evo.evo_to.pokemon[Math.floor(Math.random() * this.props.currentPokeDb.evo.evo_to.pokemon.length)].id)
  }
  nextPoke=()=>{
    this.props.nextPoke(this.props.currentPokeDb)
  }
  prevPoke=()=>{
    this.props.prevPoke(this.props.currentPokeDb)
  }

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
          type.push(<p onClick={filterType} className={`${a}Type temp-type`}>{a}</p>)
      })
    }

    let abilites = []
    currentPoke.abilities.forEach(a=>{
      if(a.is_hidden === false){
        abilites.push(<span className="ability" >{a.ability.name}</span>)
      }else if(a.is_hidden === true){
        abilites.push(<span className="hidden-ability" >{a.ability.name} (hidden)</span>)
      }
    })
    let moves = []
    let obj = {}
    for(let i=0;i<currentPoke.moves.length; i++){
    	if(currentPoke.moves[i].version_group_details[0].move_learn_method.name === 'level-up'){
    		obj["name"] = currentPoke.moves[i].move.name
        obj["lvl"] = currentPoke.moves[i].version_group_details[0].level_learned_at
        obj["url"] = currentPoke.moves[i].move.url
    		moves.push(obj)
    	}
		  obj = {}
    }
    moves.sort(this.compare)

    let tempDisplayMoves = moves.map(obj=><TempDisplayMoves key={obj.name} m={obj}/>)
    let teamHeaders = teamDisplayHeaders.map(header => <HeaderCells key={header} header={header}/>)
    // debugger

    return(
      <div id="TempDisplayDiv">

        <div  className="topDisplayDiv">
          <button id="closeTemp-btn" onClick={closeTemp}>CLOSE</button>
          <h1 className="tempName">
            {currentPoke.name}
          </h1>
        </div>
        <div className="headerDisplayDiv">
          <div className="frontSprite-nonShiny temp-sprites">
            <img alt ={currentPoke.sprites.front_default} src={currentPoke.sprites.front_default}/>
          </div>
          <div className="backSprite-nonShiny temp-sprites">
            <img alt ={currentPoke.sprites.back_default} src={currentPoke.sprites.back_default}/>
          </div>
          <div className="frontSprite-Shiny temp-sprites">
            <img alt ={currentPoke.sprites.front_shiny} src={currentPoke.sprites.front_shiny}/>
          </div>
          <div className="backSprite-Shiny temp-sprites">
            <img alt ={currentPoke.sprites.back_shiny} src={currentPoke.sprites.back_shiny}/>
          </div>
        </div>
        <div className="mainDisplayDiv">
          <div className="mainSprite">
            {
              currentPokeDb.evo.evo_to.evo
              ?
              <button onClick={this.evolve} className="hoverEvoText">Evolve</button>
              :
              null
            }
            <img className="mainSpriteImg" alt={`${currentPoke.name} sprite`} src={`https://img.pokemondb.net/artwork/${currentPoke.name}.jpg`}/>
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
        <div id="pageSelection">
        <i onClick={this.prevPoke}class="fas fa-angle-double-left"></i>
          <i onClick={this.nextPoke}class="fas fa-angle-double-right"></i>
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
        <div className="movesDiv">
          <div  className="movesLvlDiv">
            <table className="movesTable">
              <tr className="pokemonTableTR-move">
                {teamHeaders}
              </tr>
              {tempDisplayMoves}
            </table>
          </div>
        </div>
      </div>
    )
  }
}
export default TempDisplay

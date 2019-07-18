import React, {Component} from 'react'
import TeamMembers from '../components/TeamMembers.js'
import StatCompare from '../components/StatCompare.js'
import HeaderCells from '../components/HeaderCells.js'
import {allTeamHeaders, allWeaknessHeaders} from '../data/headers.js'

class TeamCompare extends Component {

  render(){
    let teamMembers = [],
        hp = null,
        atk = null,
        def = null,
        spAtk = null,
        spDef = null,
        speed = null,
        minHP = null,
        minAtk = null,
        minDef = null,
        minSpAtk = null,
        minSpDef = null,
        minSpeed = null,
        maxHP = null,
        maxAtk = null,
        maxDef = null,
        maxSpAtk = null,
        maxSpDef = null,
        maxSpeed = null,
        types = {}

    for(let i=0; i< this.props.team.length; i++){
      teamMembers.push(<TeamMembers key={i} deletePoke={this.props.deletePoke} p={this.props.team[i]}/>)
      hp += this.props.team[i].stat.hp.base
      atk += this.props.team[i].stat.attack.base
      def += this.props.team[i].stat.defense.base
      spAtk += this.props.team[i].stat.spAtk.base
      spDef += this.props.team[i].stat.spDef.base
      speed += this.props.team[i].stat.speed.base
      minHP += this.props.team[i].stat.hp.min
      minAtk += this.props.team[i].stat.attack.min
      minDef += this.props.team[i].stat.defense.min
      minSpAtk += this.props.team[i].stat.spAtk.min
      minSpDef += this.props.team[i].stat.spDef.min
      minSpeed += this.props.team[i].stat.speed.min
      maxHP += this.props.team[i].stat.hp.max
      maxAtk += this.props.team[i].stat.attack.max
      maxDef += this.props.team[i].stat.defense.max
      maxSpAtk += this.props.team[i].stat.spAtk.max
      maxSpDef += this.props.team[i].stat.spDef.max
      maxSpeed += this.props.team[i].stat.speed.max

      if(types[Object.keys(this.props.team[i].type)[0]]) {
        types[Object.keys(this.props.team[i].type)[0]] += 1
      } else {
        types[Object.keys(this.props.team[i].type)[0]] = 1
      }
      if(Object.keys(this.props.team[i].type)[1]){
        if(types[Object.keys(this.props.team[i].type)[1]]){
          types[Object.keys(this.props.team[i].type)[1]] += 1
        }else {
          types[Object.keys(this.props.team[i].type)[1]] = 1
        }
      }
    }
    const teamHeaders = allTeamHeaders.map(header => <HeaderCells key={header} header={header}/>)
    const weaknessHeaders = allWeaknessHeaders.map(header => <HeaderCells key={header} header={header}/>)
    const statCompare = Object.keys(types).map(k=><StatCompare key={k[0]} type={k}/>)
    return(
            this.props.team.length > 0
            ?
            <div className="pokemonTableDiv">
              <table className="pokemonTable">
                <tbody>
                <tr className="pokemonTableTR">
                  <th className="pokemonTableHeaders" style={{width:"20px"}}></th>
                  {teamHeaders}
                </tr>
                  {teamMembers}
                </tbody>
              </table>
              <div className="statsDiv">
                <h1 className="tempName-stat">Average Stats<span className="gray_italic_text"></span></h1>
                <table id="statTable">
                  <tr className="statTr"><th className="statHeaders info-right">Stat</th><td className="info-right stat-data">Base</td><td className="bar"><div></div></td><td className="info-right stat-data">Min</td><td className="info-right stat-data">Max</td></tr>
                  <tr className="statTr"><th className="statHeaders info-right">HP</th><td className="info-right stat-data">{hp}</td><td className="bar"><div style={{width:`${hp/teamMembers.length/2.55}%`, borderRadius: `10px`, backgroundColor: '#5d965c', height: `15px`}}></div></td><td className="info-right stat-data">{minHP}</td><td className="info-right stat-data">{maxHP}</td></tr>
                  <tr className="statTr"><th className="statHeaders info-right">Attack</th><td className="info-right stat-data">{atk}</td><td className="bar"><div style={{width:`${atk/teamMembers.length/1.9}%`, borderRadius: `10px`, backgroundColor: '#e85e46', height: `15px`}}></div></td><td className="info-right stat-data">{minAtk}</td><td className="info-right stat-data">{maxAtk}</td></tr>
                  <tr className="statTr"><th className="statHeaders info-right">Defense</th><td className="info-right stat-data">{def}</td><td className="bar"><div style={{width:`${def/teamMembers.length/2.3}%`, borderRadius: `10px`, backgroundColor: '#1b5687', height: `15px`}}></div></td><td className="info-right stat-data">{minDef}</td><td className="info-right stat-data">{maxDef}</td></tr>
                  <tr className="statTr"><th className="statHeaders info-right">Sp.Atk</th><td className="info-right stat-data">{spAtk}</td><td className="bar"><div style={{width:`${spAtk/teamMembers.length/1.94}%`, borderRadius: `10px`, backgroundColor: '#ff691f', height: `15px`}}></div></td><td className="info-right stat-data">{minSpAtk}</td><td className="info-right stat-data">{maxSpAtk}</td></tr>
                  <tr className="statTr"><th className="statHeaders info-right">Sp.Def</th><td className="info-right stat-data">{spDef}</td><td className="bar"><div style={{width:`${spDef/teamMembers.length/2.3}%`, borderRadius: `10px`, backgroundColor: '#116363', height: `15px`}}></div></td><td className="info-right stat-data">{minSpDef}</td><td className="info-right stat-data">{maxSpDef}</td></tr>
                  <tr className="statTr"><th className="statHeaders info-right">Speed</th><td className="info-right stat-data">{speed}</td><td className="bar"><div style={{width:`${speed/teamMembers.length/1.8}%`, borderRadius: `10px`, backgroundColor: '#f0e511', height: `15px`}}></div></td><td className="info-right stat-data">{minSpeed}</td><td className="info-right stat-data">{maxSpeed}</td></tr>
                </table>
              </div>

              <table className="pokemonTable">
                <tr className="pokemonTableTR">
                  {weaknessHeaders}
                </tr>
                {statCompare}
              </table>
            </div>
            :
            <p id="noTeamText">Add Pokemon(s) to your team in order to display stats</p>
    )
  }
}
export default TeamCompare

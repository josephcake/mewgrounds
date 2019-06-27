import React, {Component} from 'react'
import TeamMembers from '../components/TeamMembers.js'

class TeamCompare extends Component {
  render(){
    let teamMembers = this.props.team.map(t => <TeamMembers p={t}/>)
    return(
      <div className="pokemonTableDiv">
        <table className="pokemonTable">
          <tbody>
          <tr className="pokemonTableTR">
            <th className="pokemonTableHeaders">img</th>
            <th className="pokemonTableHeaders">#</th>
            <th className="pokemonTableHeaders">Name</th>
            <th className="pokemonTableHeaders">Type</th>
            <th className="pokemonTableHeaders">Total</th>
            <th className="pokemonTableHeaders">HP</th>
            <th className="pokemonTableHeaders">Attack</th>
            <th className="pokemonTableHeaders">Defense</th>
            <th className="pokemonTableHeaders">Sp.Atk</th>
            <th className="pokemonTableHeaders">Sp.Def</th>
            <th className="pokemonTableHeaders">Speed</th>
          </tr>
            {teamMembers}
          </tbody>
        </table>
      </div>
    )
  }
}
export default TeamCompare

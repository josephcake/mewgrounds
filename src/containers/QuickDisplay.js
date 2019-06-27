import React, {Component} from 'react'
import Stat from '../components/Stat.js'

class QuickDisplay extends Component {

  render(){
    let statRows = this.props.pData.map(p=><Stat p={p} value={p.name}/>)
    return(
      <div id="QuickDisplayDiv">
        <div  className="topDisplayDiv">
          <button onClick={this.props.closeTemp} id="closeTemp-btn" >X</button>
        </div>
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
              {statRows}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default QuickDisplay

import React from 'react'
import Stat from '../components/Stat.js'
import HeaderCells from '../components/HeaderCells.js'
import {allTeamHeaders} from '../data/headers.js'

function QuickDisplay(props) {
  let statRows = props.pData.map(p=><Stat key={p.name} deletePoke={props.deletePoke} p={p} value={p.name}/>)
  const teamHeaders = allTeamHeaders.map(header => <HeaderCells header={header}/>)
  return(
    <div id="QuickDisplayDiv">
      <div  className="topDisplayDiv">
        <button onClick={props.closeTemp} id="closeTemp-btn" >CLOSE</button>
      </div>
      <div className="pokemonTableDiv">
        <table className="pokemonTable">
          <tbody>
          <tr className="pokemonTableTR">
            <th className="pokemonTableHeaders" style={{width:"20px"}}></th>
            {teamHeaders}
          </tr>
            {statRows}
          </tbody>
        </table>
      </div>
    </div>
  )

}
export default QuickDisplay

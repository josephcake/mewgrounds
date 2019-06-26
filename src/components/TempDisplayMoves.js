import React, {Component} from 'react'

class TempDisplayMoves extends Component {
  state = {
    move : {
      acc:'',
      power:'',
      pp:'',
      acc:'',
      type:'',
      cat:''
    }
  }
  render(){
    fetch(`${this.props.m.url}`)
    .then(reqs=>reqs.json())
    .then(resp=>{
      this.setState({
        move:{
          acc:resp.accuracy,
          power:resp.power,
          pp:resp.pp,
          type:resp.type.name,
          cat:resp.damage_class.name
        }
      })
    })
    return(
      <tr className="pokemonTableTR">
        <td className="pokemonTableDatas">{this.props.m.lvl}</td>
        <td className="pokemonTableDatas">{this.props.m.name}</td>
        <td className={`${this.state.move.type}Type nav-tag pokemonTableDatas`}>{this.state.move.type}</td>
        <td className="pokemonTableDatas">{this.state.move.cat}</td>
        <td className="pokemonTableDatas">{this.state.move.power}</td>
        <td className="pokemonTableDatas">{this.state.move.pp}</td>
        <td className="pokemonTableDatas">{this.state.move.acc}</td>
      </tr>
    )
  }
}
export default TempDisplayMoves

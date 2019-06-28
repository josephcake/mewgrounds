import React, {Component} from 'react'

class StatCompare extends Component {

  state={
    strong_against : [],
    weak_against : [],
    resistence_to : [],
    no_damage_to : [],
    no_damage_from : []
  }
  componentDidMount(){
    fetch(`https://pokeapi.co/api/v2/type/${this.props.type}`)
    .then(req=>req.json())
    .then(resp=>{
      this.setState({
        strong_against : resp.damage_relations.double_damage_to,
        weak_against : resp.damage_relations.double_damage_from,
        resistence_to : resp.damage_relations.half_damage_from,
        no_damage_to : resp.damage_relations.no_damage_to,
        no_damage_from : resp.damage_relations.no_damage_from
    })})
  }

  render(){
      let strong_against = [],
          weak_against = [],
          resistence_to = [],
          no_damage_to = [],
          no_damage_from = []


      this.state.strong_against.forEach(s=> strong_against.push(<p className={`${s.name}Type nav-tag`}>{s.name}</p>))
      this.state.weak_against.forEach(s=> weak_against.push(<p className={`${s.name}Type nav-tag`}>{s.name}</p>))
      this.state.resistence_to.forEach(s=> resistence_to.push(<p className={`${s.name}Type nav-tag`}>{s.name}</p>))
      this.state.no_damage_to.forEach(s=> no_damage_to.push(<p className={`${s.name}Type nav-tag`}>{s.name}</p>))
      this.state.no_damage_from.forEach(s=> no_damage_from.push(<p className={`${s.name}Type nav-tag`}>{s.name}</p>))
      console.log(strong_against);

    return(
      <tr className="pokemonStatsTR">
        <td className="pokemonTableDatas">
          <p className={`${this.props.type}Type nav-tag`}>{this.props.type}</p>
        </td>
        <td className="pokemonTableDatas">
        {strong_against}
        </td>
        <td className="pokemonTableDatas">
        {weak_against}
        </td>
        <td className="pokemonTableDatas">
        {resistence_to}
        </td>
        <td className="pokemonTableDatas">
        {no_damage_to}
        </td>
        <td className="pokemonTableDatas">
        {no_damage_from}
        </td>
      </tr>
    )
  }
}
export default StatCompare

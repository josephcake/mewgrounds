import React, {Component} from 'react'
import Stat from '../components/Stat.js'


class PokemonStats extends Component {
  state = {
    currentSort:this.props.pData,
    sort: false
  }

  compareHP = ( a, b ) => {
    if(this.state.sort){
      if ( a.stat.hp.base < b.stat.hp.base ){
        return -1;
      }else if ( a.stat.hp.base > b.stat.hp.base ){
        return 1;
      }else{
        return 0;
      }
    }else{

      if ( a.stat.hp.base < b.stat.hp.base ){
        return 1;
      }else if ( a.stat.hp.base > b.stat.hp.base ){
        return -1;
      }else{
        return 0;
      }
    }
  }
  compareNum = ( a, b ) => {
    if(this.state.sort){
      if ( a.id < b.id ){
        return 1;
      }else if ( a.id > b.id ){
        return -1;
      }else{
        return 0;
      }
    }else{

      if ( a.id < b.id ){
        return -1;
      }else if ( a.id > b.id ){
        return 1;
      }else{
        return 0;
      }
    }
  }
  compareName=( a, b )=>{
    if(this.state.sort){
      if ( a.name < b.name ){
        return 1;
      }else if ( a.name > b.name ){
        return -1;
      }else{
        return 0;
      }
    }else{

      if ( a.name < b.name ){
        return -1;
      }else if ( a.name > b.name ){
        return 1;
      }else{
        return 0;
      }
    }
  }
  compareTotal=( a, b )=>{
    if(this.state.sort){
      if ( a.stat.hp.base+a.stat.attack.base+a.stat.defense.base+a.stat.spAtk.base+a.stat.spDef.base+a.stat.speed.base <  b.stat.hp.base+b.stat.attack.base+b.stat.defense.base+b.stat.spAtk.base+b.stat.spDef.base+b.stat.speed.base ){
        return -1;
      }else if (  a.stat.hp.base+a.stat.attack.base+a.stat.defense.base+a.stat.spAtk.base+a.stat.spDef.base+a.stat.speed.base > b.stat.hp.base+b.stat.attack.base+b.stat.defense.base+b.stat.spAtk.base+b.stat.spDef.base+b.stat.speed.base ){
        return 1;
      }else{
        return 0;
      }
    }else{

      if ( a.stat.hp.base+a.stat.attack.base+a.stat.defense.base+a.stat.spAtk.base+a.stat.spDef.base+a.stat.speed.base <  b.stat.hp.base+b.stat.attack.base+b.stat.defense.base+b.stat.spAtk.base+b.stat.spDef.base+b.stat.speed.base ){
        return 1;
      }else if (  a.stat.hp.base+a.stat.attack.base+a.stat.defense.base+a.stat.spAtk.base+a.stat.spDef.base+a.stat.speed.base > b.stat.hp.base+b.stat.attack.base+b.stat.defense.base+b.stat.spAtk.base+b.stat.spDef.base+b.stat.speed.base ){
        return -1;
      }else{
        return 0;
      }
    }
  }
  compareAttack=( a, b )=>{
    if(this.state.sort){
      if ( a.stat.attack.base < b.stat.attack.base ){
        return -1;
      }else if ( a.stat.attack.base > b.stat.attack.base ){
        return 1;
      }else{
        return 0;
      }
    }else{

      if ( a.stat.attack.base < b.stat.attack.base ){
        return 1;
      }else if ( a.stat.attack.base > b.stat.attack.base ){
        return -1;
      }else{
        return 0;
      }
    }
  }
  compareDefense=( a, b )=>{
    if(this.state.sort){
      if ( a.stat.defense.base < b.stat.defense.base ){
        return -1;
      }else if ( a.stat.defense.base > b.stat.defense.base ){
        return 1;
      }else{
        return 0;
      }
    }else{

      if ( a.stat.defense.base < b.stat.defense.base ){
        return 1;
      }else if ( a.stat.defense.base > b.stat.defense.base ){
        return -1;
      }else{
        return 0;
      }
    }
  }
  compareSpAtk=( a, b )=>{
    if(this.state.sort){
      if ( a.stat.spAtk.base < b.stat.spAtk.base ){
        return -1;
      }else if ( a.stat.spAtk.base > b.stat.spAtk.base ){
        return 1;
      }else{
        return 0;
      }
    }else{

      if ( a.stat.spAtk.base < b.stat.spAtk.base ){
        return 1;
      }else if ( a.stat.spAtk.base > b.stat.spAtk.base ){
        return -1;
      }else{
        return 0;
      }
    }
  }
  compareSpDef=( a, b )=>{
    if(this.state.sort){
      if ( a.stat.spDef.base < b.stat.spDef.base ){
        return -1;
      }else if ( a.stat.spDef.base > b.stat.spDef.base ){
        return 1;
      }else{
        return 0;
      }
    }else{

      if ( a.stat.spDef.base < b.stat.spDef.base ){
        return 1;
      }else if ( a.stat.spDef.base > b.stat.spDef.base ){
        return -1;
      }else{
        return 0;
      }
    }
  }
  compareSpeed=( a, b )=>{
    if(this.state.sort){
      if ( a.stat.speed.base < b.stat.speed.base ){
        return -1;
      }else if ( a.stat.speed.base > b.stat.speed.base ){
        return 1;
      }else{
        return 0;
      }
    }else{

      if ( a.stat.speed.base < b.stat.speed.base ){
        return 1;
      }else if ( a.stat.speed.base > b.stat.speed.base ){
        return -1;
      }else{
        return 0;
      }
    }
  }


  sort=(e)=>{
    // console.log(e.target);

    if(e.target.innerText === "HP"){
      this.setState({
        currentSort: this.props.pData.sort( this.compareHP ),
        sort: !this.state.sort
      })
    } else if(e.target.innerText === "Name"){
      this.setState({
        currentSort: this.props.pData.sort( this.compareName ),
        sort: !this.state.sort
      })
    } else if(e.target.innerText === "Total"){
      this.setState({
        currentSort: this.props.pData.sort( this.compareTotal ),
        sort: !this.state.sort
      })
    } else if(e.target.innerText === "Attack"){
      this.setState({
        currentSort: this.props.pData.sort( this.compareAttack ),
        sort: !this.state.sort
      })
    } else if(e.target.innerText === "Defense"){
      this.setState({
        currentSort: this.props.pData.sort( this.compareDefense ),
        sort: !this.state.sort
      })
    } else if(e.target.innerText === "Sp.Atk"){
      this.setState({
        currentSort: this.props.pData.sort( this.compareSpAtk ),
        sort: !this.state.sort
      })
    } else if(e.target.innerText === "Sp.Def"){
      this.setState({
        currentSort: this.props.pData.sort( this.compareSpDef ),
        sort: !this.state.sort
      })
    } else if(e.target.innerText === "Speed"){
      this.setState({
        currentSort: this.props.pData.sort( this.compareSpeed ),
        sort: !this.state.sort
      })
    } else if(e.target.innerText === "img" || e.target.innerText === "#"){
      this.setState({
        currentSort: this.props.pData.sort( this.compareNum ),
        sort: !this.state.sort
      })
    }

  }
  render(){
    let statRows = this.props.pData.map(p=><Stat p={p} value={this.props.value}/>)
    return (
      <div className="pokemonTableDiv">
        <table className="pokemonTable">
          <tbody>
          <tr className="pokemonTableTR">
            <th onClick={this.sort} className="pokemonTableHeaders">img</th>
            <th onClick={this.sort} className="pokemonTableHeaders">#</th>
            <th onClick={this.sort} className="pokemonTableHeaders">Name</th>
            <th className="pokemonTableHeaders">Type</th>
            <th onClick={this.sort} className="pokemonTableHeaders">Total</th>
            <th onClick={this.sort} className="pokemonTableHeaders">HP</th>
            <th onClick={this.sort} className="pokemonTableHeaders">Attack</th>
            <th onClick={this.sort} className="pokemonTableHeaders">Defense</th>
            <th onClick={this.sort} className="pokemonTableHeaders">Sp.Atk</th>
            <th onClick={this.sort} className="pokemonTableHeaders">Sp.Def</th>
            <th onClick={this.sort} className="pokemonTableHeaders">Speed</th>
          </tr>
            {statRows}
          </tbody>
        </table>
      </div>
    )
  }
}

export default PokemonStats

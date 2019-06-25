import React, {Component} from 'react'
import {pokemonMovesData} from '../pokemonMovesData.js'
import Move from '../components/Move.js'

class PokemonMoves extends Component {
  state = {
    currentSort:pokemonMovesData,
    sort: false
  }


  compareDesc = ( a, b ) => {
    if(this.state.sort){
      if ( a.desc < b.desc ){
        return 1;
      }else if ( a.desc > b.desc ){
        return -1;
      }else{
        return 0;
      }
    }else{

      if ( a.desc < b.desc ){
        return -1;
      }else if ( a.desc > b.desc ){
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
  compareType=( a, b )=>{
    if(this.state.sort){
      if ( a.type < b.type ){
        return 1;
      }else if ( a.type > b.type ){
        return -1;
      }else{
        return 0;
      }
    }else{

      if ( a.type < b.type ){
        return -1;
      }else if ( a.type > b.type ){
        return 1;
      }else{
        return 0;
      }
    }
  }
  compareCat=( a, b )=>{
    if(this.state.sort){
      if ( a.cat < b.cat ){
        return -1;
      }else if ( a.cat > b.cat ){
        return 1;
      }else{
        return 0;
      }
    }else{

      if ( a.cat < b.cat ){
        return 1;
      }else if ( a.cat > b.cat ){
        return -1;
      }else{
        return 0;
      }
    }
  }
  comparePower=( a, b )=>{
    if(this.state.sort){
      if ( Number(a.power) < Number(b.power) ){
        return -1;
      }else if ( Number(a.power) > Number(b.power) ){
        return 1;
      }else{
        return 0;
      }
    }else{

      if ( Number(a.power) < Number(b.power) ){
        return 1;
      }else if ( Number(a.power) > Number(b.power) ){
        return -1;
      }else{
        return 0;
      }
    }
  }
  comparePP=( a, b )=>{
    if(this.state.sort){
      if ( Number(a.pp) < Number(b.pp) ){
        return -1;
      }else if ( Number(a.pp) > Number(b.pp) ){
        return 1;
      }else{
        return 0;
      }
    }else{

      if ( Number(a.pp) < Number(b.pp) ){
        return 1;
      }else if ( Number(a.pp) > Number(b.pp) ){
        return -1;
      }else{
        return 0;
      }
    }
  }
  compareAcc=( a, b )=>{
    if(this.state.sort){
      if ( Number(a.acc) < Number(b.acc) ){
        return -1;
      }else if ( Number(a.acc) > Number(b.acc) ){
        return 1;
      }else{
        return 0;
      }
    }else{

      if ( Number(a.acc) < Number(b.acc) ){
        return 1;
      }else if ( Number(a.acc) > Number(b.acc) ){
        return -1;
      }else{
        return 0;
      }
    }
  }
  compareTM=( a, b )=>{
    if(this.state.sort){
      if ( a.tm < b.tm ){
        return -1;
      }else if ( a.tm > b.tm ){
        return 1;
      }else{
        return 0;
      }
    }else{

      if ( a.tm < b.tm ){
        return 1;
      }else if ( a.tm > b.tm ){
        return -1;
      }else{
        return 0;
      }
    }
  }
  comparePer=( a, b )=>{
    if(this.state.sort){
      if ( Number(a.perc) < Number(b.perc) ){
        return -1;
      }else if ( Number(a.perc) > Number(b.perc) ){
        return 1;
      }else{
        return 0;
      }
    }else{

      if ( Number(a.perc) < Number(b.perc) ){
        return 1;
      }else if ( Number(a.perc) > Number(b.perc) ){
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
        currentSort: this.state.currentSort.sort( this.compareHP ),
        sort: !this.state.sort
      })
    } else if(e.target.innerText === "Name"){
      this.setState({
        currentSort: this.state.currentSort.sort( this.compareName ),
        sort: !this.state.sort
      })
    } else if(e.target.innerText === "Type"){
      this.setState({
        currentSort: this.state.currentSort.sort( this.compareType ),
        sort: !this.state.sort
      })
    } else if(e.target.innerText === "Cat"){
      this.setState({
        currentSort: this.state.currentSort.sort( this.compareCat ),
        sort: !this.state.sort
      })
    } else if(e.target.innerText === "Power"){
      this.setState({
        currentSort: this.state.currentSort.sort( this.comparePower ),
        sort: !this.state.sort
      })
    } else if(e.target.innerText === "PP"){
      this.setState({
        currentSort: this.state.currentSort.sort( this.comparePP ),
        sort: !this.state.sort
      })
    } else if(e.target.innerText === "Acc"){
      this.setState({
        currentSort: this.state.currentSort.sort( this.compareAcc ),
        sort: !this.state.sort
      })
    } else if(e.target.innerText === "TM"){
      this.setState({
        currentSort: this.state.currentSort.sort( this.compareTM ),
        sort: !this.state.sort
      })
    } else if(e.target.innerText === "Desc"){
      this.setState({
        currentSort: this.state.currentSort.sort( this.compareDesc ),
        sort: !this.state.sort
      })
    } else if(e.target.innerText === "Per %"){
      this.setState({
        currentSort: this.state.currentSort.sort( this.comparePer ),
        sort: !this.state.sort
      })
    }

  }
  render(){
    let pMovesData = []
    if(this.props.filteredType !== "" && this.props.filteredType !== "all"){
      this.state.currentSort.forEach(p => {
        if(p.type.toLowerCase() === this.props.filteredType.toLowerCase()){
          pMovesData.push(p)
        }
      })
    }else{
      pMovesData = this.state.currentSort
    }

    // let movesRows = [
    //   <tr className="pokemonTableTR">
    //     <th onClick={this.sort} className="pokemonTableHeaders">Name</th>
    //     <th onClick={this.sort} className="pokemonTableHeaders">Type</th>
    //     <th onClick={this.sort} className="pokemonTableHeaders">Cat</th>
    //     <th onClick={this.sort} className="pokemonTableHeaders">Power</th>
    //     <th onClick={this.sort} className="pokemonTableHeaders">Acc</th>
    //     <th onClick={this.sort} className="pokemonTableHeaders">PP</th>
    //     <th onClick={this.sort} className="pokemonTableHeaders">TM</th>
    //     <th onClick={this.sort} className="pokemonTableHeaders">Desc</th>
    //     <th onClick={this.sort} className="pokemonTableHeaders">Per %</th>
    //   </tr>
    // ]
    // for (let i=0; i<pMoveData.length; i++){
    //     movesRows.push(
    //     <tr className={pMoveData[i].name.toLowerCase().includes(this.props.value.toLowerCase()) ? "pokemonStatsTR" : "hideSprite"}>
    //       <td className="pokemonTableDatas">{pMoveData[i].name}</td>
    //       <td className="pokemonTableDatas"><p className={`${pMoveData[i].type.toLowerCase()}Type nav-tag`}>{pMoveData[i].type}</p></td>
    //       <td className="pokemonTableDatas">{pMoveData[i].cat}</td>
    //       <td className="pokemonTableDatas">{pMoveData[i].power}</td>
    //       <td className="pokemonTableDatas">{pMoveData[i].acc}</td>
    //       <td className="pokemonTableDatas">{pMoveData[i].pp}</td>
    //       <td className="pokemonTableDatas">{pMoveData[i].tm}</td>
    //       <td className="pokemonTableDatas">{pMoveData[i].desc}</td>
    //       <td className="pokemonTableDatas">{pMoveData[i].perc}</td>
    //     </tr>
    //   )
    // }
    let movesRows = pMovesData.map(p=><Move p={p} value={this.props.value}/>)
    return(
      <div className="pokemonTableDiv">
        <table className="pokemonTable">
          <tr className="pokemonTableTR">
            <th onClick={this.sort} className="pokemonTableHeaders">Name</th>
            <th onClick={this.sort} className="pokemonTableHeaders">Type</th>
            <th onClick={this.sort} className="pokemonTableHeaders">Cat</th>
            <th onClick={this.sort} className="pokemonTableHeaders">Power</th>
            <th onClick={this.sort} className="pokemonTableHeaders">Acc</th>
            <th onClick={this.sort} className="pokemonTableHeaders">PP</th>
            <th onClick={this.sort} className="pokemonTableHeaders">TM</th>
            <th onClick={this.sort} className="pokemonTableHeaders">Desc</th>
            <th onClick={this.sort} className="pokemonTableHeaders">Per %</th>
          </tr>
          {movesRows}
        </table>
      </div>
    )
  }
}
export default PokemonMoves

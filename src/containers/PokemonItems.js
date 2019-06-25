import React, {Component} from 'react'
import {items} from '../pokemonItemsData.js'

class PokemonItems extends Component {
  state = {
    currentSort:items,
    sort: false
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

  sort=(e)=>{
    // console.log(e.target);

    if(e.target.innerText === "Name"){
      this.setState({
        currentSort: this.state.currentSort.sort( this.compareName ),
        sort: !this.state.sort
      })
    } else if(e.target.innerText === "Cat"){
      this.setState({
        currentSort: this.state.currentSort.sort( this.compareCat ),
        sort: !this.state.sort
      })
    }

  }
  render(){
    let pItemsData = []
    if(this.props.filteredType !== "" && this.props.filteredType !== "all"){
      this.state.currentSort.forEach(p => {
        if(p.cat.toLowerCase().includes(this.props.filteredType.toLowerCase())){
          pItemsData.push(p)
        }
      })
    }else{
      pItemsData = this.state.currentSort
    }


    let itemsRows = [
      <tr className="pokemonTableTR">
        <th className="pokemonTableHeaders"></th>
        <th onClick={this.sort} className="pokemonTableHeaders">Name</th>
        <th onClick={this.sort} className="pokemonTableHeaders">Cat</th>
        <th className="pokemonTableHeaders-effect">Effect</th>
      </tr>
    ]
    for (let i=0; i<pItemsData.length; i++){
        itemsRows.push(
        <tr className={pItemsData[i].name.toLowerCase().includes(this.props.value.toLowerCase()) ? "pokemonStatsTR" : "hideSprite"}>
          <td className="pokemonTableDatas"><img src={pItemsData[i].icon}/></td>
          <td className="pokemonTableDatas">{pItemsData[i].name}</td>
          <td className="pokemonTableDatas-cat">{pItemsData[i].cat}</td>
          <td className="pokemonTableDatas">{pItemsData[i].effect}</td>
        </tr>)
    }
    return(
      <div className="pokemonTableDiv">
        <table className="pokemonTable">
            {itemsRows}
        </table>
      </div>
    )
  }
}
export default PokemonItems

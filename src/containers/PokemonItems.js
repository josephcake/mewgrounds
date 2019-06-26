import React, {Component} from 'react'
import items from '../data/pokemonItemsData.json'
import Item from '../components/Item.js'

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
    let itemsRows = pItemsData.map(p=><Item p={p} value={this.props.value}/>)
    // debugger
    return(
      <div className="pokemonTableDiv">
        <table className="pokemonTable">
          <tbody>
            <tr className="pokemonTableTR">
              <th className="pokemonTableHeaders"></th>
              <th onClick={this.sort} className="pokemonTableHeaders">Name</th>
              <th onClick={this.sort} className="pokemonTableHeaders">Cat</th>
              <th className="pokemonTableHeaders-effect">Effect</th>
            </tr>
            {itemsRows}
          </tbody>
        </table>
      </div>
    )
  }
}
export default PokemonItems

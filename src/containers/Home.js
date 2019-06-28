import React, {Component} from 'react'
import SpriteCard from '../components/SpriteCard.js'

class Home extends Component {

  render(){
    let pokeData = this.props.basicData.map(p=> <SpriteCard team={this.props.team} addPoke={this.props.addPoke} clickPoke={this.props.clickPoke} filterType={this.props.filterType} value={this.props.value} key={p.id} pokeData={p}/>)

    return(
      <div id="Home">

        <header id="HomeHeader">
          <img alt={"mewgrounds"} src={require("../mewgrounds.png")}/>
        </header>

        <div id="SpriteContainer">
          {pokeData}
        </div>
      </div>
    )
  }
}
export default Home

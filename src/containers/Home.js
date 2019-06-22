import React, {Component} from 'react'
import SpriteCard from '../components/SpriteCard.js'

class Home extends Component {

  render(){
    let pokeData = this.props.basicData.map(p=> <SpriteCard clickPoke={this.props.clickPoke} filterType={this.props.filterType} value={this.props.value} key={p.id} pokeData={p}/>)

    return(
      <div id="Home">

      <header id="HomeHeader">
        Welcome to Pokemon Library
      </header>

        <div id="SpriteContainer">
          {pokeData}
        </div>
      </div>
    )
  }
}
export default Home

import React from 'react'
import SpriteCard from '../components/SpriteCard.js'

class Home extends React.PureComponent{
  render(){
    console.log("Home");
    console.log(this.props);
    const pokeData = this.props.basicData.map(p=> <SpriteCard team={this.props.team} addPoke={this.props.addPoke} clickPoke={this.props.clickPoke} primaryType={this.props.primaryType} secondaryType={this.props.secondaryType} value={this.props.value} key={p.id} pokeData={p}/>)
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

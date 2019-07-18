import React from 'react'
import SpriteCard from '../components/SpriteCard.js'

function Home(props){
    const pokeData = props.basicData.map(p=> <SpriteCard team={props.team} addPoke={props.addPoke} clickPoke={props.clickPoke} primaryType={props.primaryType} secondaryType={props.secondaryType} value={props.value} key={p.id} pokeData={p}/>)
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
export default Home

import React, {Component} from 'react'
import badge from '../data/pokemonBadgesData.json'
import Footer from './Footer.js'
class About extends Component {
  render(){
    let a = badge.map(m=> <img className="badgeImg" src={m.src}/>)
    return(
      <div id="aboutPages">
        <div id="about-name">
          Hello trainer.
        </div>
        <p className="aboutP-One">
          My name is Joseph. I am a Pokemon Trainer, just like you!
          I started my Pokemon journey from the very beginning with the Indigo League.
          The purpose of this site is to provide an easy-to-use resources for all the Pokemon Trainers out there.
        </p>
        <p className="aboutP-Two">
        Enjoy
        </p>
        <div id="badgeContainer">
          {a}
        </div>
        <Footer/>
      </div>
    )
  }
}
export default About

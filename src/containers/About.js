import React from 'react'
import badge from '../data/pokemonBadgesData.json'
import Footer from './Footer.js'
function About() {
  let badges = badge.map(bg=> <img alt={bg.name} className="badgeImg" src={bg.src}/>)
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
        {badges}
      </div>
      <Footer/>
    </div>
  )
}
export default About

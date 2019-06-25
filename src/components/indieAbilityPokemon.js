import React, {Component} from 'react'

class IndieAbilityPokemon extends Component{
  render(){
    return(
        <li  className={this.props.p.is_hidden ? "hidden-ability " : "ability"}>
          <span onClick={()=>this.props.clickPoke(this.props.p.pokemon)} className="clickable">
            {this.props.p.pokemon.name}
          </span>
        </li>
    )
  }
}
export default IndieAbilityPokemon

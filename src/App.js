import React, {Component} from 'react';
import {pokemonData} from './pokemonBasicData'
// import axios from 'axios'
// import logo from './logo.svg';
import { Switch, Route, Link, Redirect, withRouter } from "react-router-dom";
// import { withRouter } from 'react-router-dom'
import './App.css';
import './style/Home.css'
import './style/SpriteCard.css'
import './style/Nav.css'
import './style/Search.css'
import './style/TempDisplay.css'
import './style/pokemonStats.css'
import './style/pokemonMoves.css'

import Nav from './containers/Nav.js'
import Home from './containers/Home.js'
import TempDisplay from './containers/TempDisplay.js'
import PokemonStats from './containers/PokemonStats.js'
import PokemonMoves from './containers/PokemonMoves.js'
import PokemonItems from './containers/PokemonItems.js'
import PokemonAbilities from './containers/PokemonAbilities.js'




class App extends Component{
  state={
    pData: pokemonData,
    value:"",
    filterType:"all",
    secondaryType:"",
    clickedPoke: false,
    currentPoke:{},
    currentPage:"Home"

  }

  componentDidMount(){
    // if(window.location.href.includes("home")){
    //   this.setState({
    //     currentPage:"Home"
    //   })
    // }
    if(window.location.href.includes("items")){
      this.setState({
        currentPage:"Items"
      })
    }
    if(window.location.href.includes("moves")){
      this.setState({
        currentPage:"Moves"
      })
    }
    if(window.location.href.includes("stats")){
      this.setState({
        currentPage:"Stats"
      })
    }
    if(window.location.href.includes("abilities")){
      this.setState({
        currentPage:"Abilities"
      })
    }
  }

  handleChange=(e)=>{
    // console.log(e.target.value);
    this.setState({
      value:e.target.value
    })
  }

  filterType=(e)=>{
    // console.log(e.target.innerText.toLowerCase());
    this.setState({
      filterType: e.target.innerText.toLowerCase(),
      secondaryType: ""
    })
  }
  filterSecondType=(e)=>{
    // console.log(e.target.innerText.toLowerCase());
    this.setState({
      secondaryType: e.target.innerText.toLowerCase()
    })
  }

  handlePage=(e)=>{
    this.setState({
      currentPage:e.target.innerText,
      filterType: "all",
      secondaryType: "",
      value:""
    })
  }

  clickPoke=(e)=>{
    // console.log(e);
      fetch(`https://pokeapi.co/api/v2/pokemon/${e.id}`)
      .then(reqs =>reqs.json())
      .then(resp => this.setState({
        clickedPoke: true,
        currentPoke: resp
      })
    )

  }
  closeTemp=()=>{
    this.setState({
      clickedPoke: false
    })
  }

    render(){

      let pData = []
      if(this.state.filterType !== "" && this.state.filterType !== "all"){
        this.state.pData.forEach(p => {
          if(Object.keys(p.type).includes(this.state.filterType.toLowerCase())){
            pData.push(p)
          }
        })
      }else{
        pData = this.state.pData
      }
      let secondaryDataTypes={}
      for(let i=0; i<pData.length; i++){
      	if(Object.keys(pData[i].type)[0] && Object.keys(pData[i].type)[0] !== this.state.filterType){
      		secondaryDataTypes[Object.keys(pData[i].type)[0]] = 1
      	}
      	if(Object.keys(pData[i].type)[1] && Object.keys(pData[i].type)[1] !== this.state.filterType){
      		secondaryDataTypes[Object.keys(pData[i].type)[1]] = 1
      	}
      }
      secondaryDataTypes=Object.keys(secondaryDataTypes)
      // console.log(secondaryDataTypes);

      if(this.state.secondaryType !== ""){
        let newPData = []
        pData.forEach(p => {
          if(Object.keys(p.type).includes(this.state.secondaryType.toLowerCase())){
            newPData.push(p)
          }
        })
        pData = newPData
      }
      // debugger


    return (
      <div id="App">
        <Nav currentPage={this.state.currentPage} handlePage={this.handlePage} filterType={this.filterType} filterSecondType={this.filterSecondType} filteredType={this.state.filterType} secondaryDataTypes={secondaryDataTypes} handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.value}/>
        <Switch>
          <Route exact path='/stats' render={() =>{
            return <PokemonStats value={this.state.value} pData={pData}/>
          }} />
          <Route exact path='/moves' render={() =>{
            return <PokemonMoves value={this.state.value} filteredType={this.state.filterType}/>
          }} />
          <Route exact path='/items' render={() =>{
            return <PokemonItems value={this.state.value} filteredType={this.state.filterType}/>
          }} />

          <Route exact path='/abilities' render={() =>
            <div>
            {
              this.state.clickedPoke
              ?
              <TempDisplay filterType={this.filterType} currentPokeDb={this.state.pData[this.state.currentPoke.id - 1]} currentPoke={this.state.currentPoke} closeTemp={this.closeTemp}/>
              :
              null
            }
            <PokemonAbilities clickPoke={this.clickPoke} value={this.state.value} filteredType={this.state.filterType}/>
            </div>
          }/>

          <Route path='/' render={() =>
             <div id="main">
             {
               this.state.clickedPoke
               ?
               <TempDisplay filterType={this.filterType} currentPokeDb={this.state.pData[this.state.currentPoke.id - 1]}currentPoke={this.state.currentPoke} closeTemp={this.closeTemp}/>
               :
               null
             }
             <Home basicData={pData} value={this.state.value} filterType={this.filterType} clickPoke={this.clickPoke} />
             </div>
          }/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

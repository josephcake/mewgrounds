import React, {Component} from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
// import axios from 'axios'

import pokemonData from './data/pokemonBasicData.json'

import './App.css';
import './style/QuickDisplay.css'
import './style/Home.css'
import './style/Footer.css'
import './style/SpriteCard.css'
import './style/Nav.css'
import './style/Search.css'
import './style/TempDisplay.css'
import './style/pokemonStats.css'
import './style/pokemonMoves.css'
import './style/About.css'

import TempDisplay from './containers/TempDisplay.js'
import QuickDisplay from './containers/QuickDisplay.js'
import Nav from './containers/Nav.js'
import Home from './containers/Home.js'
import PokemonStats from './containers/PokemonStats.js'
import PokemonMoves from './containers/PokemonMoves.js'
import PokemonItems from './containers/PokemonItems.js'
import PokemonAbilities from './containers/PokemonAbilities.js'
import TeamCompare from './containers/TeamCompare.js'
import About from './containers/About.js'


class App extends Component{
  state={
    pData: pokemonData,
    value:"",
    filterType:"all",
    secondaryType:"",
    clickedPoke: false,
    currentPoke:{},
    team:[],
    currentPage:"Home",
    quickDisplay:false

  }

  componentDidMount(){
    if(window.location.href.includes("about")){
      this.setState({
        currentPage:"About"
      })
    }
    if(window.location.href.includes("teams")){
      this.setState({
        currentPage:"Teams"
      })
    }
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
      clickedPoke: false,
      quickDisplay: false
    })
  }
  addPoke=(e)=>{
    if(this.state.team.length !== 6){
      let copyTeam = [...this.state.team]
      let foundId = copyTeam.find(copy=>copy.id === e.id)
      if(foundId){
      }else{
        this.setState({
          team: [...this.state.team, e]
        })
      }
    }
  }
  deletePoke=(e)=>{
    let copyTeam = [...this.state.team]
    let foundId = copyTeam.find(copy=>copy.id === e.id)
    copyTeam.splice(copyTeam.indexOf(foundId), 1);
    this.setState({
      team: copyTeam
    })
  }
  scrollTop=()=>{
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  }

  quickDisplay=()=>{
    this.setState({
      quickDisplay: true
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
        <div id="quickDisplay">
        {
          this.state.quickDisplay
          ?
          <QuickDisplay deletePoke={this.deletePoke} closeTemp={this.closeTemp} pData={this.state.team}/>
          :
          <img onClick={this.quickDisplay} id="pokeParty" src={require("./pokeparty.png")}/>
        }
        </div>
        <Switch>
          <Route exact path='/stats' render={() =>{
            return <PokemonStats value={this.state.value} currentPage={this.state.currentPage} pData={pData}/>
          }} />
          <Route exact path='/moves' render={() =>{
            return <PokemonMoves value={this.state.value} filteredType={this.state.filterType}/>
          }} />
          <Route exact path='/items' render={() =>{
            return <PokemonItems value={this.state.value} filteredType={this.state.filterType}/>
          }} />
          <Route exact path='/about' render={() =>{
            return <About/>
          }} />
          <Route exact path='/teams' render={() =>{
            return <TeamCompare deletePoke={this.deletePoke} team={this.state.team}/>
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
             <Home team={this.state.team} addPoke={this.addPoke} basicData={pData} value={this.state.value} filterType={this.filterType} clickPoke={this.clickPoke} />
             </div>
          }/>
        </Switch>
        {
          this.state.currentPage === "About" || this.state.currentPage === "Teams"
          ?
          null
          :
          <i onClick={this.scrollTop} class="fas fa-reply"></i>
        }
      </div>
    );
  }
}

export default withRouter(App);

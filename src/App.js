import React, {Component} from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
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
    primaryType:"all",
    secondaryType:"",
    secondaryDataTypes:[],
    clickedPoke: false,
    currentPoke:{},
    team:[],
    currentPage:"Home",
    quickDisplay:false

  }
  componentDidMount(){
    //Set the current page of site loading
    console.log   = function(){};
    console.warn  = function(){};
    console.error = function(){};
    console.info  = function(){};    

    let href = window.location.href.split('/')
    href = href[href.length-1]
    href = href.charAt(0).toUpperCase() + href.slice(1)
    if(href !== ""){
      this.setState({
        currentPage: href
      })
    }
  }

  handleFilter=(e)=>{
    //
    this.setState({
      value:e.target.value
    })
  }

  filterType=(e)=>{
    //filter first pokemon type
    if(e.target.innerText.toLowerCase() !== "all"){
      let pData=pokemonData.filter(p=>{
        return (Object.keys(p.type).includes(e.target.innerText.toLowerCase()))
      })
      let secondaryDataTypes={}
      for(let i=0; i<pData.length; i++){
      	if(Object.keys(pData[i].type)[0] && Object.keys(pData[i].type)[0] !== e.target.innerText.toLowerCase()){
      		secondaryDataTypes[Object.keys(pData[i].type)[0]] = 1
      	}
      	if(Object.keys(pData[i].type)[1] && Object.keys(pData[i].type)[1] !== e.target.innerText.toLowerCase()){
      		secondaryDataTypes[Object.keys(pData[i].type)[1]] = 1
      	}
      }
      secondaryDataTypes=Object.keys(secondaryDataTypes)
      this.setState({
        primaryType: e.target.innerText.toLowerCase(),
        secondaryDataTypes: secondaryDataTypes,
        secondaryType: ""
      })
    }else{
      this.setState({
        primaryType:'all',
        secondaryType: "",
        pData:this.state.currentPage === "Home" ? pokemonData : null
      })
    }

  }
  filterSecondType=(e)=>{
    this.setState({
      secondaryType: e.target.innerText.toLowerCase(),
    })
  }

  handlePage=(e)=>{
    this.setState({
      currentPage:e.target.innerText,
      primaryType: "all",
      secondaryType: "",
      value:""
    })
  }

  clickPoke=(e)=>{
    //clicking a pokemon on home page to display the "TempDisplay"
      fetch(`https://pokeapi.co/api/v2/pokemon/${e.id}`)
      .then(reqs =>reqs.json())
      .then(resp => this.setState({
        clickedPoke: true,
        currentPoke: resp
      })
    )

  }
  closeTemp=()=>{
    //closing the "TempDisplay"
    this.setState({
      clickedPoke: false,
      quickDisplay: false
    })
  }
  addPoke=(e)=>{
    //adding a Pokemon to the "QuickDisplay" && "Teams Component"
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
    //deleting a Pokemon from the "QuickDisplay" && "Teams Component"
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
    //toggling QuickDisplay by the Poke-indicator
    this.setState({
      quickDisplay: true
    })
  }

  evolve=(e)=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${e}`)
    .then(reqs =>reqs.json())
    .then(resp => this.setState({
        currentPoke: resp
    }))
  }
  nextPoke=(e)=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${e.id+1}`)
    .then(reqs =>reqs.json())
    .then(resp => this.setState({
        currentPoke: resp
    }))
  }
  prevPoke=(e)=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${e.id-1}`)
    .then(reqs =>reqs.json())
    .then(resp => this.setState({
        currentPoke: resp
    }))
  }
    render(){
      
    return (
      <div id="App">
        <Nav currentPage={this.state.currentPage} handlePage={this.handlePage} filterType={this.filterType} filterSecondType={this.filterSecondType} filteredType={this.state.primaryType} secondaryDataTypes={this.state.secondaryDataTypes} handleFilter={this.handleFilter} value={this.state.value}/>
        {/* <div id="quickDisplay">
        {
          this.state.quickDisplay
          ?
          <QuickDisplay deletePoke={this.deletePoke} closeTemp={this.closeTemp} pData={this.state.team}/>
          :
          <img alt="pokeIndicator" onClick={this.quickDisplay} id="pokeParty" src={require("./pokeparty.png")}/>
        }
        </div> */}
        <Switch>
          <Route exact path='/stats' render={() =>{
            return <PokemonStats value={this.state.value} primaryType={this.state.primaryType} secondaryType={this.state.secondaryType} currentPage={this.state.currentPage} pData={this.state.pData}/>
          }} />
          <Route exact path='/moves' render={() =>{
            return <PokemonMoves value={this.state.value} filteredType={this.state.primaryType}/>
          }} />
          <Route exact path='/items' render={() =>{
            return <PokemonItems value={this.state.value} filteredType={this.state.primaryType}/>
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
              <TempDisplay nextPoke={this.nextPoke} prevPoke={this.prevPoke} evolve={this.evolve} filterType={this.filterType} currentPokeDb={this.state.pData[this.state.currentPoke.id - 1]} currentPoke={this.state.currentPoke} closeTemp={this.closeTemp}/>
              :
              null
            }
            <PokemonAbilities clickPoke={this.clickPoke} value={this.state.value} primaryType={this.state.primaryType}/>
            </div>
          }/>

          <Route path='/' render={() =>
             <div id="main">
             {
               this.state.clickedPoke
               ?
               <TempDisplay nextPoke={this.nextPoke} prevPoke={this.prevPoke} evolve={this.evolve} filterType={this.filterType} currentPokeDb={this.state.pData[this.state.currentPoke.id - 1]}currentPoke={this.state.currentPoke} closeTemp={this.closeTemp}/>
               :
               null
             }
             <Home team={this.state.team} addPoke={this.addPoke} basicData={this.state.pData} value={this.state.value} secondaryType={this.state.secondaryType} primaryType={this.state.primaryType} clickPoke={this.clickPoke} />
             </div>
          }/>
        </Switch>
        {
          this.state.currentPage === "About" || this.state.currentPage === "Teams"
          ?
          null
          :
          <i onClick={this.scrollTop} className="fas fa-reply"></i>
        }
      </div>
    );
  }
}

export default withRouter(App);

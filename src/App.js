import React, {Component} from 'react';
import {pokemonData} from './pokemonBasicData'
// import axios from 'axios'
// import logo from './logo.svg';
import './App.css';
import './style/Home.css'
import './style/SpriteCard.css'
import './style/Nav.css'
import './style/Search.css'
import './style/TempDisplay.css'

import Nav from './containers/Nav.js'
import Home from './containers/Home.js'
import TempDisplay from './containers/TempDisplay.js'





class App extends Component{
  state={
    pData: pokemonData,
    value:"",
    filterType:"all",
    clickedPoke: false,
    currentPoke:{}

  }

  // componentDidMount(){
    // let count = 1
    // while(count <= 807){
    //   axios.get(`https://pokeapi.co/api/v2/pokemon/${count}`)
    //   .then(resp =>console.log(resp))
    //   count ++
    // }
    // app.listen(port);
    // console.log(port)
  // }

  handleChange=(e)=>{
    console.log(e.target.value);
    this.setState({
      value:e.target.value
    })
  }

  filterType=(e)=>{
    console.log(e.target.innerText.toLowerCase());
    this.setState({
      filterType: e.target.innerText.toLowerCase()
    })
  }

  clickPoke=(e)=>{
    console.log(e);
    fetch(`https://pokeapi.co/api/v2/pokemon/${e.id}`)
      .then(reqs =>reqs.json())
      .then(resp => this.setState({
          clickedPoke: true,
          currentPoke: resp
        }, console.log(resp))
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

      // debugger

    return (
      <div id="App">
        <Nav filterType={this.filterType} handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.value}/>
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
      </div>
    );
  }
}

export default App;

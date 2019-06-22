const mongoose = require('mongoose')
const Schema = mongoose.Schema

let PokeData = new Schema({
    pokeData_id: {
      type: Number
    },
    pokeData_name: {
      type: String
    },
    pokeData_url: {
      type: String
    },
    pokeData_image: {
      type: String
    },
    pokeData_type: {
      type: Array
    }
})



module.exports = mongoose.model("PokeData", PokeData)

PokeData.create({
  pokeData_id: 1,
  pokeData_name: "bulbasaur",
  pokeData_url: "https://pokeapi.co/api/v2/pokemon-species/1/",
  pokeData_image: "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bulbasaur.png",
  pokeData_type: [{grass: "https://pokeapi.co/api/v2/type/12/"}, {poison: "https://pokeapi.co/api/v2/type/4/"}]
})
console.log(PokeData);

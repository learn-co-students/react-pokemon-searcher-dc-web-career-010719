import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
constructor(){
  super()
  this.state = {
    pokeArray: [],
    searchTerm: ''
  }
}
  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokeData => this.setState({
      pokeArray: pokeData
    }))
  }

  onSearch = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  getPokemon = () => {
    return this.state.pokeArray.filter(pokemon => pokemon.name.includes(this.state.searchTerm))
  }

  addPokemon = (pokemonObj) => {
    debugger
    this.setState({
      pokeArray: [...this.state.pokeArray, pokemonObj]
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={(e) => this.onSearch(e)} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.getPokemon()} handleClick={this.handleClick}/>
        <br />
        <PokemonForm pokemons={this.state.pokeArray} addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonPage

import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {pokemon: [], filteredPokemon: []}

  componentDidMount() {
    this.fetchPokemon()
  }

  fetchPokemon = () => {
    fetch('http://localhost:3000/pokemon')
    .then(res=>res.json())
    .then(pokemonArray=>{this.setState({pokemon: pokemonArray, filteredPokemon: pokemonArray})})
  }

  applyFilter = (event) => {
    this.setState({filteredPokemon: this.state.pokemon.filter((pokemon)=>pokemon.name.includes(event.target.value))})
  }

  addPokemon = (newPokemon) => {
    fetch('http://localhost:3000/pokemon', {method: 'post', headers: {
    'Content-Type': 'application/json'}, body: JSON.stringify(newPokemon)})
    .then(res=>res.json())
    .then(json=>this.setState({pokemon: [...this.state.pokemon,json], filteredPokemon: [...this.state.pokemon,json]}))
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.applyFilter}/>
        <br />
        <PokemonCollection pokemon={this.state.filteredPokemon}/>
        <br />
        <PokemonForm onSubmit={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonPage

import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'
import PokemonSort from './PokemonSort'

class PokemonPage extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemons: [],
      searchTerm: '',
      sort: false
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemonObjs => {
      pokemonObjs.forEach(pokemon => pokemon.clicked = false)
      this.setState({pokemons: pokemonObjs})
    })
  }

  onClickOfPokemonCard = id => {
    let pokemonObjs = this.state.pokemons
    pokemonObjs.forEach(pokemon => pokemon.id === id ? pokemon.clicked = !pokemon.clicked : null)
    this.setState({pokemons: pokemonObjs})
  }

  handleSearch = (event, {value}) => {
    this.setState({searchTerm: value})
  }

  addNewPokemon = newPokemon => {
    this.setState({pokemons: [...this.state.pokemons, newPokemon]})
  }

  handleClickOfSort = () => {
    this.setState({sort: !this.state.sort})
  }

  render() {
    let filteredPokemonObjs = this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.searchTerm))
    if (this.state.sort === true) {
      filteredPokemonObjs.sort(function(a, b) {return a.name.localeCompare(b.name)})
    }
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} />
        <br />
        <PokemonSort handleClickOfSort={this.handleClickOfSort}/>
        <br />
        <PokemonCollection
          pokemons={filteredPokemonObjs}
          onClickOfPokemonCard={this.onClickOfPokemonCard}
        />
        <br />
        <PokemonForm addNewPokemon={this.addNewPokemon}/>
      </div>
    )
  }
}

export default PokemonPage

import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import SortButton from './SortButton'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  constructor() {
    super()
    this.state = {pokemon: [], value: '', sort: false}
  }

  // Display all pokemon when page renders
  componentDidMount() {
    this.updatePokemonList()
  }

  // Re-fetch pokemon when one is added
  updatePokemonList = () => {
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(pokemonData => {
      this.setState({pokemon: pokemonData})
    })
  }

  // Search and filter
  handleSearchChange = _.debounce(searchTerm => {
    this.setState({value: searchTerm})
  }, 500)

  filterPokemon() {
    return (this.sorted().filter(p => p.name.includes(this.state.value)))
  }

  // Allow option to sort by name
  sorted() {
    if (this.state.sort) {
      return (this.state.pokemon.sort( (p1, p2) => {
        return p1.name.localeCompare(p2.name)
      }))
    } else {
      console.log('sort by id')
      return (this.state.pokemon.sort((p1, p2) => {
        return (p1.id - p2.id)
      }))
    }
  }

  setSort = () => {
    console.log('sorting')
    this.setState({sort: !this.state.sort})
  }

  // Render page
  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm update={this.updatePokemonList}/>
        <br />
        <Search onSearchChange={(e) => {this.handleSearchChange(e.target.value)}} showNoResults={false} />
        <br />
        <SortButton sort={this.setSort}/>
        <br /><br />
        <PokemonCollection
          pokemon={this.filterPokemon()}
        />
      </div>
    )
  }
}

export default PokemonPage

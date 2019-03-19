import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonIndex extends React.Component {
  constructor(){
    super()

  this.state = {
    pokemonCollection: [],
    searchTerm: ''
  }
}

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(pokemonCollection => this.setState({ pokemonCollection: pokemonCollection }))
      .catch(e => console.error(e))
  }

  handleSearch =(event, {value}) => {
    this.setState({
      searchTerm: value
    })
  }


  render() {
    const pokemonCollection = this.state.pokemonCollection.filter(p =>
    p.name.includes(this.state.searchTerm))
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} />
        <br />
        <PokemonCollection allPokemon={pokemonCollection}/>
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonIndex

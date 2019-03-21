import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  
  constructor() {
    super()
    this.state = {
      pokemon: [],
      results: [],
      searchItem: '',
      form: false
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemon => {
      this.setState({
        pokemon: pokemon,
        results: pokemon
      })
    })
  }

  handleSearchChange = (value) => {

    const result = this.state.pokemon.filter(poke => {
      return poke.name.toLowerCase().includes(value.toLowerCase())
    })


    this.setState({
      results: result
    })

  }

  addPokemon = (poke) => {
    this.setState({
      pokemon: this.state.pokemon.concat(poke),
      results: this.state.results.concat(poke)
    })

  }

  changeFormState = () => {
    this.setState({
      form: !this.state.form
    })
  }
  
  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce((e, {value}) => this.handleSearchChange(value), 500)} showNoResults={false} />
        <button className='ui button' onClick={this.changeFormState}>Toggler</button>
        <br />
        {this.state.form ? <PokemonForm addPokemon={this.addPokemon} /> : <PokemonCollection pokemon={this.state.results} />}
      </div>
    )
  }
}

export default PokemonPage

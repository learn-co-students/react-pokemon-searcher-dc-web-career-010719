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
      searchTerm: ''
    }
  }

  componentDidMount() {
    this.fetchPokemon()
  }

  fetchPokemon() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemon => {
      this.setState({pokemon})
    })
  }

  postPokemon(info) {
    let currentPokemon = [...this.state.pokemon]
    let data = {
      name: info.name,
      stats: [
        {
          "value": 100,
          "name": "speed"
        },
        {
          "value": 100,
          "name": "special-defense"
        },
        {
          "value": 100,
          "name": "special-attack"
        },
        {
          "value": 100,
          "name": "defense"
        },
        {
          "value": 100,
          "name": "attack"
        },
        {
          "value": info.hp,
          "name": "hp"
        }
      ],
      sprites: {
        front: info.frontUrl,
        back: info.backUrl
      }
    }
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
    .then(res => res.json())
    .then(poke => {
      this.setState({
        pokemon: [currentPokemon, poke]
      })
    })
  }

  handleSearchChange = (e) => {
    console.log('🤔')
    let search = e.target.value
    this.setSearch(search)
  }

  setSearch = _.debounce(search => {
    this.setState({
      searchTerm: search
    })
  }, 500)

  filterPokemon = () => {
    return this.state.pokemon.filter((pokemon) => pokemon.name.includes(this.state.searchTerm))
  }


  render() {
    return (
      <div>
        <h1>Pokédex</h1>
        <br />
        <Search onSearchChange={this.handleSearchChange} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.filterPokemon()} />
        <br />
        <PokemonForm postPokemon={this.postPokemon} />
      </div>
    )
  }
}

export default PokemonPage

import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      pokemon: [],
      searchTerm: ''
    }
  }
  

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pArray => this.setState({pokemon: pArray}))
  }

  handleSearch = (e, { value }) => {
    console.log(this.props)
  
    this.setState({searchTerm: value})
  }

  sendPokemon = () => {
    return this.state.pokemon.filter(p => p.name.includes(this.state.searchTerm))
  }

  handleForm = pokemon => {
    this.setState({
      pokemon: [...this.state.pokemon, pokemon]
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.sendPokemon()}/>
        <br />
        <PokemonForm handleForm={this.handleForm}/>
      </div>
    )
  }
}

export default PokemonPage

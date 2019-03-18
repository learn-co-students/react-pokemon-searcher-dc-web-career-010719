import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state = {
      allPokemon: [],
      search: ""
    }

  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
          .then(res => res.json())
          .then(allPokemon =>this.setState({allPokemon}))
  }

  handleSearchChange = (e, { value })=>{
      e.persist()
      e.preventDefault()
      this.setState({search: value})
    }
  searchFilter = () => {
    let newArray = this.state.allPokemon.filter(p =>
      {return p.name.includes(this.state.search)}
    )
    return newArray
  }

  makePost = (val) => {
    const data = {
      name: val.name,
      stats: [
        {
        value: val.hp,
        name: 'hp'
      }
    ],
      sprites: {
        front: val.frontUrl,
        back: val.backUrl
      }
    }
    console.log("posting");
    fetch("http://localhost:3000/pokemon",{
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(pokemon => this.setState({allPokemon: [...this.state.allPokemon, pokemon]}))
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false}/>
        <br />
        <PokemonCollection allPokemon={this.searchFilter()} />
        <br />
        <PokemonForm makePost={this.makePost} />
      </div>
    )
  }
}

export default PokemonPage

import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'
import PokemonIndex from './PokemonIndex'

class PokemonCollection extends React.Component {
  constructor(props){
    super(props)

  }
  render() {
    return (
      <Card.Group itemsPerRow={6}>
       {this.props.allPokemon.map(poke => <PokemonCard pokemon={poke} key={poke.name}/>)}
      </Card.Group>
    )
  }
}

export default PokemonCollection

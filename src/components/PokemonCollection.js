import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  generateCards(){
    
    return this.props.allPokemon.map((poke) => {
      return <PokemonCard poke={poke} key={poke.id}/>
    })
  }


  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.generateCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection

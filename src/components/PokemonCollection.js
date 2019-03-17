import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (<div>
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
      </Card.Group>
      {this.props.pokemons.map(pokemon => <PokemonCard
        key={pokemon.id}
        
        pokemon={pokemon}/>)}
        </div>
    )
  }
}

export default PokemonCollection

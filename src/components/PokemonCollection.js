import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    const pokemonCards = this.props.pokemons.map(pokemon => <PokemonCard
                                                              key={pokemon.id}
                                                              pokemon={pokemon}
                                                              onClickOfPokemonCard={this.props.onClickOfPokemonCard}
                                                            />)
    return (
      <div>
        <h1>Hello From Pokemon Collection</h1>
        <Card.Group itemsPerRow={6}>
          {pokemonCards}
        </Card.Group>
      </div>
    )
  }
}

export default PokemonCollection

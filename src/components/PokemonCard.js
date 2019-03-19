import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      imgURL: true
    }
  }

  pokemonHp =(pokemon)=>{
    let statObj = pokemon.stats.filter(stat => stat.name === "hp")
    return statObj[0].value
  }

  render() {

    return (
      <Card>
        <div>
          <div className="image" >
            <img src={this.state.imgURL ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.pokemonHp(this.props.pokemon)}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

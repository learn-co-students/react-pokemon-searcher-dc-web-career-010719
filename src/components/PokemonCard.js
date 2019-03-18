import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor() {
    super()
    this.state = {cardFront: true}
  }

  // Flip card
  toggleDirection = () => {
    this.setState({cardFront: !this.state.cardFront})
  }

  render() {
    let {name, sprites: {back, front}} = this.props.pokemonObj
    let stats = this.props.pokemonObj.stats
    return (
      <Card>
        <div onClick={this.toggleDirection}>
          <div className="image">
            <img src={this.state.cardFront ? front : back} alt={name} />
          </div>
          <div className="content">
            <div className="header">{name.toUpperCase()}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stats[stats.length-1].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

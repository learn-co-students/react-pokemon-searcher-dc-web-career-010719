import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {card: this.props.pokemon.sprites.front}

  changeSide = () => {
    this.setState({card: this.state.card === this.props.pokemon.sprites.front ? this.props.pokemon.sprites.back : this.props.pokemon.sprites.front})
  }

  render() {
    let {name, stats} = this.props.pokemon
    return (
      <Card onClick={this.changeSide}>
        <div>
          <div className="image">
            <img src={this.state.card} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              <div>{stats.filter((stat)=>stat.name ==='hp').map((s)=>s.value)}</div>
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

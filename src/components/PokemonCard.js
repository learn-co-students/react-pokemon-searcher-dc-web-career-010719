import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  render() {
    const {name, sprites, stats, id, clicked} = this.props.pokemon
    const hp = stats.find(stat => stat.name === 'hp').value
    return (
      <Card onClick={() => this.props.onClickOfPokemonCard(id)}>
        <div>
          <div className="image">
            { clicked
              ?
              <img src={sprites.back} alt="oh no!" />
              :
              <img src={sprites.front} alt="oh no!" />
            }
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
               {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

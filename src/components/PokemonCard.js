import React from 'react'
import { Card } from 'semantic-ui-react'
import PokemonImage from './PokemonImage'


class PokemonCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      front: true,
      url: props.data.sprites.front,
      hp: props.data.stats[5].value
    }
  }

  handleClick = () => {
    this.setState({
      front: !this.state.front
    })

  }

  render() {
    let pokemon = this.props.data
    return (
      <Card>
        <div>
          <div className='image-container'>
          <PokemonImage handleClick={this.handleClick} url={this.props.data.sprites.front} visibility={this.state.front} name={pokemon.name} />
          <PokemonImage handleClick={this.handleClick} url={this.props.data.sprites.back} visibility={!this.state.front} name={pokemon.name} />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.state.hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

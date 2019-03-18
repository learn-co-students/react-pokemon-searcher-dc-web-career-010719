import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(){
    super()
    this.state = {
      toggle: false
    }
  }

  toggleImage = () => {
    this.setState({toggle: !this.state.toggle})
  }
  
  render() {
    const {name, sprites: {front, back}, stats} = this.props.pokemon
    
    return (
      <Card>
        <div>
          <div className="image" onClick={this.toggleImage}>
            <img alt={name} src={this.state.toggle ? back : front} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stats.filter(stat => stat.name === 'hp')[0].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

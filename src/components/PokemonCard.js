import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(){
    super()
    this.state={
      toggleView: true
    }
  }

 handleClick = (e) => {
   debugger
   this.setState({
     toggleView: !this.state.toggleView
   })
 }

  render() {
    return (
      <Card onClick={(e) => this.handleClick(e)}>
        <div>
          <div className="image">
          { this.state.toggleView ?
            <img alt="oh no!" src={this.props.pokemon.sprites.front}/>
            :
            <img alt="oh no!" src={this.props.pokemon.sprites.back}/>
          }
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.value} hp
            </span>
            <button>x</button>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(){
    super()
    this.state = {
      flipped: false
    }
  }

  handleFlip=()=>{
    this.setState({
      flipped: !this.state.flipped
    })
  }


  getHp(){
    let hp = 0
    this.props.poke.stats.forEach((atr)=>{
      if(atr.name === "hp"){
        hp =  atr.value
      }
    })
    return hp
  }

  render() {
    let name = this.props.poke.name
    let frontImg = this.props.poke.sprites.front
    let backImg = this.props.poke.sprites.back
    return (
      <Card>
        <div onClick={this.handleFlip}>
          <div className="image">
            {this.state.flipped?
              <img src={backImg} alt="oh no!" />
              :
              <img src={frontImg} alt="oh no!" />
            }
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.getHp()}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

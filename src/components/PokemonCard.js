import React from 'react';
import { Card } from 'semantic-ui-react';

class PokemonCard extends React.Component {
  constructor() {
    super();
    this.state = {
      display: false
    };
  }

  getStat = val => {
    let statArray;
    statArray = this.props.pokemon.stats.filter(stat => stat.name === val);
    return statArray[0].value;
  };

  handleClick = () => {
    this.setState({
      display: !this.state.display
    });
  };



  render() {
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img
              alt="oh no!"
              src={
                this.state.display
                  ? this.props.pokemon.sprites.back
                  : this.props.pokemon.sprites.front
              }
            />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.getStat('hp')}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;

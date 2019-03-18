import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  constructor() {
    super();
    this.state = {
      front: true
    };
  }

  handleClick = () => {
    this.setState({
      front: !this.state.front
    });
  };

  render() {
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img
              src={
                this.state.front
                  ? this.props.pokemonObj.sprites.front
                  : this.props.pokemonObj.sprites.back
              }
              alt="oh no!"
            />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemonObj.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemonObj.stats[5].value} HP
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;

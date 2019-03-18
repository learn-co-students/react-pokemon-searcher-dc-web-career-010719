import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";

class PokemonPage extends React.Component {
  constructor() {
    super();
    this.state = {
      allPokemon: [],
      searchContent: ""
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(res => res.json())
      .then(json =>
        this.setState({
          allPokemon: json
        })
      );
  }
  addPokemon = pokemon => {
    this.setState({
      allPokemon: [...this.state.allPokemon, pokemon]
    });
  };

  handleSearch = e => {
    this.setState({
      searchContent: e
    });
  };

  filterPokemon = () => {
    return this.state.allPokemon.filter(pokemonObj => {
      return pokemonObj.name.includes(this.state.searchContent);
    });
  };

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search
          onSearchChange={e => this.handleSearch(e.target.value)}
          showNoResults={false}
        />
        <br />
        <PokemonCollection pokemon={this.filterPokemon()} />
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
      </div>
    );
  }
}

export default PokemonPage;

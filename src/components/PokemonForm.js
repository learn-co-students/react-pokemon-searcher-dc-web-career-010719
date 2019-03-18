import React from "react";
import { Form } from "semantic-ui-react";

class PokemonForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      hp: "",
      frontUrl: "",
      backUrl: ""
    };
  }

  handleNameChange = target => {
    this.setState({
      name: target.value
    });
  };
  handleHpChange = target => {
    this.setState({
      hp: target.value
    });
  };
  handleFrontUrlChange = target => {
    this.setState({
      frontUrl: target.value
    });
  };
  handleBackUrlChange = target => {
    this.setState({
      backUrl: target.value
    });
  };

  handleSubmitForm = () => {
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        stats: [
          {},
          {},
          {},
          {},
          {},
          {
            value: this.state.hp,
            name: "hp"
          }
        ],
        sprites: {
          front: this.state.frontUrl,
          back: this.state.backUrl
        }
      })
    })
      .then(resp => resp.json())
      .then(pokemon => this.props.addPokemon(pokemon));
  };
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              onChange={e => this.handleNameChange(e.target)}
              fluid
              label="Name"
              placeholder="Name"
              name="name"
            />
            <Form.Input
              onChange={e => this.handleHpChange(e.target)}
              fluid
              label="hp"
              placeholder="hp"
              name="hp"
            />
            <Form.Input
              onChange={e => this.handleFrontUrlChange(e.target)}
              fluid
              label="Front Image URL"
              placeholder="url"
              name="frontUrl"
            />
            <Form.Input
              onChange={e => this.handleBackUrlChange(e.target)}
              fluid
              label="Back Image URL"
              placeholder="url"
              name="backUrl"
            />
          </Form.Group>
          <Form.Button onClick={this.handleSubmitForm}>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default PokemonForm;

import React from 'react';
import { Form } from 'semantic-ui-react';

class PokemonForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      hp: '',
      front: '',
      back: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewPokemon(this.state);
    this.setState({
      name: '',
      hp: '',
      front: '',
      back: ''
    });
  };

  handleChange = event => {
   typeof event.target.value === 'string' ? this.setState({[event.target.name]: event.target.value}): this.setState({[event.target.name]: parseInt(event.target.value)})}

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Name"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              label="hp"
              placeholder="hp"
              name="hp"
              value={this.state.hp}
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              label="Front Image URL"
              placeholder="url"
              name="front"
              value={this.state.front}
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              label="Back Image URL"
              placeholder="url"
              name="back"
              value={this.state.back}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default PokemonForm;

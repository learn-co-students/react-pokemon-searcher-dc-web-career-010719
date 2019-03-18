import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()
    this.state = {name: '', hp: '', frontURL: '', backURL: ''}
  }

  // Event handlers
  handleChange = event => {
    event.persist()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(this.formatNewPokemon())
    }).then(this.props.update)
    this.resetForm()
  }

  // Helpers
  formatNewPokemon() {
    return ({
      name: this.state.name,
      stats: [{name: "hp", value: this.state.hp}],
      sprites: {front: this.state.frontURL, back: this.state.backURL}
    })
  }

  resetForm = () => {
    this.setState({name: '', hp: '', frontURL: '', backURL: ''})
  }

  // Render page
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form id="pokemon-form" onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.handleChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontURL" value={this.state.frontURL} onChange={this.handleChange}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backURL" value={this.state.backURL} onChange={this.handleChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm

import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      name: e.currentTarget.name.value,
      hp: e.currentTarget.hp.value,
      frontUrl: e.currentTarget.frontUrl.value,
      backUrl: e.currentTarget.backUrl.value
    }, () => {
      fetch('http://localhost:3000/pokemon', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
    'Content-Type': 'application/json',
          },
          body: JSON.stringify({
    name: this.state.name,
    stats: [{
      value: this.state.hp,
      name: 'hp'
    }],
    sprites: {
      front: this.state.frontUrl,
      back: this.state.backUrl
    }
      })
    })
    .then(res => res.json())
    .then(pokeData => this.props.addPokemon(pokeData))
  })
}


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm

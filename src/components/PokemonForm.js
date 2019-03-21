import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.PureComponent {
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
    e.persist()
    e.preventDefault()
    const pokeForm = e.target
    this.setState({name: pokeForm[0].value,
    hp: pokeForm[1].value,
    frontUrl: pokeForm[2].value,
    backUrl: pokeForm[3].value}, () => this.postPokemon())
  }

  postPokemon() {
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        stats: [0, 0, 0, 0, 0, {value: this.state.hp}],
        sprites: {
          front: this.state.frontUrl,
          back: this.state.backUrl
        }
      })
    }).then(resp => resp.json())
    .then(pokeson => {
      console.log(this)
      this.props.addPokemon(pokeson)
      document.querySelector('form').reset()
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
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

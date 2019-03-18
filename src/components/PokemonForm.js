import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault()
    let name = event.target.querySelectorAll('input')[0].value
    let hp = event.target.querySelectorAll('input')[1].value
    let front = event.target.querySelectorAll('input')[2].value
    let back = event.target.querySelectorAll('input')[3].value
    this.props.onSubmit({name:name, stats:[{name: 'hp', value: hp}], sprites: {front: front, back: back}})
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

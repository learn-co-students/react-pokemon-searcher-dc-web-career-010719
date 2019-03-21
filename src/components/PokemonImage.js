import React from 'react'
import { Card, Transition } from 'semantic-ui-react'

class PokemonImage extends React.PureComponent {

    handleClick = () => {
        this.props.handleClick()
    }

    render() {
        return (<Transition visible={this.props.visibility} animation='horizontal flip' duration={800} >
              <img className='image' onClick={this.handleClick} alt={`${this.props.name} is gone!`} src={this.props.url} />
        </Transition>)
    }
}

export default PokemonImage
// props needed are pokemon image, pokemon name, and visibility
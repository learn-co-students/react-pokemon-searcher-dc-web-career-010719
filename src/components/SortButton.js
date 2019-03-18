import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class SortButton extends Component {
  constructor() {
    super()
    this.state = {active: ""}
  }

  handleClick = () => {
    this.state.active ? this.setState({active: ""}) : this.setState({active: "active"})
    this.props.sort()
  }

  render() {
    return(
      <Button className={this.state.active} onClick={this.handleClick}>Sort By Name</Button>
    )
  }
}

export default SortButton

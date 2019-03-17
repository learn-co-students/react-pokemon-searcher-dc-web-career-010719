import React, {Component} from 'react'

const PokemonSort = props => {
  return (
      <label>
        <input id="sort-by-name" type="checkbox" onChange={props.handleClickOfSort}/> Sort By Name
      </label>
  )
}

export default PokemonSort

import React from 'react'

const Input = ({ colorValue, setColorValue }) => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label>Add color value:</label>
      <input
        autoFocus
        type="text"
        placeholder="Add color name"
        required
        value={ colorValue }
        onChange={(event) => setColorValue(event.target.value)}
      />
    </form>
  )
}

export default Input
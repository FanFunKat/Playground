import { useState } from 'react'
import './App.css'

function App() {
  let message = 'Bye there!'
  if (Math.random() > 0.5) {
    message = 'Hello there!'
  }

  const name = 'Katarzyna'

  // const date = new Date();
  // const time = date.toLocaleTimeString();

  const inputType = 'number';
  const minValue = 5

  return (
    <div className='App'>
      <h1>{new Date().toLocaleTimeString()}</h1>
      <h2>{message} {name}</h2>
      <input
        type={inputType}
        min={minValue}
        max={20}
        style={{ border: '3px solid red' }}
      />
    </div>
  )
}

export default App
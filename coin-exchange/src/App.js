import React from 'react'
import logo from './logo.svg'
import './App.css'

let sum = 0
// type "fof" hit enter:
for (let num of [1, 2, 3, 4, 5]) {
  sum += num
}

// to make this, write "prom" hit enter:
return (
  new Promise((resolve, reject) => {})
    // "thenc" hit enter:
    .then((result) => {})
    .catch((err) => {})
)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Coin Exchange {sum}</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App

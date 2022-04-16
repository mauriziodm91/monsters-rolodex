import { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor() {
    super() //super calls the underline constructor method in Component
    this.state = {
      monsters: [
        {
          name: 'lynda',
          id: '12e12313',
        },
        {
          name: 'Frank',
          id: '12ed2dacas',
        },
        {
          name: 'Jacky',
          id: '12e1e213',
        },
      ],
    } //instantiate the state its always a json object
  }

  render() {
    return (
      <div className='App'>
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App

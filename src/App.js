import { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor() {
    super() //super calls the underline constructor method in Component
    this.state = {
      monsters: [],
    } //instantiate the state its always a json object
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') //returning a promise
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users }
          },
          () => {
            console.log(this.state)
          }
        )
      )
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

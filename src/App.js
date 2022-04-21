import { Component } from 'react'
import './App.css'

import Cardlist from './components/card-list/card-list.component'

class App extends Component {
  constructor() {
    super() //super calls the underline constructor method in Component
    this.state = {
      monsters: [],
      searchField: '',
    } //instantiate the state its always a json object
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') //returning a promise
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users }
        })
      )
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()

    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    const { monsters, searchField } = this.state
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField) //New Array with filtered results
    })

    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={onSearchChange}
        />
        <Cardlist monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App

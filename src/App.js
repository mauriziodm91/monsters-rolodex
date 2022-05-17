import { useState, useEffect } from 'react'
import './App.css'

import CardList from './components/card-list/card-list.component'
import SearchBox from './components/searchbox/search-box.component'

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)
  console.log('render')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') //returning a promise
      .then((response) => response.json())
      .then((users) => setMonsters(users))
    console.log('fetch event fired')
  }, [])

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField) //New Array with filtered results
    })
    setFilteredMonsters(newfilteredMonsters)
    console.log('filtered event fired')
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App

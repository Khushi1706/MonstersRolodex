import React, { Component } from 'react';
import './App.css';
import { CardList } from './Components/card-list/card-list.component'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    console.log(filteredMonsters, searchField);
    return (
      <div className="App">
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    );
  }
  //, () => console.log(this.state)
}
export default App;

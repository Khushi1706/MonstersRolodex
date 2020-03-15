import React, { Component } from 'react';
import './App.css';
import { CardList } from './Components/card-list/card-list.component'
import { SearchBox } from './Components/search-box/search-box.component'

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
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }
  handleClick() {
    console.log("i ran successfully");
  }

  // handleChange(e) {
  //   this.setState({ searchField: e.target.value });
  // }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    console.log(filteredMonsters, searchField);
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monsters here' handleChange={this.handleChange}></SearchBox>
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    );
  }
  //, () => console.log(this.state)
}
export default App;

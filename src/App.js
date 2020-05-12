import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons:
    [
      {name: 'Bishal', age: '25'},
      {name: 'Raktim', age: '26'},
      {name: 'Yatra', age: '27'}
    ],
    otherState: 'SomeOtherValue',
    showPersons: false
  }


  switchNameHandler = (newName) => {
    //alert('The button is clicked!');
    this.setState({
      persons:
      [
        {name: newName, age: '29'},
        {name: 'Paila', age: '30'},
        {name: 'Sangram', age: '31'}
      ]
    })
  }

  changeEventHandler = (event) => {
    //alert('The button is clicked!');
    this.setState({
      persons:
      [
        {name: 'Bishal', age: '29'},
        {name: event.target.value, age: '30'},
        {name: 'Sangram', age: '31'}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />

          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Raktim!!!')}
            change={this.changeEventHandler}>My Hobbies: Playing Chess
          </Person>

          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div>
      );  
    }

    return (
      <div className="App">
        <h1>Learning React from Scratch!</h1>

        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>

        {persons}

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons:
    [
      {id: 'first', name: 'Bishal', age: '25'},
      {id: 'second', name: 'Raktim', age: '26'},
      {id: 'third', name: 'Yatra', age: '27'}
    ],
    otherState: 'SomeOtherValue',
    showPersons: false
  }


  changeEventHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    // console.log('not updated:', person);

    person.name = event.target.value;
    // console.log('updated: ', person);

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (indexPerson) => {
    //console.log('the clicked index is: ', indexPerson);
    const updatePerson = [...this.state.persons];
    updatePerson.splice(indexPerson, 1);
    this.setState({persons: updatePerson});
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
          {this.state.persons.map((person, index) => {
            //console.log('index: ', index);
            // console.log(person);
            return (
              <Person
                name={person.name}
                age={person.age}
                click={this.deletePersonHandler.bind(this, index)}
                key={person.id}
                change={(event) => this.changeEventHandler(event, person.id)}
              />
              // click={() => this.deletePersonHandler(index)}
            );
          })}
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

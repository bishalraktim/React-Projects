import React, { Component } from 'react';
import classes from './App.module.css';
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
    let addClass = '';
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

      addClass = classes.buttonClass;
    }

    const assignedclass = [];
    if(this.state.persons.length <= 2){
      assignedclass.push(classes.colors);
    }

    if(this.state.persons.length <= 1){
      assignedclass.push(classes.font);
    }

    return (
      <div className={classes.App}>
        <h1 className={assignedclass.join(' ')}>Learning React from Scratch!</h1>

        <button
          className={addClass}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>

        {persons}

      </div>
    );
  }
}

export default App;

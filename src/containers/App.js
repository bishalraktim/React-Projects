import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';

class App extends Component {
  state = {
    persons:
    [
      {id: 'first', name: 'Bishal', age: 25},
      {id: 'second', name: 'Raktim', age: 26},
      {id: 'third', name: 'Yatra', age: 27}
    ],
    otherState: 'SomeOtherValue',
    showPersons: false,
    changeCounter: 0,
    isAuthenticated: false
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

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };


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

  verifyAuthentication = () => {
    this.setState({isAuthenticated: true});
  }

  render() {
    let persons = null;

    if(this.state.showPersons){
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.changeEventHandler}
        authentication={this.state.isAuthenticated}
        />
    }

    return (
      <Aux>
        <AuthContext.Provider value={{
          isAuthenticated: this.state.isAuthenticated,
          login: this.verifyAuthentication
        }}>
          <Cockpit
            title={this.props.appTitle}
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            toggled={this.togglePersonsHandler}
          />
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);

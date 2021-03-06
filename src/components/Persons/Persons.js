import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  render() {
    console.log('[Persons.js] rendering !!!!');

    return this.props.persons.map((person, index) => {

      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          click={this.props.clicked.bind(this, index)}
          change={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;

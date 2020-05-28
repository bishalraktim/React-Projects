import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from './Person.module.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log('Check this: ', this.context.isAuthenticated); // this keyword here is given by React
  }

  render() {
    console.log('[Person.js] rendering.....');

    return (
      <Aux>
        {this.context.isAuthenticated ? <p>Authenticated!</p> : <p>Please log in!</p>}
        <p onClick={this.props.click}>
          I will learn React anyhow! {<br />}
          I am {this.props.name} and am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>

        <input
          type='text'
          onChange={this.props.change}
          value={this.props.name}
          // ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
        />

      </Aux>
    );

  }
};

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func
};

export default withClass(Person, classes.Person);

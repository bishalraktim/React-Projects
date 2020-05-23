import React from 'react';
import personClass from './Person.module.css';

const person = (props) => {

  return (
    <div className={personClass.Person}>
      <p onClick={props.click}>
        I will learn React anyhow! {<br />}
        I am {props.name} and am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.change} value={props.name}/>
    </div>
  );
};

export default person;

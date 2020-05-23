import React from 'react';
import './Person.css';

const person = (props) => {

  return (
    <div>
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

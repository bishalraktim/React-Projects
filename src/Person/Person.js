import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className='Person'>
      <p>
        I will learn React anyhow! {<br />}
        I am {props.name} and am {props.age} years old!
      </p>
      <p onClick={props.click}>{props.children}</p>
      <input type='text' onChange={props.change} value={props.name}/>
    </div>
  );
};

export default person;

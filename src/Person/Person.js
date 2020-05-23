import React from 'react';
import personClass from './Person.module.css';

const person = (props) => {

  const rnd = Math.random();
  if(rnd > 0.8) {
    throw new Error('There is something wrong!');
  }

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

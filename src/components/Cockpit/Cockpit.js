import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit =(props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);
  console.log('The authContext is: ', authContext);

  useEffect(() => {
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] clean up work in useEffect');
    };
  }, []);

  let addClass = '';
  const assignedclass = [];

  if(props.showPersons){
    addClass = classes.buttonClass;
  }

  if(props.persons.length <= 2){
    assignedclass.push(classes.colors);
  }

  if(props.persons.length <= 1){
    assignedclass.push(classes.font);
  }


  return(
    <div className={classes.Cockpit}>
      <h1 className={assignedclass.join(' ')}>{props.title}</h1>

      <button
        className={addClass}
        ref={toggleBtnRef}
        onClick={props.toggled}>Toggle Persons
      </button>
      <button onClick={authContext.login}>Log In</button>
    </div>
  );
}

export default Cockpit;

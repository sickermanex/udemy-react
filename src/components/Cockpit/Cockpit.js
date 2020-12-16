import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    const timer = setTimeout(() => {
      alert('Save data to cloud');
    }, 1000);
    return () => {
      console.log('[Cockpit.js] cleanup for useEffect');
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup for 2nd useEffect')
    };
  });

  const classNames = [];
  if (props.peopleLength <= 2) { 
    classNames.push('red');
  }
  if (props.peopleLength <= 1) {
    classNames.push('bold')
  }
  return (
    <div>
      <h1>{props.title}</h1>
      <p className={classNames.join(' ')}>This is really working!!!</p>
      <button className='button'
        onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
};

export default React.memo(Cockpit);
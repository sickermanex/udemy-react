import React from 'react';

import classes from './Cockpit.css';

const Cockpit = (props) => {
  const classNames = [];
  if (props.people.length <= 2) { 
    classNames.push('red');
  }
  if (props.people.length <= 1) {
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

export default Cockpit;
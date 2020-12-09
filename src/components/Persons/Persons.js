import React from 'react';

import Person from './Person/Person'

const Persons = (props) => {
  console.log('[Persons.js] rendering...');
  return props.people.map((person, index) => {
    // return <ErrorBoundary key={person.id}>
    return <Person 
      key={person.id}                              
      name={person.name}
      age={person.age}
      click={() => props.click(index)} //una alternativa es this.deletePersonHandler.bind(this, index)
      changed={(event) => props.changed(event, person.id)}
    />
    // </ErrorBoundary>       
  });
};

export default Persons;
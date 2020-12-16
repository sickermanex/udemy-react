import React, { Component } from 'react';

import Person from './Person/Person'

class Persons extends Component {
  // static getDerivedStateFromProps(props, state){
  //   console.log('[Persons.js] getDerivedStateFromProps', props)
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    /* Debe retornar true o false para definir si el componente se 
      debe actualizar o no, basado en alguna condición no hard coding el valor */
    console.log('[Persons.js] shouldComponentUpdate');
    return nextProps.people !== this.props.people;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate', snapshot);
  }

  render() {
    console.log('[Persons.js] rendering...');
    return this.props.people.map((person, index) => {
      // return <ErrorBoundary key={person.id}>
      return <Person
        key={person.id}
        name={person.name}
        age={person.age}
        click={() => this.props.click(index)} //una alternativa es this.deletePersonHandler.bind(this, index)
        changed={(event) => this.props.changed(event, person.id)}
      />
      // </ErrorBoundary>       
    });
  }
}

export default Persons;
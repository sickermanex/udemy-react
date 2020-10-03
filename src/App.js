import React, { useState, Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent'
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

// const StyledButton = styled.button`
//   background-color: ${props => props.toggle ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${props => props.toggle ? 'salmon' : 'lightgreen'};
//     color: ${props => props.toggle ? 'white' : 'black'};
//   }
// `;

class App extends Component {
// const App = (props) => {
  state = {
  // const [peopleState, setPeopleState] = useState({
    people: [
      { id: '0950', name: 'Manu', age: 27 },
      { id: '65132', name: 'Rosi', age: 18 },
      { id: '4936', name: 'Keylor', age: 33 }
    ],
    username: 'Manu',
    showPersons: false,
    assignment2: ''
  }
  // });

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(person => {
      return person.id === id;
    });

    const person = {
      ...this.state.people[personIndex]
    };

    //const person = Object.assign({}, this.state.people[personIndex]);

    person.name = event.target.value;
    const people = [...this.state.people];
    people[personIndex] = person;

    this.setState({
      people: people
    });
  };

  assignmentStateChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  };

  deletePersonHandler = (personIndex) => {
    // const people = this.state.people.slice();
    const people = [...this.state.people];
    people.splice(personIndex, 1)
    this.setState({people: people});
  };

  assignmentTwoInputChangeHandler = (event) => {
    this.setState({
      assignment2: event.target.value
    })
  };

  assignmentTwoDeleteCharHandler = (charIndex) => {
    const chars = [...this.state.assignment2.split('')];
    chars.splice(charIndex, 1);
    this.setState({assignment2: chars.join('')});
  };

  render(){
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.people.map((person, index) => {
            // return <ErrorBoundary key={person.id}>
            return <Person 
              key={person.id}                              
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)} //una alternativa es this.deletePersonHandler.bind(this, index)
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
            // </ErrorBoundary>       
          })}
          {/* <Person 
          name={this.state.people[0].name} 
          age={this.state.people[0].age}
          click={this.switchNameHandler}
          changed={this.nameChangedHandler}>My hobbies: Gaming</Person>*/}
        </div>
      );
    }

    let charComponent = (
      <div>
        {this.state.assignment2.split('').map((char, index) => {
          return <CharComponent
            key={index}
            character={char}
            click={() => this.assignmentTwoDeleteCharHandler(index)}
          />
        })}
      </div>
    );

    const classNames = [];
    if(this.state.people.length <= 2){
      classNames.push('red');
    }
    if(this.state.people.length <= 1){
      classNames.push('bold')
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classNames.join(' ')}>This is really working!!!</p>
        <button className='button'
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
        <h3>Assignment 1</h3>
        <UserInput 
            change={this.assignmentStateChangeHandler}
            username={this.state.username}
          />       
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <h3>Assignment 2</h3>
        <input type="text" value={this.state.assignment2} onChange={(event) => this.assignmentTwoInputChangeHandler(event)}/>
        <p>{this.state.assignment2.length}</p>
        <ValidationComponent stringLength={this.state.assignment2.length}/>
        {charComponent}
      </div>
    );
  }
}

export default App;

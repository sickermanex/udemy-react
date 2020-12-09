import React, { Component } from 'react';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
    //El state puede ir aqui this.setState, no usar this.setState()
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props)
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }


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
    this.setState({ people: people });
  };

  assignmentTwoInputChangeHandler = (event) => {
    this.setState({
      assignment2: event.target.value
    })
  };

  assignmentTwoDeleteCharHandler = (charIndex) => {
    const chars = [...this.state.assignment2.split('')];
    chars.splice(charIndex, 1);
    this.setState({ assignment2: chars.join('') });
  };

  render() {
    console.log('[App.js] render')
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        people={this.state.people}
        click={this.deletePersonHandler} //una alternativa es this.deletePersonHandler.bind(this, index)
        changed={this.nameChangedHandler}
      />
    }

    return (
      <div className="App">
        <Cockpit
          title={this.props.appTitle}
          showPeople={this.state.showPersons}
          people={this.state.people}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;

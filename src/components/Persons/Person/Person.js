import React, { Component } from 'react';
import styled from 'styled-components';

// import './Person.css';

const StyledDiv = styled.div`      
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
`;

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...')
    return (
      // <div className="Person">
      <StyledDiv>
        <p onClick={this.props.click}>I'm {this.props.name}! And I'm {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" value={this.props.name} onChange={this.props.changed} />
      </StyledDiv>
    )
  }
}

export default Person;
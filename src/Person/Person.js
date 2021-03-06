import React from 'react';
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

const person = (props) => {
  // const rnd = Math.random();
  // if(rnd > 0.7){
  //   throw new Error('Something went wrong');
  // }
  return (
    // <div className="Person">
    <StyledDiv>
      <p onClick={props.click}>I'm {props.name}! And I'm {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.changed} />
    </StyledDiv>
  )
};

export default person;
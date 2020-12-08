import React from 'react';

import './UserInput.css';

const userInput = (props) => {
  const style = {
    color: 'blue',
    backgroundColor: 'red'
  }
  return(
    <div className="UserInput">
      <label>Insert your text here: </label>
      <input style={style} value={props.username} onChange={props.change} type="text" />
    </div>
  )
}

export default userInput
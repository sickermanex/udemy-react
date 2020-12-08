import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
  const style = {
    color: 'red',
    backgroundColor: 'blue'
  }
  return(
    <div className="UserOutput">
      <p style={style}>The username is:</p>
      <p>{props.username}</p>
    </div>
  )
}

export default userOutput
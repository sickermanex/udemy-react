import React from 'react';

const charComponent = (props) => {
  let style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
  };
  return(
    <div onClick={props.click} style={style}>
      <p>{props.character}</p>
    </div>
  );
};

export default charComponent;
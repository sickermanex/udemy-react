import React from 'react';

const validationComponent = (props) => {
  let content = null;
  if(props.stringLength >= 5){
    content = (
      <div>
        <p>{props.stringLength < 10 ? "Text too short" : "Text long enough"}</p>
      </div>
    );
  }
  return (
    <div>
      {content}
    </div>
  );
};

export default validationComponent;
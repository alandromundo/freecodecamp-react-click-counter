import React from 'react';

function Button(props) {

  const onClick = () => {
    if(!props.isReset) {
      props.setCounter(prevState => prevState + 1); 
    } else {
      props.setCounter(0);
    }
  }

  return(
    <button onClick={onClick}>
      {props.value}
    </button>
  );
}

export { Button };
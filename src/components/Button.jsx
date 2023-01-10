import React from 'react';
import '../styles/Button.css'

function Button(props) {

  const onClick = () => {
    if(!props.isReset) {
      props.setCounter(prevState => prevState + 1); 
    } else {
      props.setCounter(0);
    }
  }

  return(
    <button className= {'Button ' + props.value + 'Button'} onClick={onClick}>
      {props.value}
    </button>
  );
}

export { Button };
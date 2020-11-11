import React from 'react';
export default function Button(props) {
  return (
    <button
      style={{ backgroundColor: props.numeroDeCliques % 2 === 0 ? 'green' : 'red' }}
      onClick={props.handleClick}>
      {props.numeroDeCliques}
    </button>
  )
}
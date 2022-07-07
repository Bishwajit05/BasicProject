import React from 'react';
import clases from './Card.module.css';

function Card(props) {
  return (
    <div className={`${clases.card} ${props.className}`}> {props.children}</div>
  );
}

export default Card;

import React from 'react';
import './ButtonComponent.css';

const ButtonCompnent = ({ label, arrow }) => {
  const symbol = arrow ? <span>&rarr;</span> : null;
  return (
  <button className="btn btn--green">{label} {symbol}</button>
  )
}

export default ButtonCompnent;
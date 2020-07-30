import React from 'react';
import './ButtonText.css';

const ButtonText = ({label, arrow}) => {
  const symbol = arrow ? <span>&rarr;</span> : null;
  return <button className="btn-text">{label} {symbol}</button>;
}

export default ButtonText;

// 
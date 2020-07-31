import React from 'react';
import './Emblem.css';

import abstract from '../images/abstract.png';

const Emblem = () => {
  return (
    <div className="emblem">
      <div className="emblem__background">
        <img src={abstract} alt="emblem" className="emblem__image"/>
      </div>
    </div>
  )
}

export default Emblem;
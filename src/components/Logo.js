import React from 'react';
import './Logo.css';

import abstract from '../images/abstract.png';

const Logo = () => {
  return (
    <div className="logo">
      <div className="logo__background">
        <img src={abstract} alt="logo" className="logo__image"/>
      </div>
    </div>
  )
}

export default Logo;
import React from 'react';
import './LogoSmall.css';

import abstract from '../images/abstract.png';

const LogoSmall = () => {
  return (
    <div className="logo-small">
      <div className="logo-small__background">
        <img src={abstract} alt="logo-small" className="logo-small__image"/>
      </div>
    </div>
  )
}

export default LogoSmall;
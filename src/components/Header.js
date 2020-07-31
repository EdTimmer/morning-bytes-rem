import React from 'react';
import './Header.css';
import Emblem from "./Emblem";

// import lanzarote from '../images/lanzarote.png';
// import abstract from '../images/abstract.png';

const Header = () => {
  return (
    <div className="header">
      <div className="header__row u-margin-top-big">

        <Emblem />

      </div>

      <div className="header__row">
        <h1 className="heading-primary">
          <span className="heading-primary--main">César Manrique</span>
          <span className="heading-primary--sub">travel agency</span>
        </h1>
      </div>
    </div>
  );
}

export default Header;

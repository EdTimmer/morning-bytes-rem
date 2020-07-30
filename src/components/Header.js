import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header__row">
        <div className="header__item header__item--text-rem">px</div>
        <div className="header__item header__item--text-rem">rem</div>
        <div className="header__item header__item--text-rem">%</div>
      </div>

      <div className="header__row">
        <div className="header__item header__item--text-px">Abcdefg</div>
        <div className="header__item header__item--text-rem">Abcdefg</div>
        <div className="header__item header__item--text-percent">&nbsp;</div>
      </div>

      <div className="header__row">
        <div className="header__item header__item--rectangle-px">&nbsp;</div>
        <div className="header__item header__item--rectangle-rem">&nbsp;</div>
        <div className="header__item header__item--rectangle-percent">
          Abcdefg
        </div>
      </div>

      <div className="header__row">
        <div className="header__item header__item--circle-px">Abcdefg</div>
        <div className="header__item header__item--circle-rem">Abcdefg</div>
        <div className="header__item header__item--circle-percent">Abcdefg</div>
      </div>

      <div className="header__row">
        <div className="header__item header__item--triangle-px">Abcdefg</div>
        <div className="header__item header__item--triangle-rem">Abcdefg</div>
        <div className="header__item header__item--triangle-percent">
          Abcdefg
        </div>
      </div>
    </div>
  );
}

export default Header;

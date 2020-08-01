import React from 'react';
import './Footer.css';

import LogoSmall from "./LogoSmall";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo-container">
        <LogoSmall />
      </div>
      <div className="footer__nav-container">
        <div className="footer__navigation">
          <ul className="footer__list">
            <li className="footer__item">
              <a
                href="https://en.wikipedia.org/wiki/Lanzarote"
                className="footer__link"
                rel="noopener noreferrer"
                target="_blank"
              >
                Lanzarote
              </a>
            </li>

            <li className="footer__item">
              <a
                href="https://en.wikipedia.org/wiki/Timanfaya_National_Park"
                className="footer__link"
                rel="noopener noreferrer"
                target="_blank"
              >
                Timanfaya
              </a>
            </li>

            <li className="footer__item">
              <a
                href="https://en.wikipedia.org/wiki/C%C3%A9sar_Manrique"
                className="footer__link"
                rel="noopener noreferrer"
                target="_blank"
              >
                César Manrique
              </a>
            </li>

            <li className="footer__item">
              <a
                href="https://www.udemy.com/course/advanced-css-and-sass/"
                className="footer__link"
                rel="noopener noreferrer"
                target="_blank"
              >
                CSS Class
              </a>
            </li>

            <li className="footer__item">
              <a
                href="https://www.giantmachines.com/"
                className="footer__link"
                rel="noopener noreferrer"
                target="_blank"
              >
                Giant Machines
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
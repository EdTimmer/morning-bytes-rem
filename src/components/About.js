import React from 'react';
import './About.css';

import ButtonText from "./ButtonText";
import FlipImage from "./FlipImage";

const About = () => {
  return (
    <div className="about">
      <div className="u-center-text u-margin-bottom-medium u-margin-top-medium">
        <h2 className="heading-secondary">Lanzarote is waiting for you</h2>
      </div>

      <div className="about-row">
        <div className="about-description">
          <div className="u-margin-bottom-small">
            <h2 className="heading-tertiary">
              You're going to fall in love with Lanzarote
            </h2>
          </div>

          <p className="paragraph">
            <a
              href="https://en.wikipedia.org/wiki/Lanzarote"
              className="about__link"
              rel="noopener noreferrer"
              target="_blank"
            >
              Lanzarote
            </a> is a Spanish island, the northernmost and easternmost of the
            autonomous <a
              href="https://en.wikipedia.org/wiki/Canary_Islands"
              className="about__link"
              rel="noopener noreferrer"
              target="_blank"
            >
              Canary Islands
            </a> in the Atlantic Ocean. Located in the centre-west of the
            island is <a
              href="https://en.wikipedia.org/wiki/Timanfaya_National_Park"
              className="about__link"
              rel="noopener noreferrer"
              target="_blank"
            >
              Timanfaya National Park
            </a>, one of its main attractions. The island was declared a biosphere
            reserve by UNESCO in 1993.
          </p>

          <div className="u-margin-bottom-small">
            <h2 className="heading-tertiary">Island as art</h2>
          </div>

          <p className="paragraph">
            <a
              href="https://artzine.com/articles/cesar-manrique-the-artist-who-created-tourist-attractions-to-avoid-tourism"
              className="about__link"
              rel="noopener noreferrer"
              target="_blank"
            >
              César Manrique
            </a> (24 April 1919 - 25 September 1992) was a Spanish artist, sculptor,
            architect and activist from Lanzarote. His legacy on the island
            includes the art, culture, and many tourist attractions.
          </p>

          <ButtonText label={"Learn more"} arrow={true} />
        </div>

        <div className="about-flip-image">
          <FlipImage />
        </div>
      </div>
    </div>
  );
}

export default About;
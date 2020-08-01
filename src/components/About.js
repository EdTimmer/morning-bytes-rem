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
            </a>
            &nbsp; is a Spanish island, the northernmost and easternmost of the
            autonomous
            <a
              href="https://en.wikipedia.org/wiki/Canary_Islands"
              className="about__link"
              rel="noopener noreferrer"
              target="_blank"
            >
              &nbsp; Canary Islands &nbsp;
            </a>
            in the Atlantic Ocean. It is located approximately 125 kilometres
            (78 miles) off the north coast of Africa and 1,000 kilometres (621
            miles) from the Iberian Peninsula. Located in the centre-west of the
            island is
            <a
              href="https://en.wikipedia.org/wiki/Timanfaya_National_Park"
              className="about__link"
              rel="noopener noreferrer"
              target="_blank"
            >
              &nbsp; Timanfaya National Park &nbsp;
            </a>
            , one of its main attractions. The island was declared a biosphere
            reserve by UNESCO in 1993.
          </p>

          <div className="u-margin-bottom-small">
            <h2 className="heading-tertiary">
              Fire mountains out of this world
            </h2>
          </div>

          <p className="paragraph">
            Lanzarote was born through fiery eruptions and has solidified lava
            streams as well as extravagant rock formations. The island emerged
            about 15 million years ago as product of the Canary hotspot. The
            greatest recorded eruptions occurred between 1730 and 1736 in the
            area now designated Timanfaya National Park.
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
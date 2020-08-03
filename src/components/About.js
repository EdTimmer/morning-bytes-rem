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
            <h2 className="heading-tertiary">Island as art</h2>
          </div>

          <p className="paragraph">
            <a
              href="https://artzine.com/articles/cesar-manrique-the-artist-who-created-tourist-attractions-to-avoid-tourism"
              className="about__link"
              rel="noopener noreferrer"
              target="_blank"
            >
              César Manrique &nbsp;
            </a>
            (24 April 1919 - 25 September 1992) was a Spanish artist, sculptor,
            architect and activist from Lanzarote. His legacy on the island
            includes the art, culture and tourism centre at
            <a
              href="https://en.wikipedia.org/wiki/Jameos_del_Agua"
              className="about__link"
              rel="noopener noreferrer"
              target="_blank"
            >
              &nbsp; Jameos del Agua &nbsp;
            </a>
            (1963-87); his Volcano House,
            <a
              href="http://fcmanrique.org/casas-museo-visitas/fundacion-cesar-manrique-tahiche/?lang=en"
              className="about__link"
              rel="noopener noreferrer"
              target="_blank"
            >
              &nbsp; Taro de Tahiche &nbsp;
            </a>
            (1968); the restaurant at the restored
            <a
              href="https://en.wikipedia.org/wiki/Castillo_de_San_Jos%C3%A9"
              className="about__link"
              rel="noopener noreferrer"
              target="_blank"
            >
              &nbsp; Castillo de San José &nbsp;
            </a>
            at Arrecife (1976); the
            <a
              href="https://lanzaroteinformation.co.uk/timanfaya-vistors-centre/"
              className="about__link"
              rel="noopener noreferrer"
              target="_blank"
            >
              &nbsp; visitors center &nbsp;
            </a>
            at the Timanfaya National Park (1971); his
            <a
              href="http://fcmanrique.org/casas-museo-visitas/casa-museo-cesar-manrique-haria/?lang=en"
              className="about__link"
              rel="noopener noreferrer"
              target="_blank"
            >
              &nbsp; Palm Grove House &nbsp;
            </a>
            at Haria (1986); the
            <a
              href="https://www.cactlanzarote.com/en/cact/mirador-del-rio/"
              className="about__link"
              rel="noopener noreferrer"
              target="_blank"
            >
              &nbsp; Mirador del Rio &nbsp;
            </a>
            (1973), and the
            <a
              href="https://www.cactlanzarote.com/en/cact/jardin-de-cactus/"
              className="about__link"
              rel="noopener noreferrer"
              target="_blank"
            >
              &nbsp; Jardin de Cactus &nbsp;
            </a>
            at Guatiza.
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
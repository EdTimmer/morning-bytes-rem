
import React from 'react';
import "./Home.css";

import Composition from "./Composition";

const Home = () => {
  return (
    <div className="home">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-primary">Lanzarote is waiting for you</h2>
      </div>

      <div className="home-content">
        <div className="home-description">
          <div className="u-margin-bottom-small">
            <h2 className="heading-secondary">
              You're going to fall in love with Lanzarote
            </h2>
          </div>

          <p className="paragraph">
            Lanzarote is a Spanish island, the northernmost and easternmost of
            the autonomous Canary Islands in the Atlantic Ocean. It is located
            approximately 125 kilometres (78 miles) off the north coast of
            Africa and 1,000 kilometres (621 miles) from the Iberian Peninsula. Located in
            the centre-west of the island is Timanfaya National Park, one of its
            main attractions. The island was declared a biosphere reserve by
            UNESCO in 1993. The island's capital is Arrecife.
          </p>

          <div className="u-margin-bottom-small">
            <h2 className="heading-secondary">
              Fire mountains out of this world
            </h2>
          </div>

          <p className="paragraph">
            Lanzarote was born through fiery
            eruptions and has solidified lava streams as well as extravagant
            rock formations. The island emerged about 15 million years ago as
            product of the Canary hotspot. The island, along with others,
            emerged after the breakup of the African and the American
            continental plates. The greatest recorded eruptions occurred between
            1730 and 1736 in the area now designated Timanfaya National Park.
          </p>
        </div>
        <div className="home-composition">
          <Composition />
        </div>
      </div>
    </div>
  );
}


export default Home;
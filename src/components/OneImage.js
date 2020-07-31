import React from "react";
import "./OneImage.css";

// import timanfaya_tall from "../images/timanfaya_tall.jpg";
import el_golfo from "../images/el_golfo.jpg";
// import shark from "../images/shark.jpg";

const OneImage = () => {
  return (
    <div className="one-image-container">
      {/* <img
        src={el_golfo}
        alt="el_golfo"
        className="one-image__photo"
      /> */}
      <div className="card">
        <div className="card__side card__side--front">
          &nbsp;
        </div>

        <div className="card__side card__side--back">&nbsp;</div>
      </div>
    </div>
  );
};

export default OneImage;

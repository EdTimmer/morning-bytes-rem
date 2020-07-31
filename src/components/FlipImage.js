import React from "react";
import "./FlipImage.css";

const FlipImage = () => {
  return (
    <div className="one-image-container">
      <div className="card">
        <div className="card__side card__side--front">
          &nbsp;
        </div>

        <div className="card__side card__side--back">&nbsp;</div>
      </div>
    </div>
  );
};

export default FlipImage;

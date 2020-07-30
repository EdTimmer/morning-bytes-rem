import React from "react";
import "./OneImage.css";

// import timanfaya_tall from "../images/timanfaya_tall.jpg";
import el_golfo from "../images/el_golfo.jpg";

const OneImage = () => {
  return (
    <div className="one-image-container">
      <img
        src={el_golfo}
        alt="el_golfo"
        className="one-image__photo"
      />
    </div>
  );
};

export default OneImage;

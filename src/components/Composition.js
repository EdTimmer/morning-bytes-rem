import React from 'react';
import "./Composition.css"


import grapes from "../images/grapes.jpg";
// import village from "../images/village.jpg";
import timanfaya from "../images/timanfaya.jpg";
// import el_golfo from "../images/el_golfo.jpg";
// import cacti from "../images/cacti.jpg";
import papagayo from "../images/papagayo.jpg";
// import timanfaya_tall from "../images/timanfaya_tall.jpg";


const Composition = () => {
  return (
    <div className="composition">
      <img
        src={timanfaya}
        alt="timanfaya"
        className="composition__photo composition__photo--p1"
      />
      <img
        src={papagayo}
        alt="village"
        className="composition__photo composition__photo--p2"
      />
      <img
        src={grapes}
        alt="grapes"
        className="composition__photo composition__photo--p3"
      />
    </div>
  );
}

export default Composition;
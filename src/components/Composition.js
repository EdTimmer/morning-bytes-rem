import React from 'react';
import "./Composition.css"


import grapes from "../images/grapes.jpg";

const Composition = () => {
  return (
    <div className="composition">
      <img src={grapes} alt="grapes" className="composition__photo-1"/>
    </div>
  )
}

export default Composition;
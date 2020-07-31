import React, { Fragment } from 'react';
import "./Home.css";

import Header from "./Header";
import About from "./About";
import Form from "./Form";
import Footer from "./Footer";

// import lanzarote from "../images/lanzarote.png";
// import abstract from "../images/abstract.png";

const Home = () => {
  return (
    <Fragment>
      <div className="home">
        <Header />
        <About />
        <Form />
      </div>
      <Footer />
    </Fragment>
  );
}


export default Home;
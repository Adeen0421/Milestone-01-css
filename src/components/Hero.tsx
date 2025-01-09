import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div
      id="hero"
      className="hero-img"
  
    >
      <Navbar />
      <div className="con-gri">
        {/* Left placeholder (hidden on smaller screens) */}
        <div className="hidden"></div>

        {/* Hero Text Section */}
        <div className="hero-d">
          <div className="hero-dd">
            <p className="hero-p">
              I'm
            </p>
            <p className="hero-p">Adeen</p>
            <p className="hero-p">Khan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

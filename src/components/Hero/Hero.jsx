import React from "react";
import back1 from "../../assets/back11.jpg";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="Hero">
      <div className="hero">
        <img src={back1} alt="" />
      </div>
      <div className="hero-caption">
        <div className="hero-left">
          <span>
            <span>|</span>Welcome to <span>Agent E-sports</span>
          </span>
          <span>
            Unleash Your Inner Champion Join the Ultimate Gaming Showdown!
          </span>
          <div>
            <span>Join Us</span>

            <button onClick={() => navigate("/about")}>About Us</button>
          </div>
        </div>
      </div>
      <div className="hero-right"></div>
    </div>
  );
};

export default Hero;

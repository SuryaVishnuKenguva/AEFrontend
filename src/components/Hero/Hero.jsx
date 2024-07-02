import React from "react";
import back1 from "../../assets/back.jpg";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
const Hero = () => {
  const navigate = useNavigate();
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
            <Link to="Footer" smooth={true}>
              <span>Join Us</span>
            </Link>
            <button onClick={() => navigate("/about")}>About Us</button>
          </div>
        </div>
      </div>
      <div className="hero-right"></div>
    </div>
  );
};

export default Hero;

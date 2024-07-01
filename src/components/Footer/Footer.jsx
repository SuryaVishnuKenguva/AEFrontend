import React from "react";
import logo from "../../assets/logo.png";
import location from "../../assets/icons/location.png";
import phone from "../../assets/icons/phone.png";
import email from "../../assets/icons/email.png";
import fb from "../../assets/icons/fb.png";
import ig from "../../assets/icons/ig.png";
import ds from "../../assets/icons/ds.png";
import yt from "../../assets/icons/yt.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer">
        <div className="f1">
          <img src={logo} alt="" />
          <span>
            Unleash Your Inner Champion Join the Ultimate Gaming Showdown!
          </span>
          <div>
            <img src={location} alt="" />
            <span>Address : PO Box W75 Street lan West new queens</span>
          </div>

          <div>
            <img src={phone} alt="" />
            <span> Phone : +24 1245 654 235</span>
          </div>
          <div>
            <img src={email} alt="" />
            <span>Email : info@exemple.com</span>
          </div>
        </div>
        <div className="f2">
          <span>TOURNAMENTS</span>
          <span>SCRIMS</span>
          <span>CONTESTS</span>
          <span>COMMUNITIES</span>
          <span>LEADERBOARD</span>
        </div>
        <div className="f2">
          <span onClick={() => navigate("/about")}>ABOUT</span>
          <span>AGENT CODERS</span>
          <span>TREMS & CONDITIONS</span>
          <span>PRIVACY</span>
        </div>
        <div className="f3">
          <div>
            <span>FOLLOW</span>
            <div>
              <img src={fb} alt="Facebook" />
              <img src={ig} alt="Instagram" />
              <img src={ds} alt="Discord" />
              <img src={yt} alt="YouTube" />
            </div>
          </div>

          <form action="" className="subscribe">
            <input type="email" required placeholder="email:" />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </div>
      <span>© 2024 Agent E-Sports. All rights reserved.</span>
    </div>
  );
};

export default Footer;

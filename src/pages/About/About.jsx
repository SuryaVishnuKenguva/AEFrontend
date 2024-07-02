import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./About.css";
import esports from "../../assets/esports.jpg";
import logo from "../../assets/logo.png";
import m1 from "../../assets/teams/member1.jpg";
import m2 from "../../assets/teams/member2.jpg";
import m3 from "../../assets/teams/member3.jpg";
import fb from "../../assets/icons/fb.png";
import ig from "../../assets/icons/ig.png";
import ds from "../../assets/icons/ds.png";
import yt from "../../assets/icons/yt.png"; // Ensure this is the correct path

const About = () => {
  return (
    <div className="about">
      <Header />
      <div className="about-content">
        <h2>
          Welcome to
          <span> Agent E-sports</span> Tournaments!
        </h2>
        <div className="about-esports">
          <img src={logo} alt="Agent Esports Logo" />
          <div>
            <span>CONNECTING GAMERS & IGNITING PASSION</span>
            <span>
              The Agent Esports is a platform with the sole aim of powering
              esports experiences.
            </span>
          </div>
          <img src={esports} alt="Esports Image" />
        </div>

        <h3>Our Vision</h3>
        <p>
          At Agent Esports, we're on a mission to revolutionize the way Free
          Fire esports and tournaments are organized and experienced. We
          understand the frustrations of traditional methods, and that's why
          we've created a platform that puts convenience, efficiency, and
          privacy at the forefront.
        </p>

        <h3>Our Features</h3>
        <ul className="rules">
          <li>
            <strong>Online Booking:</strong> Say goodbye to the hassle of
            coordinating through messaging apps. With our online booking
            feature, you can easily reserve your spot in upcoming tournaments
            and events with just a few clicks.
          </li>
          <li>
            <strong>Room ID and Password Management:</strong> Tired of searching
            through endless chat histories for the room ID and password? We've
            got you covered. Manage your room credentials directly on our
            website for quick and easy access.
          </li>
        </ul>

        <h3>Your Privacy Matters</h3>
        <p>
          At Agent Esports, your privacy is our top priority. We're committed to
          keeping your data safe and secure, with no spam, no unnecessary
          screenshots, and no cluttered WhatsApp junk. Enjoy a worry-free gaming
          experience without compromising your privacy.
        </p>

        <h3>Join the Revolution</h3>
        <p>
          Are you ready to take your gaming journey to the next level? Join the
          revolution today and experience the future of Free Fire esports with
          Agent Esports. Whether you're a seasoned player or just starting out,
          we're here to elevate your gaming experience and help you reach new
          heights.
        </p>

        <h3>Get Started Today</h3>
        <p>
          Ready to embark on your esports adventure? Sign up for free at Agent
          Esports and start exploring all the exciting features and
          opportunities awaiting you. The future of Free Fire esports starts
          here - don't miss out!
        </p>

        <h3>Our Team</h3>
        <div className="team2">
          <div className="experts2">
            <div>
              <img src={m1} alt="Robert Fox" />
            </div>
            <div>
              <div>
                <span>ROBERT FOX</span>
                <span>TEAM CAPTAIN</span>
              </div>
              <div className="icons3">
                <img className="icons22" src={yt} alt="YouTube" />
                <img src={fb} alt="Facebook" />
                <img src={ds} alt="Discord" />
              </div>
            </div>
          </div>
          <div className="experts2">
            <div>
              <img src={m2} alt="Esther Howard" />
            </div>
            <div>
              <div>
                <span>ESTHER HOWARD</span>
                <span>SUPPORT PLAYER</span>
              </div>
              <div className="icons3">
                <img src={yt} alt="YouTube" />
                <img src={fb} alt="Facebook" />
                <img src={ds} alt="Discord" />
              </div>
            </div>
          </div>
          <div className="experts2">
            <div>
              <img src={m3} alt="Jacob Jones" />
            </div>
            <div>
              <div>
                <span>JACOB JONES</span>
                <span>STREAMER</span>
              </div>
              <div className="icons3">
                <img src={yt} alt="YouTube" />
                <img src={fb} alt="Facebook" />
                <img src={ds} alt="Discord" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;

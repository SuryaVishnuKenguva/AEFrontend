import React, { useState, useEffect } from "react";
import "./Header.css";
import fb from "../../assets/icons/fb.png";
import ig from "../../assets/icons/ig.png";
import ds from "../../assets/icons/ds.png";
import yt from "../../assets/icons/yt.png";
import pf from "../../assets/icons/Profile.png";
import write from "../../assets/icons/write.png";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { motion } from "framer-motion";

const Header = () => {
  const [headerHeight, setHeaderHeight] = useState(140);
  const [showTop, setShowTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const marqueeVariants = {
    animate: {
      x: ["150px", `-${screenWidth / 2 - 100}px`],
      transition: {
        x: {
          duration: 6,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      },
    },
  };

  useEffect(() => {
    const getName = async () => {
      try {
        const token = Cookies.get("token");
        if (token) {
          const res = await axios.get("http://localhost:8000/api/header", {
            withCredentials: true,
          });
          setName(res.data.user.name);
        } else {
          console.log("You are not Authorized");
        }
      } catch (err) {
        console.log(err);
      }
    };
    getName();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 300) {
        setHeaderHeight(60);
        setShowTop(false);
      } else {
        setHeaderHeight(140);
        setShowTop(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  return (
    <div className="Header" style={{ height: `${headerHeight}px` }}>
      {showTop && (
        <div className="top-H">
          <div>
            <span>FOLLOW</span>
            <img src={fb} alt="Facebook" />
            <img src={ig} alt="Instagram" />
            <img src={ds} alt="Discord" />
            <img src={yt} alt="YouTube" />
          </div>
          {name ? (
            screenWidth >= 1024 ? (
              <motion.p
                variants={marqueeVariants}
                initial="initial"
                animate="animate"
                style={{ whiteSpace: "nowrap", overflow: "hidden" }}
              >
                Hello, {name}
              </motion.p>
            ) : (
              <p style={{ position: "sticky", top: 0 }}>Hello, {name}</p>
            )
          ) : (
            <div>
              <div onClick={() => navigate("/register")}>
                <img src={write} alt="Write" />
                <span>REGISTER</span>
              </div>
              <span>OR</span>
              <div onClick={() => navigate("/signin")}>
                <img src={write} alt="Write" />
                <span>SIGN IN</span>
              </div>
            </div>
          )}
        </div>
      )}
      <div className="bottom-H">
        <div>
          <NavLink to="/" className="link">
            <span>HOME</span>
          </NavLink>
          <NavLink to="/about" className="link">
            <span>ABOUT</span>
          </NavLink>
          <NavLink to="/tournament" className="link">
            <span>TOURNAMENT</span>
            <div className="drop">
              <NavLink to="/ongoing" className="link2">
                On Going
              </NavLink>
              <NavLink to="/upcoming" className="link2">
                Up Coming
              </NavLink>
            </div>
          </NavLink>

          <NavLink to="/contact" className="link">
            <span>CONTACT</span>
          </NavLink>
        </div>
        <div>
          <span>PAGES</span>
          <span>STORE</span>
          <span>BLOG</span>
          {name ? (
            <NavLink className="link-profile" to="/profile">
              <div className="profile">
                <img src={pf} alt="" />
                <span>{name.split(" ")[0].toUpperCase()}</span>
              </div>
              <div className="drop2">
                <NavLink to="" className="link2">
                  My Profile
                </NavLink>
                <NavLink to="" className="link2">
                  Manage Teams
                </NavLink>
                <NavLink to="" className="link2">
                  Saved Payments
                </NavLink>
                <NavLink to="" className="link2">
                  My Tournaments
                </NavLink>
                <NavLink to="" className="link2">
                  My Favourites
                </NavLink>
              </div>
            </NavLink>
          ) : (
            <NavLink to="/signin" className="link">
              <span>PROFILE</span>
            </NavLink>
          )}
        </div>
      </div>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Header;

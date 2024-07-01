import React from "react";
import Header from "../../components/Header/Header";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home">
        <Hero />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

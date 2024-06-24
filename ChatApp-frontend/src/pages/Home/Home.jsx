import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import { useDarkMode } from "../../components/DarkModeContext/DarkModeContext";
import FAQs from "../../components/FAQs/FAQs";
import AboutMe from "../../components/AboutMe/AboutMe";
import Footer from "../../components/Footer/Footer";
useDarkMode;
const Home = () => {
  return (
    <>
      <div>
        <Header />
        <FAQs />
        <AboutMe />
        <Footer />
      </div>
    </>
  );
};

export default Home;

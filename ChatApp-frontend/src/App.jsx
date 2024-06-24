import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import "./App.css";
import FAQs from "./components/FAQs/FAQs";
import { PrimeReactProvider } from "primereact/api";
import AboutMe from "./components/AboutMe/AboutMe";
// import About from "./components/About/About";
import AboutUs from "./pages/AboutUs/AboutUs";
export const DarkModeContext = createContext();

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={darkMode ? "dark" : ""}>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/Home" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
        </Router>
      </div>
    </DarkModeContext.Provider>
  );
}

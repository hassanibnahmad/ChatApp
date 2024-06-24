import React, { useEffect, useRef, useContext } from "react";
import "./NavBar.css";
import { DarkModeContext } from "../../App";

const NavBar = () => {
  const headerRef = useRef(null);
  const menuHamburgerRef = useRef(null);
  const navLinksRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        headerRef.current.classList.add("fixHeader");
      } else {
        headerRef.current.classList.remove("fixHeader");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const menuHamburger = menuHamburgerRef.current;
    const navLinks = navLinksRef.current;

    const toggleMenu = () => {
      menuHamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    };

    menuHamburger.addEventListener("click", toggleMenu);

    const handleLinkClick = () => {
      menuHamburger.classList.remove("active");
      navLinks.classList.remove("active");
    };

    document
      .querySelectorAll("a")
      .forEach((n) => n.addEventListener("click", handleLinkClick));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      menuHamburger.removeEventListener("click", toggleMenu);
      document
        .querySelectorAll("a")
        .forEach((n) => n.removeEventListener("click", handleLinkClick));
    };
  }, []);

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <header ref={headerRef} className={`${darkMode ? "dark" : ""} `}>
      <div className="nav nav-container dark:bg-gray-950 px-2 rounded-lg mb-1">
        <a href="index.html" className="logo">
          <h2 className="text font-bold text-2xl">
            Realtime <span className="text-violet-600">ChatNova</span>
          </h2>
        </a>
        <button className="humberger" ref={menuHamburgerRef}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className="navbar" ref={navLinksRef}>
          <li>
            <a href="/Home" className="font-semibold dark:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="/AboutUs" className="font-semibold dark:text-white">
              About Us
            </a>
          </li>
          <li>
            <a href="#faqs" className="font-semibold dark:text-white">
              FAQ
            </a>
          </li>
          {/* <li>
            <a href="/contact" className="font-semibold dark:text-white">
              Contact
            </a>
          </li> */}
        </ul>

        <div className="tContainer flex">
          <a href="http://localhost/ChatApp/index.php" className="btn">
            Get Started
          </a>
          {/* DARKMODE ICON */}
          <label className="toggle dark:bg-neutral-900" htmlFor="switch">
            <input
              id="switch"
              className="input"
              type="checkbox"
              onClick={toggleDarkMode}
            />
            <div className="icon icon--moon">
              <svg
                height="22"
                width="22"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="icon icon--sun">
              <svg
                height="22"
                width="22"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
              </svg>
            </div>
          </label>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

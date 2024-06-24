import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <>
      <section className=" footer bg-slate-100 dark:bg-gray-800 dark:text-gray-400">
        <div class="footer-content footer-container">
          <div className="footer-box">
            <a href="index.html" className="logo">
              <h2 className="text font-bold text-2xl">
                Realtime <span className="text-violet-600">ChatNova</span>
              </h2>
            </a>
          </div>
          <div class="footer-box" data-aos="fade-up">
            <h3>Quick Linkes</h3>
            <a className="text text-gray-800 dark:text-teal-50" href="#">
              Home
            </a>
            <a className="text text-gray-800 dark:text-teal-50" href="#">
              AboutUs
            </a>
            <a className="text text-gray-800 dark:text-teal-50" href="#">
              FAQ
            </a>
          </div>
          <div class="footer-box" data-aos="fade-up">
            <h3>Agency Location</h3>
            <a className="text text-gray-800 dark:text-teal-50" href="#">
              London
            </a>
            <a className="text text-gray-800 dark:text-teal-50" href="#">
              Leverpool
            </a>
            <a className="text text-gray-800 dark:text-teal-50" href="#">
              Madrid
            </a>
          </div>
          <div class="footer-box" data-aos="fade-up">
            <h3>Contact</h3>
            <a className="text text-gray-800 dark:text-teal-50" href="#">
              +2126 00 00 00
            </a>
            <a className="text text-gray-800 dark:text-teal-50" href="#">
              contact@ChatNova.com
            </a>
            <div class="social dark:bg-gray-400 p-2 items-center rounded-xl">
              <a href="#">
                <img src={assets.facebook} alt="" />
              </a>
              <a href="#">
                <img src={assets.twitter} alt="" />
              </a>
              <a href="#">
                <img src={assets.linkedin} alt="" />
              </a>
              <a href="#">
                <img src={assets.instagram} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <hr />

      <div className="copyright bg-slate-50 dark:bg-gray-800 dark:text-gray-400">
        <p className="text text-gray-800 dark:text-teal-50">
          &#169; Realtime <span className="text-violet-600">ChatNova</span> |
          All rights Reserved{" "}
        </p>
      </div>
    </>
  );
};

export default Footer;

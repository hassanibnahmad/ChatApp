import React from "react";
import NavBar from "../NavBar/NavBar";
import { assets } from "../../assets/assets";

const About = () => {
  return (
    <>
      <section
        className="about-container mt-24 rounded-3xl bg-[url('./assets/famille-maison.png')] bg-cover bg-center"
        id="home"
      >
        <div className="home-text" data-aos="zoom-in-up">
          <h1 className="text text-slate-50 text-4xl font-bold p-4">
            <br />
            Over 100,00 <br />
            people have found their <br />
            confort on <span className="text-violet-600">ChatNova</span>
          </h1>
        </div>
      </section>

      <section
        className="about-container bg-slate-100 text-gray-800  dark:bg-slate-800 dark:text-slate-50 mt-4 mb-4 rounded-2xl"
        id="about"
      >
        <div
          className="about-text flex items-center flex-col px-6"
          data-aos="fade-left"
        >
          <h2 className=" font-bold">
            Welcome to <span className="text-violet-600">ChatNova</span>!
          </h2>
          <p className="text text-center">
            We created ChatNova to make chatting easier, faster, and more fun
            for everyone. <br />
            Our web app is designed with you in mind, providing a simple and
            friendly way to connect with friends, family, and colleagues. <br />{" "}
            At <span className="text-violet-600">ChatNova</span>, we believe
            that good communication is key to building strong relationships,
            whether for personal chats or professional discussions. <br />{" "}
            That's why we've packed our app with cool features that make
            messaging smooth and enjoyable. <br /> Security is also a top
            priority for us, so you can chat with peace of mind knowing your
            conversations are safe. <br />
            We're here to help you stay connected, no matter where you are.
            Thank you for choosing ChatNova – let's start chatting!
          </p>
        </div>
      </section>

      <section
        className="about-container grid gap-6 pt-4 pb-4 "
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(13rem, 1fr))" }}
      >
        <div
          className="box rounded-lg p-2 text-center bg-slate-200 text-gray-700 dark:bg-slate-800 dark:text-slate-50"
          data-aos="zoom-in-up"
        >
          <h4 className="text text-4xl font-semibold">150 000+</h4>
          <p className="text text-2xl">Properties</p>
        </div>
        <div
          className="box  rounded-lg p-2 text-center bg-slate-200 text-gray-700 dark:bg-slate-800 dark:text-slate-50 "
          data-aos="zoom-in-up"
        >
          <h4 className="text text-4xl font-semibold">100 000+</h4>
          <p className="text text-2xl">Bookings</p>
        </div>
        <div
          className="box  rounded-lg p-2 text-center bg-slate-200 text-gray-700 dark:bg-slate-800 dark:text-slate-50 "
          data-aos="zoom-in-up"
        >
          <h4 className="text text-4xl font-semibold">150+</h4>
          <p className="text text-2xl">Cities</p>
        </div>
        <div
          className="box  rounded-lg p-2 text-center bg-slate-200 text-gray-700 dark:bg-slate-800 dark:text-slate-50 "
          data-aos="zoom-in-up"
        >
          <h4 className="text text-4xl font-semibold">85+</h4>
          <p className="text text-2xl">Agencies</p>
        </div>
      </section>

      <section
        className="about-container mt-4 rounded-lg bg-slate-100 dark:bg-gray-800 dark:text-slate-50 grid md:grid-cols-2 gap-2 sm:grid-cols-none"
        id="about"
        data-aos="zoom-in-up"
      >
        <div className="about-img" data-aos="zoom-in-up">
          <img src={assets.famille} alt="" />
        </div>
        <div
          className="about-text flex flex-col items-center justify-center p-8"
          data-aos="zoom-in-up"
        >
          <h2 className="text text-left">
            We're an international team with a shared passion for helping
            people.
          </h2>
          <p className="text text-left">
            We strive to make a meaningful impact and build a safe, rental
            marketplace. We believe that a diverse <br />
            and inclusive business makes us stronger and helps <br />
            us build better solutions.
          </p>
          <div
            className="flex justify-between gap-6 pt-1 pb-1 "
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 1fr))",
            }}
          >
            <div className="about-prop p-6" data-aos="zoom-in-up">
              <h1 className="text text-4xl font-semibold md:tetx-3xl sm:text-2xl ">
                250+
              </h1>
              <p className="text text-2xl md:text-xs">People</p>
            </div>
            <div className="about-prop p-6" data-aos="zoom-in-up">
              <h1 className="text text-4xl font-semibold md:tetx-3xl sm:text-2xl ">
                50+
              </h1>
              <p className="text text-2xl md:text-xs">Nationalities</p>
            </div>
            <div className="about-prop p-6" data-aos="zoom-in-up">
              <h1 className="text text-4xl font-semibold md:tetx-3xl sm:text-2xl ">
                40%
              </h1>
              <p className="text text-2xl md:text-xs">Woman-workforce</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlay,
  faAppStoreIos,
} from "@fortawesome/free-brands-svg-icons";
import { DarkModeContext } from "../../App";

library.add(faGooglePlay, faAppStoreIos);

const Header = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div>
      <section
        className={`home-container rounded-lg Header bg-slate-100 dark:bg-neutral-900 dark:text-teal-50`}
      >
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Welcome to
              <span className="text-violet-600"> ChatNova</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Connect with people around the world and share your passions.
              <br className="hidden md:inline lg:hidden" />A secure and
              user-friendly platform for enriching conversations.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="https://www.apple.com/app-store/"
                className="px-8 py-3 text-lg font-semibold rounded bg-violet-600 text-gray-50"
              >
                App Store
                <FontAwesomeIcon icon={faAppStoreIos} className="px-2" />
              </a>
              <a
                rel="noopener noreferrer"
                href="https://play.google.com/store"
                className="px-8 py-3 text-lg font-semibold border rounded border-gray-800 hover:bg-blue-600 hover:text-gray-50 "
              >
                Play Store
                <FontAwesomeIcon icon={faGooglePlay} className="px-2" />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={assets.iphones1}
              alt=""
              className="object-contain rounded-3xl sm:h-80 lg:h-96 xl:h-112 2xl:h-128   "
            />
          </div>
        </div>
      </section>
      <section className="howWorks-containner p-6">
        <span className="block mb-2 text-xs font-semibold tracking-widest uppercase lg:text-center text-violet-600">
          How it works
        </span>
        <h2 className="text-5xl font-bold lg:text-center dark:text-teal-50 text-gray-900">
          Chatting with <span className="text-violet-600"> ChatNova</span> is
          simple
        </h2>
        <div className="grid gap-6 my-16 lg:grid-cols-3">
          <div className="flex flex-col p-8 space-y-4 rounded-md bg-slate-100 dark:bg-slate-800">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-600 text-gray-50">
              1
            </div>
            <p className="text-xl font-medium">
              <b>SignUp: </b>In just seconds, you can create a free account and
              be ready to chat.
            </p>
          </div>
          <div className="flex flex-col p-8 space-y-4 rounded-md bg-slate-100 dark:bg-slate-800">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-600 text-gray-50">
              2
            </div>
            <p className="text-xl font-medium">
              <b>Find Your People: </b>Easily find friends, family, or new
              connections to chat with. ChatNova helps you connect with the
              people who matter.
            </p>
          </div>
          <div className="flex flex-col p-8 space-y-4 rounded-md bg-slate-100 dark:bg-slate-800">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-600 text-gray-50">
              3
            </div>
            <p className="text-xl font-medium">
              <b>Start Chatting: </b>Start chatting instantly with ChatNova's
              user-friendly interface. Communication has never been easier!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import assets from "../assets";
import constants from "../constants";
import "./Header.css";

function Header() {
  const [isOpen, toggle] = useState(false);

  return (
    <header className="header">
      <div className="container mx-auto relative flex flex-col justify-start py-10">
        <nav>
          <div className="flex-1 flex justify-between items-center">
            <div className="logo">
              <img src={assets.logo} alt="Sunnyside" />
            </div>

            <ul
              className={`hidden md:flex justify-between items-center gap-12`}
            >
              {constants.menuEntries.map((entry, index) => {
                return (
                  <li className="font-barlow text-lg text-white" key={index}>
                    <a href="#">{entry}</a>
                  </li>
                );
              })}
              <li className="font-fraunces uppercase ">
                <a
                  href="#"
                  className="inline-block px-6 py-4 rounded-full text-veryDarkDesaturatedBlue bg-white hover:text-white hover:bg-white/30"
                >
                  Contact
                </a>
              </li>
            </ul>

            <button
              className="sm:hidden"
              onClick={() => toggle((prev) => !prev)}
            >
              <img src={assets.hamburgerIcon} alt="menu button" />
            </button>
          </div>

          {isOpen ? (
            <button
              onClick={() => toggle(false)}
              className="fixed block w-screen h-screen inset-0 opacity-0"
            ></button>
          ) : null}

          <div
            className={`mobile-nav ${
              isOpen ? "block" : "hidden"
            } absolute w-full left-0 right-0 p-6`}
          >
            <div className="z-10 bubble-point"></div>
            <ul
              className={`z-10 flex flex-col gap-8 text-center bg-white py-10`}
            >
              {constants.menuEntries.map((entry, index) => {
                return (
                  <li
                    className="font-barlow text-lg text-veryDarkGrayishBlue"
                    key={index}
                  >
                    <a href="#">{entry}</a>
                  </li>
                );
              })}
              <li className="font-fraunces uppercase ">
                <a
                  href="#"
                  className="inline-block px-8 py-4 rounded-full text-veryDarkDesaturatedBlue bg-yellow"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="py-24">
          <h1 className="heading1 md:text-[2.5rem]">{constants.hero.title}</h1>
          <div className="mt-16 flex justify-center items-center">
            <img className="w-8" src={assets.arrowDown} alt="Arrow Down" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

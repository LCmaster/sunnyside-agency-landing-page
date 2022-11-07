import React from "react";
import assets from "../assets";
import SvgInline from "../component/SvgInline";
import constants from "../constants";

function Footer() {
  return (
    <footer className="py-16 px-6 flex flex-col justify-center bg-desaturatedCyan">
      <img
        src={assets.footerLogo}
        alt="Sunnyside"
        className="h-8 object-contain fill-veryDarkDesaturatedBlue"
      />

      <nav className="mt-12">
        <ul className="flex justify-around md:justify-center md:gap-12">
          {constants.menuEntries.map((entry, index) => {
            return (
              <li
                key={index}
                className="font-barlow font-extrabold text-lg text-darkModerateCyan hover:text-white"
              >
                <a href="#">{entry}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex justify-center gap-6 mt-24 md:mt-20">
        {constants.socialLinks.map((entry, index) => {
          return (
            <a href="#" key={index} className="social-link">
              <SvgInline url={entry.icon} />
            </a>
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;

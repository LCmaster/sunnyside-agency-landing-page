import React from "react";
import "./FeatureCardLink.css";

function FeatureCardLink({ color }) {
  return (
    <div className="feature__link relative mt-8 inline-block text-center md:text-left">
      <a
        href="#"
        className="relative z-20 px-2 uppercase font-bold text-veryDarkDesaturatedBlue"
      >
        Learn More
      </a>
      <div
        className={`underline absolute z-10 bottom-0 px-2 rounded-full w-full h-2 bg-${color}`}
      ></div>
    </div>
  );
}

export default FeatureCardLink;

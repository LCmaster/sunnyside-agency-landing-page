import React from "react";
import "./FeatureCardLink.css";

function FeatureCardLink({ color = "" }) {
  const bgColor = color.length > 0 ? `bg-${color}` : null;
  console.log(bgColor);
  return (
    <div className="feature__link relative mt-8 inline-block text-center md:text-left">
      <a
        href="#"
        className="relative z-20 px-2 uppercase font-bold text-veryDarkDesaturatedBlue"
      >
        Learn More
      </a>
      <div
        className={`
        underline 
        absolute 
        bottom-0 
        w-full 
        h-2 
        z-10 
        px-2 
        rounded-full 
        
        ${bgColor}
        `}
      ></div>
    </div>
  );
}

export default FeatureCardLink;

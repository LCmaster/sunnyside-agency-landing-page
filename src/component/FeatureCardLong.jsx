import React from "react";
import FeatureCardParagraph from "./FeatureCardParagraph";
import FeatureCardPicture from "./FeatureCardPicture";
import FeatureCardTitle from "./FeatureCardTitle";

import "./Feature.css";

function FeatureCardLong({ feature, isReversed }) {
  console.log(feature.color);
  return (
    <div className={`bg-white md:grid md:grid-cols-2`}>
      <FeatureCardPicture picture={feature.image} />
      <div
        className={`${
          isReversed ? "md:order-first md:ml-auto" : "md:mr-auto"
        } px-9 md:px-24 py-16 md:flex md:flex-col md:justify-center md:items-start text-center md:text-left`}
      >
        <FeatureCardTitle style="text-veryDarkDesaturatedBlue">
          {feature.title}
        </FeatureCardTitle>
        <FeatureCardParagraph style="text-veryDarkDesaturatedBlue">
          {feature.content}
        </FeatureCardParagraph>
        <div className="feature__link relative mt-8 inline-block text-center md:text-left">
          <a
            href="#"
            className="relative z-20 px-2 uppercase font-bold text-veryDarkDesaturatedBlue"
          >
            Learn More
          </a>
          <div
            className={`underline absolute bottom-0 w-full h-2 z-10 px-2 rounded-full bg-${feature.color} `}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCardLong;

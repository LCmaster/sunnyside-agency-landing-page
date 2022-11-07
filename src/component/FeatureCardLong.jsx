import React from "react";
import FeatureCardLink from "./FeatureCardLink";
import FeatureCardParagraph from "./FeatureCardParagraph";
import FeatureCardPicture from "./FeatureCardPicture";
import FeatureCardTitle from "./FeatureCardTitle";

function FeatureCardLong({ feature, isReversed }) {
  return (
    <div className={`bg-white md:grid md:grid-cols-2`}>
      <FeatureCardPicture picture={feature.image} />
      <div
        className={`${
          isReversed ? "md:order-first md:ml-auto" : "md:mr-auto"
        } px-9 md:px-24 py-16 md:flex md:flex-col md:justify-center md:items-start text-center md:text-left`}
      >
        <FeatureCardTitle color="veryDarkDesaturatedBlue">
          {feature.title}
        </FeatureCardTitle>
        <FeatureCardParagraph color="veryDarkGrayishBlue">
          {feature.content}
        </FeatureCardParagraph>
        <FeatureCardLink color={feature.color} />
      </div>
    </div>
  );
}

export default FeatureCardLong;

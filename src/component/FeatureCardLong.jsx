import React from "react";
import FeatureCardLink from "./FeatureCardLink";
import FeatureCardParagraph from "./FeatureCardParagraph";
import FeatureCardPicture from "./FeatureCardPicture";
import FeatureCardTitle from "./FeatureCardTitle";

function FeatureCardLong({
  feature,
  color,
  className = "",
  isReversed = false,
}) {
  return (
    <div className={`bg-white md:grid md:grid-cols-2 ${className}`}>
      <FeatureCardPicture picture={feature.image} />
      <div
        className={`${
          isReversed ? "order-first ml-auto" : "mr-auto"
        } px-9 md:px-24 py-16 md:flex md:flex-col md:justify-center md:items-start text-center md:text-left`}
      >
        <FeatureCardTitle>{feature.title}</FeatureCardTitle>
        <FeatureCardParagraph>{feature.content}</FeatureCardParagraph>
        <FeatureCardLink color={color} />
      </div>
    </div>
  );
}

export default FeatureCardLong;

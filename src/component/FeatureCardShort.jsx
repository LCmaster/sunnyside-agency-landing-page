import React from "react";
import FeatureCardParagraph from "./FeatureCardParagraph";
import FeatureCardPicture from "./FeatureCardPicture";
import FeatureCardTitle from "./FeatureCardTitle";

function FeatureCardShort({ feature, color }) {
  return (
    <div id="graphic-design" className="relative">
      <FeatureCardPicture picture={feature.image} />
      <div className="w-full px-8 py-16 pb-12 md:flex md:flex-col md:justify-start md:items-center text-center  absolute z-1 bottom-0">
        <FeatureCardTitle className={`text-${color}`}>
          {feature.title}
        </FeatureCardTitle>
        <FeatureCardParagraph isCompact={true} className={`text-${color}`}>
          {feature.content}
        </FeatureCardParagraph>
      </div>
    </div>
  );
}

export default FeatureCardShort;

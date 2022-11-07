import React from "react";
import FeatureCardLong from "../component/FeatureCardLong";
import FeatureCardShort from "../component/FeatureCardShort";
import constants from "../constants";

function Features() {
  return (
    <section id="features">
      <FeatureCardLong
        feature={constants.features.transform}
        isReversed={true}
      />
      <FeatureCardLong
        feature={constants.features.standOut}
        isReversed={false}
      />
      <div className="md:grid md:grid-cols-2">
        <FeatureCardShort feature={constants.features.graphicDesign} />
        <FeatureCardShort feature={constants.features.photography} />
      </div>
    </section>
  );
}

export default Features;

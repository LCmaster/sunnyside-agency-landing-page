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
        color="yellow"
      />
      <FeatureCardLong
        feature={constants.features.standOut}
        isReversed={false}
        color="softRed"
      />
      <div className="md:grid md:grid-cols-2">
        <FeatureCardShort
          feature={constants.features.graphicDesign}
          color="darkDesaturatedCyan"
        />
        <FeatureCardShort
          feature={constants.features.photography}
          color="darkBlue"
        />
      </div>
    </section>
  );
}

export default Features;

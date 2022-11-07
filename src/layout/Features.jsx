import React from "react";
import FeatureCardLong from "../component/FeatureCardLong";
import FeatureCardShort from "../component/FeatureCardShort";
import constants from "../constants";

function Features() {
  return (
    <section id="features">
      {constants.features
        .filter((feature) => feature.type === "long")
        .map((feature, index) => (
          <FeatureCardLong
            key={index}
            feature={feature}
            isReversed={index % 2 === 0}
          />
        ))}
      <div className="md:grid md:grid-cols-2">
        {constants.features
          .filter((feature) => feature.type === "short")
          .map((feature, index) => (
            <FeatureCardShort key={index} feature={feature} />
          ))}
      </div>
    </section>
  );
}

export default Features;

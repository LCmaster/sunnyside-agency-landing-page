import React from "react";

function FeatureCardTitle({ children, style }) {
  return (
    <h2 className={`heading2 md:max-w-[15ch] md:mb-6 ${style}`}>{children}</h2>
  );
}

export default FeatureCardTitle;

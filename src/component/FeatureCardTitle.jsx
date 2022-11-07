import React from "react";

function FeatureCardTitle({ children, className = "" }) {
  return (
    <h2 className={`heading2 md:feature__heading ${className}`}>{children}</h2>
  );
}

export default FeatureCardTitle;

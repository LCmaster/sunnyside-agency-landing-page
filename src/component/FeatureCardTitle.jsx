import React from "react";

function FeatureCardTitle({ children, color = "" }) {
  const textColor = color.length > 0 ? `text-${color}` : null;
  console.log(textColor);
  return (
    <h2 className={`heading2 md:feature__heading ${textColor}`}>{children}</h2>
  );
}

export default FeatureCardTitle;

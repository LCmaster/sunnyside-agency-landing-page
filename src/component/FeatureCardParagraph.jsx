import React from "react";

function FeatureCardParagraph({ children, isCompact = false, className = "" }) {
  return (
    <p
      className={`feature__paragraph${
        isCompact ? "--small" : ""
      } mt-8 text-veryDarkGrayishBlue text-base ${className}`}
    >
      {children}
    </p>
  );
}

export default FeatureCardParagraph;

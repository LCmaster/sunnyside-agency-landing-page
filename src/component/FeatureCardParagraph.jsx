import React from "react";

function FeatureCardParagraph({ children, isCompact = false, color = "" }) {
  return (
    <p
      className={`feature__paragraph${
        isCompact ? "--small" : ""
      } mt-8 text-base ${color.length > 0 ? "text-" + color : ""}`}
    >
      {children}
    </p>
  );
}

export default FeatureCardParagraph;

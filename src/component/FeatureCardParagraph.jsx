import React from "react";

function FeatureCardParagraph({ children, isCompact = false, style }) {
  return (
    <p
      className={`${
        isCompact ? "md:max-w-[40ch]" : "md:max-w-[46ch]"
      } text-sm leading-[150%] ${style}`}
    >
      {children}
    </p>
  );
}

export default FeatureCardParagraph;

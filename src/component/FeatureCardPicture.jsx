import React from "react";

function FeatureCardPicture({ picture }) {
  return (
    <picture className="block w-full h-full object-cover">
      <source srcSet={picture.desktop} media="(min-width:376px)" />
      <img src={picture.mobile} alt="Image" />
    </picture>
  );
}

export default FeatureCardPicture;

import React from "react";

function FeatureCardPicture({ picture }) {
  return (
    <picture>
      <source srcSet={picture.desktop} media="(min-width:376px)" />
      <img
        src={picture.mobile}
        alt="Image"
        className="block w-full h-full object-cover"
      />
    </picture>
  );
}

export default FeatureCardPicture;

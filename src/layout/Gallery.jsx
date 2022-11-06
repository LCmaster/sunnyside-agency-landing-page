import React from "react";
import constants from "../constants";

function Gallery() {
  return (
    <section id="gallery" className="grid grid-cols-2 md:grid-cols-4">
      {constants.gallery.map((entry, index) => (
        <picture key={index}>
          <source srcSet={entry.desktop} media="(min-width:376px)" />
          <img key={index} src={entry.mobile} alt="" />
        </picture>
      ))}
    </section>
  );
}

export default Gallery;

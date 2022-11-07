import React from "react";

function Testimonial({ entry }) {
  return (
    <div className="md:basis-1/3 mt-16 flex flex-col items-center text-center">
      <img
        className="rounded-full w-20 h-20 md:w-16 md:h-16 object-cover object-center"
        src={entry.image}
        alt={`Image of ${entry.name}`}
      />
      <p className="mt-8 font-barlow text-md text-veryDarkGrayishBlue">
        {entry.content}
      </p>
      <h3 className="mt-8 font-fraunces font-black text-lg text-veryDarkDesaturatedBlue">
        {entry.name}
      </h3>
      <h4 className="mt-2 font-barlow text-sm text-darkGrayishBlue">
        {entry.occupation}
      </h4>
    </div>
  );
}

export default Testimonial;

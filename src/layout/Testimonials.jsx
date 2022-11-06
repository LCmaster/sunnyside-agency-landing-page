import React from "react";
import constants from "../constants";

function Testimonials() {
  return (
    <section className="container mx-auto px-8 py-16 md:px-20 md:py-32 pb-24 bg-slate-100">
      <h2 className="font-fraunces font-extrabold text-darkGrayishBlue text-xl text-center uppercase tracking-widest">
        {constants.testimonials.title}
      </h2>
      <div className="md:flex md:justify-center md:items-center md:gap-8">
        {constants.testimonials.entries.map((entry, index) => {
          return (
            <div
              key={index}
              className="md:basis-1/3 mt-16 flex flex-col items-center text-center"
            >
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
        })}
      </div>
    </section>
  );
}

export default Testimonials;

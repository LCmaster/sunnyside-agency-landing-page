import React from "react";
import constants from "../constants";
import Testimonial from "../component/Testimonial";

function Testimonials() {
  return (
    <section className="container mx-auto px-8 py-16 md:px-20 md:py-32 pb-24 bg-slate-100">
      <h2 className="font-fraunces font-extrabold text-darkGrayishBlue text-xl text-center uppercase tracking-widest">
        {constants.testimonials.title}
      </h2>
      <div className="md:flex md:justify-center md:items-center md:gap-8">
        {constants.testimonials.entries.map((entry, index) => (
          <Testimonial key={index} entry={entry} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

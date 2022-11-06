import React from "react";
import constants from "../constants";

function Features() {
  return (
    <section id="features" className="">
      <div id="transform" className="bg-white md:grid md:grid-cols-2">
        <picture className="block w-full h-full object-cover">
          <source
            srcSet={constants.features.transform.image.desktop}
            media="(min-width:376px)"
          />
          <img src={constants.features.transform.image.mobile} alt="Image" />
        </picture>
        <div className="order-first px-9 md:px-20 py-16 md:flex md:flex-col md:justify-center md:items-start text-center md:text-left">
          <h2 className="heading2 md:feature__heading">
            {constants.features.transform.title}
          </h2>
          <p className="feature__paragraph mt-8 text-veryDarkGrayishBlue text-base">
            {constants.features.transform.content}
          </p>

          <div className="mt-8 inline-block relative text-center md:text-left">
            <a
              href="#"
              className="relative z-20 px-2 uppercase font-bold text-veryDarkDesaturatedBlue"
            >
              Learn More
            </a>
            <div className="absolute z-10 bottom-0 px-2 rounded-full opacity-50 w-full h-2 bg-yellow"></div>
          </div>
        </div>
      </div>
      <div id="stand-out" className="bg-white md:grid md:grid-cols-2">
        <picture className="block w-full h-full object-cover">
          <source
            srcSet={constants.features.standOut.image.desktop}
            media="(min-width:376px)"
          />
          <img src={constants.features.standOut.image.mobile} alt="Image" />
        </picture>
        <div className=" px-9 md:px-20 py-16 md:flex md:flex-col md:justify-center md:items-start text-center md:text-left">
          <h2 className="heading2 feature__heading">
            {constants.features.standOut.title}
          </h2>
          <p className="feature__paragraph mt-8 text-veryDarkGrayishBlue text-base">
            {constants.features.standOut.content}
          </p>

          <div className="mt-8 inline-block relative text-center md:text-left">
            <a
              href="#"
              className="relative z-20 px-2 uppercase font-bold text-veryDarkDesaturatedBlue"
            >
              Learn More
            </a>
            <div className="absolute z-10 bottom-0 px-2 rounded-full opacity-50 w-full h-2 bg-softRed"></div>
          </div>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2">
        <div id="graphic-design" className="relative">
          <picture className="block w-full h-full object-cover">
            <source
              srcSet={constants.features.graphicDesign.image.desktop}
              media="(min-width:376px)"
            />
            <img
              src={constants.features.graphicDesign.image.mobile}
              alt="Image"
            />
          </picture>
          <div className="w-full px-8 py-16 pb-12 md:flex md:flex-col md:justify-start md:items-center text-center  absolute z-1 bottom-0">
            <h2 className="heading2 feature__heading text-darkDesaturatedCyan">
              {constants.features.graphicDesign.title}
            </h2>
            <p className="feature__paragraph--small mt-8 text-darkDesaturatedCyan">
              {constants.features.graphicDesign.content}
            </p>
          </div>
        </div>
        <div id="photography" className="relative">
          <picture className="block w-full h-full object-cover">
            <source
              srcSet={constants.features.photography.image.desktop}
              media="(min-width:376px)"
            />
            <img
              src={constants.features.photography.image.mobile}
              alt="Image"
            />
          </picture>
          <div className="w-full px-8 py-16 pb-12 md:flex md:flex-col md:justify-end md:items-center mx-auto text-center  absolute z-1 bottom-0">
            <h2 className="heading2 feature__heading text-darkBlue">
              {constants.features.photography.title}
            </h2>
            <p className="feature__paragraph--small mt-8 text-darkBlue">
              {constants.features.photography.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

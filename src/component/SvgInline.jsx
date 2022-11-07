import React, { useEffect, useState } from "react";

function SvgInline({ url }) {
  const [svg, setSvg] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isErrored, setIsErrored] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then(setSvg)
      .catch(setIsErrored)
      .then(() => setIsLoaded(true));
  }, [url]);

  return (
    <div
      className={`svgInline svgInline--${isLoaded ? "loaded" : "loading"} ${
        isErrored ? "svgInline--errored" : ""
      }`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

export default SvgInline;

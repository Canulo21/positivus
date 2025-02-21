import React from "react";
import amazon from "../../assets/images/amazon.png";
import dribble from "../../assets/images/dribble.png";
import hubspot from "../../assets/images/hubspot.png";
import notion from "../../assets/images/notion.png";
import netflix from "../../assets/images/netflix.png";
import zoom from "../../assets/images/zoom.png";

const logoImages = [
  {
    logo: amazon,
    alt: "amazon",
  },
  {
    logo: dribble,
    alt: "dribble",
  },
  {
    logo: hubspot,
    alt: "hubspot",
  },
  {
    logo: notion,
    alt: "notion",
  },
  {
    logo: netflix,
    alt: "netflix",
  },
  {
    logo: zoom,
    alt: "zoom",
  },
];

function CompanyLogo() {
  return (
    <>
      <div className="company-logo-wrap overflow-hidden whitespace-nowrap">
        <div className="logo-carousel">
          {logoImages.map((logo, i) => {
            return (
              <img
                key={i}
                className="grayscale hover:grayscale-0 hover:scale-110 ease-in-out duration-300"
                src={logo.logo}
                alt={logo.alt}
              />
            );
          })}
        </div>
        <div className="logo-carousel">
          {logoImages.map((logo, i) => {
            return (
              <img
                key={i}
                className="grayscale hover:grayscale-0 hover:scale-110 ease-in-out duration-300"
                src={logo.logo}
                alt={logo.alt}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CompanyLogo;

import React, { useRef } from "react";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../shadcn/ui/Carousel/Carousel";

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
  const plugin = useRef(
    Autoplay({
      delay: 3000, // Continuous smooth motion
      stopOnInteraction: true,
      play: true, // Keeps autoplay running smoothly
    })
  );

  return (
    <div className="company-logo-wrap overflow-hidden whitespace-nowrap">
      <div className="logo-carousel">
        <Carousel
          opts={{ loop: true }}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.play}
          className="w-full"
        >
          <CarouselContent className="-ml-1 flex">
            {logoImages.map((logo, i) => (
              <CarouselItem
                key={i}
                className="basis-[50%] w-[50%] sm:basis-1/3 sm:w-1/3 lg:basis-1/4 lg:w-1/4 2xl:basis-1/6  2xl:w-1/6 flex justify-center cursor-grab"
              >
                <img
                  className="grayscale hover:grayscale-0 hover:scale-110 ease-in-out duration-300"
                  src={logo.logo}
                  alt={logo.alt}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default CompanyLogo;

"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselAutoplay } from "embla-carousel-autoplay";
import { accenture, anand, manpho, president, jain } from "@/assets/images";
import Client from "./Clients";
import Autoplay from "embla-carousel-autoplay";

const clients = [
  {
    image: anand,
    text: "Anand Sweets",
  },
  {
    image: president,
    text: "President University",
  },
  {
    image: jain,
    text: "Jain Heights",
  },
  {
    image: manpho,
    text: "Manpho construction",
  },
  {
    image: accenture,
    text: "Accenture",
  },
];

const Clientpart = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true },[Autoplay()]);


  return (
    <div className="py-4 overflow-hidden">
      <h2 className="font-merriweather text-xl font-bold text-center">Other Clients</h2>
    <div className="embla m-4" ref={emblaRef}>
      <div className="embla__container flex flex-row  justify-around items-center">
        {clients.map((client, index) => (
          <div className="embla__slide px-2" key={index}>
            <Client {...client} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Clientpart;

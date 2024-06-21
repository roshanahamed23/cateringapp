'use client'
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselAutoplay } from "embla-carousel-autoplay";
import {networking,wedding,corporate,community,birthday} from "@/assets/images/product";
import Client from "./Clients";
import Autoplay from "embla-carousel-autoplay";


const clients = [
  {
    image: birthday,
    text: "Birthday Events",
    link:"/service/birthday-events"
  },
  {
    image: corporate,
    text: "Corporate Events",
    link:"/service/corporate-events"
  },
  {
    image: community,
    text: "Community Events",
    link:"/service/community-events"
  },
  {
    image: networking,
    text: "Networking Events",
    link:"/service/networking-events"
  },
  {
    image: wedding,
    text: "Wedding Events",
    link:"/service/wedding-events"
  },
];

const Otherservice = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true },[Autoplay()]);


  return (
    <div className="py-4 overflow-hidden">
      <h2 className="font-merriweather text-xl font-bold text-center">Other Services</h2>
    <div className="embla m-4" ref={emblaRef}>
      <div className="embla__container flex flex-row items-center justify-around items-center justify-center">
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

export default Otherservice;

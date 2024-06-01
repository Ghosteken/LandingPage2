"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

// import { Card, CardContent } from "@/components/ui/card"

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselCard, { CarouselData } from "./CarouselCard";

const Slider = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="p-2 sm:p-8 md:p-16 lg:p24 bg-gradient-to-b from-white from-red-40 to-[#E1E3F8]  ">
      {/* <div className="h-[600px] w-full"></div> */}

      {/* slides */}
      <div className="text-xs sm:text-sm lg:text-base bg-green-40 ">
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          className="w-full h-fit bg-fuchsia-40"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="bg-yellow-40">
            {CarouselData.map((data, index) => (
              <CarouselItem key={index}>
                <div className="p-1 bg-blue-40">
                  <CarouselCard data={data} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className=" w-full mt-2 sm:mt-4 md:mt-6 xl:mt-10">
        <div className="flex bg-[#E1E3F8] w-fit mx-auto rounded-full drop-shadow-lg">
          {Array.from({ length: count }).map((_, index) => (
            <div
              key={index}
              className={` rounded-full transition-all ease-in-out w-10 h-2 lg:w-40 lg:h-4  ${
                current === index + 1 ? "bg-[#202229]" : "bg-[#EDEFFF"
              } `}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;

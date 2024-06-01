import React from "react";
import Image from "next/image";

import slant from "@/public/black_slant.svg";
import lady from "@/public/lady.svg";

import GoodHandsAccordion from "./GoodHandsAccordion";

const data = [
  {
    id: 1,
    title: "Tell us something about yourself",
  },
  {
    id: 2,
    title: "Give a short brief about your experience",
  },
  {
    id: 3,
    title: "Explain about good customer experience",
  },
  {
    id: 4,
    title: "How to manage SOP of customers care?",
  },
  {
    id: 5,
    title: "Tell us something about yourself",
  },
];

const GoodHands = () => {
  const rendetItems = data.map((item) => {
    return (
      <div className="flex space-x-4" key={item.id}>
        <div
          className={` ${item.id === 1 ? "rounded-t-md" : ""} ${
            item.id === 5 ? "rounded-b-md" : ""
          } bg-[#8BA4FD] aspect-square p-4 flex items-baseline`}
        >
          <div className=" hover:border-4 border-b-4 border-l px-3 py-1.5 border-white rounded-full text-white">
            {item.id}
          </div>
        </div>
        <p className=" my-auto">{item.title}</p>
      </div>
    );
  });

  return (
    <div className="relative">
      <Image
        className="mt-10"
        src={slant}
        alt="good hands"
        width={0}
        height={0}
      />
      <div className="lg:pt-40 pt-8 p-4 md:p-8 lg:p-20 flex lg:flex-row flex-col gap-8">
        {/* left */}
        <div className="lg:basis-1/2 space-y-8">
          <h3 className="text-3xl md:text-4xl lg:text-5xl italics max-w-xl">
            How we ensure you&apos;re in good hands.
          </h3>
          <p className="max-w-xl">
            With our comprehensive screening process, we hand-pick highly
            skilled candidates so you can onboard them in a matter of days.
          </p>
          <GoodHandsAccordion />
        </div>

        {/* right */}
        <div className=" w-full p-4 md:p-8 lg:p-20 lg:basis-1/2">
          <div className="flex">
            <Image
              className="drop-shadow-lg ml-auto"
              src={lady}
              alt="good hands"
              width={0}
              height={0}
            />
          </div>
          {rendetItems}
        </div>
      </div>
    </div>
  );
};

export default GoodHands;

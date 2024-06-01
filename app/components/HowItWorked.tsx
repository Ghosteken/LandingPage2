import Image from "next/image";
import React from "react";
import person from "@/public/peron_2.svg";
import logo from "@/public/groovehq.svg";
import Vector from "@/public/Vector.svg";
import vectorLeft from "@/public/vector_left.svg";
import logo_2 from "@/public/groove_logo.svg";

import { ABeeZee } from "next/font/google";

const aBeeZee = ABeeZee({ weight: "400", subsets: ["latin"], style: "italic" });

const HowItWorked = () => {
  return (
    <div
      className={`${aBeeZee.className} p-4 md:p-16 py-20 lg:p-20 lg:py-32 bg-[#202229] flex flex-col lg:flex-row text-white gap-5 space-y-20 lg:space-y-0 `}
      style={{ fontStyle: "italic" }}
    >
      {/* left */}
      <div className="bg-red-20 lg:basis-1/2 space-y-10">
        <h3 className=" text-cente text-5xl italic max-w-lg">
          How it worked for Jason{" "}
          <Image
            className="inline my-auto w-[56px] aspect-square  "
            src={person}
            alt="Person"
          />{" "}
          at
          <br />
          <Image
            className="inline my-auto w-48 mt-1  "
            src={logo}
            alt="logo"
          />{" "}
        </h3>
        <div>
          <p className="xl:text-[22px] text-[#C6C4C4] max-w-lg ">
            Zwilt enabled us to deliver on time and they&apos;ve been heavy
            hitters in our corner since.
          </p>
          <div className="flex space-x-2">
            <div className="border p-3 aspect-square rounded-xl bg-[#f6f6f6]  ">
              <Image
                src={vectorLeft}
                className=" my-auto w-3 h-3 "
                alt="Vector"
              />
            </div>
            <div className="border p-3 aspect-square rounded-xl bg-[#f6f6f6]  ">
              <Image src={Vector} className=" my-auto w-3 h-3 " alt="Vector" />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:basis-1/2 my-auto space-y-10 ">
        <div className="space-x-5 flex">
          <Image src={logo_2} className="  w-24 aspect-aquare " alt="Vector" />
          <div className="flex flex-col">
            <p className="text-3xl">Jason Makki</p>
            <p className="text-[#C6C4C4] ">Engineer at GROOVE</p>
            <p className="mt-auto text-[#C6C4C4]">San Francisco</p>
          </div>
        </div>
        <p className="xl:text-[22px] text-[#C6C4C4] max-w-lg ">
          Zwilt enabled us to deliver on time and they&apos;ve been heavy
          hitters in our corner since. Zwilt enabled us to deliver on time and
          they&apos;ve been heavy hitters in our corner since.Zwilt enabled us
          to deliver on time and they&apos;ve been heavy hitters.
        </p>
      </div>
    </div>
  );
};

export default HowItWorked;

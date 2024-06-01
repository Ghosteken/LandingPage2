"use client";

import React, { HTMLAttributes, useRef } from "react";
import Image from "next/image";

import shopify from "@/public/shopify.png";
import magento from "@/public/magento.png";
import webflow from "@/public/webflow.png";
import dotnet from "@/public/dotnet.png";
import dataScientist from "@/public/data_scientist.png";
import ux from "@/public/ux.png";
import graphics from "@/public/grahics.png";
import ai from "@/public/ai.png";
import unreal from "@/public/unreal.png";
import cinema from "@/public/cinema.png";

import medal from "@/public/medal.svg";
import block from "@/public/block.svg";
import profile from "@/public/profile.svg";
import Vector from "@/public/Vector_light.svg";
import MarketPlaceCarousel from "./MarketPlaceCarousel";
import ExploreMore from "./ExploreMore";
import LearnMoreButton from "./LearnMoreButton";

const MarketPlaceData = [
  {
    title: "Find Dev and IT professionals to scale your business.",
    subtitle: "IT & Development",
    skills: 989,
    subCategories: 45,
    profiles: null,
    items: [
      {
        name: "Shopify Developer",
        image: shopify,
      },
      {
        name: "Magento Developer",
        image: magento,
      },
      {
        name: "Data Scientist",
        image: dataScientist,
      },
      {
        name: "Webflow Developer",
        image: webflow,
      },
      {
        name: "Dot Net Developer",
        image: dotnet,
      },
      {
        name: "UX Designer",
        image: ux,
      },
      {
        name: "Graphics Designer",
        image: graphics,
      },
      {
        name: "Illustrator Artist",
        image: ai,
      },
      {
        name: "Unreal Engine",
        image: unreal,
      },
      {
        name: "Cinema 4D ",
        image: cinema,
      },
    ],
  },
  {
    title: "Explore Crative individuals with a keen eye for detail.",
    subtitle: "Design & Creative",
    skills: 989,
    subCategories: 45,
    profiles: 1011,
    items: [
      {
        name: "Cinema 4D ",
        image: cinema,
      },
      {
        name: "Unreal Engine",
        image: unreal,
      },
      {
        name: "Illustrator Artist",
        image: ai,
      },
      {
        name: "Graphics Designer",
        image: graphics,
      },
      {
        name: "UX Designer",
        image: ux,
      },
      {
        name: "Dot Net Developer",
        image: dotnet,
      },
      {
        name: "Webflow Developer",
        image: webflow,
      },
      {
        name: "Data Scientist",
        image: dataScientist,
      },
      {
        name: "Magento Developer",
        image: magento,
      },
      {
        name: "Shopify Developer",
        image: shopify,
      },
    ],
  },
];

const MarketPlace = () => {
  const scrollContainerRef = useRef<any>(null);

  const scroll = (scrollOffset: any) => {
    scrollContainerRef.current.scrollLeft += scrollOffset;
  };

  const renderMarketPlace = MarketPlaceData.map((data) => {
    return (
      <div
        key={data.title}
        className="  flex flex-col lg:flex-row  text-sm lg:text-base space-y-8 lg:gap-12 px-4 md:px-8 lg:px-16 my-10"
      >
        <div className=" lg:w-[30%]  my-auto   bg-red-40 ">
          <div className="space-y-5 max-w-sm">
            <h4 className="font-medium text-xl max-w ">{data.title}</h4>

            <div className="flex justify-between max-w-">
              <div className="flex space-x-2">
                <Image
                  className="size-4"
                  src={medal}
                  alt="skills"
                  width={0}
                  height={0}
                />
                <p className="text-[#959595] text-sm">{data.skills} skills</p>
              </div>
              <div className="flex space-x-2">
                <Image
                  className="size-4"
                  src={block}
                  alt="skills"
                  width={0}
                  height={0}
                />
                <p className="text-[#959595] text-sm">
                  {data.subCategories} sub-categories.
                </p>
              </div>
            </div>
            {data.profiles && (
              <div className="flex space-x-2">
                <Image
                  className="size-4"
                  src={profile}
                  alt="skills"
                  width={0}
                  height={0}
                />
                <p className="text-[#959595] text-sm">
                  {data.profiles} Profiles.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* scroll */}
        <MarketPlaceCarousel subtitle={data.subtitle} items={data.items} />
      </div>
    );
  });

  return (
    <div className="bg-[#EDEFFF] pt-16 lg:pt-40 relative ">
      <div className="bg-[#EDEFFF bg-[#fff] bg-red-30 -skew-y-2 absolute -top-4 h-10 w-full"></div>
      <h4 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center max-w-l lg:w-full  px-6  mx-auto">
        Your one-stop marketplace for finding <br className="hidden lg:block" />{" "}
        the talent your business needs.
      </h4>
      <div className="">{renderMarketPlace}</div>
      <div className="flex bg-red-20 ">
        <div className="flex bg-green-20 basis-[30%] mb-10 px-4 md:px-8 lg:px-16 ">
          <LearnMoreButton />
        </div>
        <p className="bg-red-40  ">30 more to explore</p>
      </div>
      <div className="absolute -bottom-[60px] h-24 w-full bg-red-20 bg-[#EDEFFF] -skew-y-3">
        {" "}
      </div>
      {/* <ExploreMore /> */}
    </div>
  );
};

export default MarketPlace;

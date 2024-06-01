import React from "react";
import LearnMoreButton from "./LearnMoreButton";
import Image, { StaticImageData } from "next/image";
import group from "@/public/group_slider.png";
import group_2 from "@/public/group_slider_2.png";
import group_3 from "@/public/group_slider_3.png";

export const CarouselData = [
  {
    id: 1,
    title: "Onboard without the risk",
    content: [
      "We pick the best for you to select.",
      "Thousands of vetted candidates in dozens of categories.",
      "Risk-free resource swapping for the best fit.",
    ],
    image: group,
  },
  {
    id: 2,
    title: "An Open book",
    content: [
      "Easy and transparent one-to-one chat with candidates.",
      "Simple and convenient payment methods.",
      "Review past ratings.",
    ],
    image: group_2,
  },
  {
    id: 3,
    title: "Stay in the loop",
    content: [
      "Track your staff activity down to every minute with screenshots.",
      "Comprehensive timesheet data to process payments.",
      "Create projects to organize and assign tasks more effectively.",
    ],
    image: group_3,
  },
];

interface Data {
  id: number;
  title: string;
  content: string[];
  image: StaticImageData;
}

interface Props {
  data: Data;
}

const CarouselCard = ({ data }: Props) => {
  const { id, title, content, image } = data;

  const renderPoints = (content: string[]) => {
    return content.map((point, index) => {
      return (
        <ul className="flex space-x-4" key={index}>
          <div
            className={` ${id === 1 ? "bg-[#50589F] " : ""} ${
              id === 2 ? "bg-[#FFBE2E] " : ""
            } ${id === 3 ? "bg-[#C7F4C2] " : ""}  min-w-5 w-5 h-2 rounded-full  my-auto `}
          ></div>{" "}
          <span>{point}</span>
        </ul>
      );
    });
  };

  return (
    <div className="bg-white rounded-xl flex flex-col xl:flex-row bg-green-20 relative p-4 sm:p-8 xl:pl-8 py-4 lg:py-8 ">
      {/* text */}
      <div className="my-auto mx-auto xl:mx-0  bg-fuchsia-30 space-y-8  py-10 lg:py-40 z-10 ">
        <h4 className="text-3xl lg:text-5xl xl:text-[54px] xl:max-w-md italic">
          {title}
        </h4>
        <div className=" text-xs sm:text-sm lg:text-base 2xl:max-w-full lg:max-w-[526px] ">
          {renderPoints(content)}
        </div>
        <LearnMoreButton />
      </div>

      {/* image */}
      <div className="xl:ml-auto mx-auto my-auto w-ful xl:mx-0 xl:w-[49%] bg-red-20 xl:absolut xl:top1/2 xl:-right12 xl:transform  xl:-translate-y1/2">
        <Image
          src={image}
          alt="group"
          width={0}
          height={0}
          className="my-auto"
        />
      </div>
    </div>
  );
};

export default CarouselCard;

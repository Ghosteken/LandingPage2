import React from "react";

import Image from "next/image";

import one from "@/public/1.svg";
import two from "@/public/2.svg";
import three from "@/public/3.svg";
import vector from "@/public/vector_black_bg.svg";
import people1 from "@/public/people_slant_1.svg";
import people2 from "@/public/people_slant_2.png";
import people3 from "@/public/people_slant_3.png";

import slant from "@/public/slant_white.svg";
import { Content } from "next/font/google";

const JourneyData = [
  {
    id: 1,
    title: "Find your next star performer.",
    Content:
      "Explore the vast Zwilt marketplace to find the candidate that meets your needs.",
    numberImage: one,
    peopleImage: people1,
  },
  {
    id: 2,
    title: "Evaluate to your heart's content.",
    Content:
      "Assess the candidate through work history, transparent tests and video interviews.",
    numberImage: two,
    peopleImage: people2,
  },
  {
    id: 3,
    title: "Start building your team.",
    Content:
      "Assess the candidate through work history, transparent tests and video interviews.",
    numberImage: three,
    peopleImage: people3,
  },
];

const YourJourney = () => {
  const renderJourney = JourneyData.map((journey) => {
    return (
      <div
        key={journey.id}
        className={` ${journey.id === 1 ? "bg-[#D8D2FF40]" : ""} ${journey.id === 2 ? "bg-[#FFBE2E20]" : ""} ${journey.id === 3 ? "bg-[#F3F3F3] " : ""} sm:-mt-3 lg:-mt-6   flex [clip-path:polygon(0%_calc(0%+3vw),100%_0%,100%_calc(100%-3vw),0%_100%)] gap-x-8 flex-col lg:flex-row`}
      >
        <div className="my-10 lg:my-auto lg:pt-8  flex">
          {/* left */}
          <div className="  my-auto p-8  ">
            <div className="flex space-x-4 ">
              <Image
                className="w-6 md:w-fit h-fit"
                src={journey.numberImage}
                alt="one"
                width={0}
                height={0}
              />
              <div className="max-w-sm space-y-2 md:space-y-4">
                <h3 className=" md:text-2xl xl:text-3xl font-medium italic">
                  {journey.title}
                </h3>
                <p className="text-[#20222980] text-sm md:text-base">
                  {journey.Content}
                </p>
                <div className="flex space-x-2 group">
                  <button>
                    <Image
                      src={vector}
                      alt="lady"
                      width={0}
                      height={0}
                      className="w-10 xl:w-full"
                    />
                  </button>
                  <p className="my-auto group-hover:underline">Join Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image
          className=" hidden lg:block lg:ml-auto h-auto wfit"
          src={journey.peopleImage}
          alt="one"
          width={0}
          height={0}
        />
      </div>
    );
  });

  return (
    <div className=" p-4 pt-16 md:p-8 lg:p-16  space-y4">
      <h4 className="text-3xl md:text-4xl lg:text-5xl mb-10 lg:mb-20 italic text-center">
        Start your journey today.
      </h4>

      <>{renderJourney}</>
    </div>
  );
};

export default YourJourney;

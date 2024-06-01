import React from "react";
import Image from "next/image";

import person from "@/public/person.svg";
import vector from "@/public/Vector.svg";
import union from "@/public/Union.svg";

import FindingTheRightFitTab from "./FindingTheRightFitTab";

const FindingRightFit = () => {
  return (
    <div className="mx-auto px-4 pt-20 xl:pt-40 space-y-6 w-full">
      <h1 className=" text-3xl lg:text-4xl xl:text-[54px] font-bold drop-shadow-md xl:leading-[64px] text-center">
        Finding the right fit{" "}
        <Image
          className="inline my-auto size-16 aspect-square"
          src={person}
          alt="Person"
        />
        has
        <br className="hidden lg:block" /> never been easier.
      </h1>
      <p className="text-[#202229] text-lg lg:text-[22px] max-w-screen-sm mx-auto text-center">
        With our rigorous pre-vetting process, you&apos;ll never have to worry
        about finding the ideal candidate ever again.
      </p>
      <form className="relative max-w-screen-sm mx-auto">
        <input
          type="text"
          className="text-[#959595] border-[1px] border-[#959595] rounded-[16px] w-full py-4 lg:py-[30px] focus:border-none  flex-1  pl-6"
          placeholder="design |"
        />
        <button
          type="submit"
          className="absolute top-0 right-0   bg-[#FFBE2E] hover:bg-[#FFBE2E9e] w-[58px] lg:size-[86px]  transition-all aspect-square flex  my-auto  rounded-[14px]"
        >
          <Image className="inline my-auto mx-auto " src={vector} alt="arrow" />
        </button>
      </form>
      <FindingTheRightFitTab />
      <div className="pr-20 pt-20 ">
        <Image
          className="mx-auto mr-40"
          src={union}
          alt="Rectangle"
          width={1470}
          height={140}
        />
      </div>
    </div>
  );
};

export default FindingRightFit;

import Image from "next/image";
import React from "react";

import slant from "@/public/black_slant.svg";
import slant_light from "@/public/slanted_bg.svg";

import vector from "@/public/vector_down.svg";

const NeedAJob = () => {
  return (
    <div className="w-full bg-[#0C0C0C] px10 py20 ">
      <div
        className="-mt-10  aspect-[1300/481] bg-[#525AA0 "
      >
        <div className="w-full  bg-[#0C0C0C] h-full pt-0 p-8 ">
          <div className="bg-[#525AA0] w-full flex flex-col pb-20 h-full">
            <div className="mx-auto my-auto h-full w-full bg-red-30 z-20 flex flex-col pt-16 ">
              <h4 className="mx-auto my-auto  pt16 bg-red-20 w-full text-center text-base sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-white max-w-sm xl:max-w-md   ">
                Need a job done, and done well? Get started
              </h4>
              <Image
                src={vector}
                alt="vector"
                className="mx-auto mt-2 w-14 hidden lg:block cursor-pointer hover:scale-105 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedAJob;

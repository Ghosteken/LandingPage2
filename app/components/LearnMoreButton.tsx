import Image from "next/image";
import React from "react";

import vector from "@/public/vector_black_bg.svg";

interface Props {
  title?: string;
}

const LearnMoreButton = ({ title }: Props) => {
  return (
    <button className="flex space-x-2 group ">
      <div className="group-hover:scale-105">
        <Image
          src={vector}
          alt="learn more"
          width={0}
          height={0}
          className="w-10 xl:w-full"
        />
      </div>
      <p className="my-auto text-xs lg:text-base group-hover:underline">
        {title ? title : "Join Now"}
      </p>
    </button>
  );
};

export default LearnMoreButton;

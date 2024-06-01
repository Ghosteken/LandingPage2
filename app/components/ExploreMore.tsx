import React from "react";
import Image from "next/image";

import quote from "@/public/qoute.svg";

const ExploreMore = () => {
  return (
    <div className="h-24 bg-[#202229] flex justify-end">
      <Image
        className=" bg-red-20"
        src={quote}
        alt="logo"
        width={0}
        height={0}
      />
    </div>
  );
};

export default ExploreMore;

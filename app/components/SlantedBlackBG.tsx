import React from "react";

const SlantedBlackBG = () => {
  return (
    <div
      className="mt10 aspect-[1440/1 bg-[#000] flex relative"
      style={{
        backgroundImage: `url(/black_slant.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h4 className="h-10">Need a job done, and done well? Get started</h4>
    </div>
  );
};

export default SlantedBlackBG;

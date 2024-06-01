import React from "react";
import Image from "next/image";

import logo from "@/public/zwilt_logo.svg";

const FooterData = [
  {
    title: "PLATFORM",
    links: ["Find Work", "Find Talent", "Articles", "About Us"],
  },
  {
    title: "CATEGORIES",
    links: ["Dara Science", "IT & Networking", "Web & Mobile "],
  },
  {
    title: "HELP",
    links: ["Contact Us"],
  },
  {
    title: "GET IN TOUCH @",
    links: ["Instagram", "LinkedIn", "Twitter"],
  },
];

const Footer = () => {
  const renderLinks = FooterData.map((data) => (
    <div key={data.title} className="space-y-4">
      <h6 className="text-sm text-[#DCDCDC90] ">{data.title}</h6>
      <div className="space-y-4">
        {data.links.map((link) => (
          <p
            key={link}
            className="hover:border-b border-white w-fit cursor-pointer transition-all"
            style={{ borderImage: "linear-gradient(to right, white, white)" }}
          >
            {link}
          </p>
        ))}
      </div>
    </div>
  ));

  return (
    <div className="-mt-14 bg-[#0C0C0C] bg-red-20 z-20 text-white text-sm lg:grid lg:grid-cols-6    ">
      {/* left */}
      <div className="col-span-2 text-sm space-y-8 px-8">
        <Image src={logo} alt="logo" width={100} height={100} />
        <p className="max-w-[284px] text-sm">
          We take complex hiring processes - and simplify them. Connecting you
          to the world&apos;s highly qualified talent pool.
        </p>
        <div className="space-y-4">
          <p className="text-[#DCDCDC90] ">LINKS AND PROJECTS</p>
          <div className="flex space-x-2 ">
            <button className="px-10 py-3 bg-[#292B34] rounded-full hover:scale-105 ">
              Hire Now
            </button>
            <button className="px-10 py-3 bg-[#292B34] rounded-full hover:scale-105 transition-all ">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="lg:col-span-4 px-8 mt-20 lg:mt-0 ">
        <div className="w-full h-full space-y-10">
          <h4 className="max-w-screen-md text-4xl italic font-medium">
            Connecting the right people to the right businesses.
          </h4>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {/* links */}
            {renderLinks}
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="col-span-6 mt-24 ">
        <div className="h-[1px] w-full bg-slate-500 text-slate-500 " />
        <div className="flex justify-between text-sm text-[#DCDCDC90] px-8 py-2 ">
          <p>All right reserved by Zwilt</p>
          <div className="flex space-x-4 underline">
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

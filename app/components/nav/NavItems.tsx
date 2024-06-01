import React from "react";
import Link from "next/link";
// import { Switzer } from "next/font/google";

const NavItemsList = [
  {
    title: "Find Work",
    link: "/",
  },
  {
    title: "Find Talent",
    link: "/",
  },
  {
    title: "Articles",
    link: "/",
  },
  {
    title: "About Us",
    link: "/",
  },
  {
    title: "Contact Us",
    link: "/",
  },
];

interface NavItemsProps {
  sideNav?: boolean;
}

const NavItems = ({ sideNav }: NavItemsProps) => {
  const renderNavItems = NavItemsList.map((item) => {
    return (
      <Link href={item.link} key={item.title}>
        <p className="hover:font-bold  text-sm">{item.title}</p>
      </Link>
    );
  });

  return (
    <div
      className={` ${
        sideNav
          ? "flex flex-col text-white space-y-5"
          : "hidden lg:flex space-x-8"
      }    my-auto transition-all`}
    >
      {renderNavItems}
    </div>
  );
};

export default NavItems;

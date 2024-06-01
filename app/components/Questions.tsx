import Image from "next/image";
import React from "react";
import slant from "@/public/slant_questions.svg";
import slantblack from "@/public/slant_black.png";
import slant_light from "@/public/slanted_bg.svg";

const QuestionsData = [
  {
    id: 1,
    title: "General",
    content: "I want to work part-time, is that possible",
  },
  {
    id: 2,
    content: "How long are the average projects?",
  },
  {
    id: 3,
    content: "How does the payment works?",
  },
  {
    id: 4,
    content: "How much can I earn?",
  },
  {
    id: 5,
    title: "General",
    subtitle: "Joining Process",
    content: "I want to work part-time, is that possible",
  },
  {
    id: 6,
    content: "I want to work part-time, is that possible",
  },
  {
    id: 7,
    content: "How long are the average projects?",
  },
  {
    id: 8,
    content: "How does the payment works?",
  },
  {
    id: 9,
    content: "How much can I earn?",
  },
];

const Questions = () => {
  const rendetItems = QuestionsData.map((item) => {
    return (
      <div className="border-y flex relative" key={item.id}>
        <div className="flex">
          {item.title && (
            <div className="h-full border-r hover:bg-[#E8E8E8] cursor-pointer flex">
              <p className="  items-baseline flex px-5  my-auto ">
                {item.title}
              </p>
            </div>
          )}
          {item.subtitle && (
            <div className="h-full border-r hover:bg-[#E8E8E8] cursor-pointer flex">
              <p className=" px-5 whitespace-nowrap my-auto ">
                {item.subtitle}
              </p>
            </div>
          )}
        </div>
        <p
          className={` ${item.title && item.subtitle ? " md:pl-[164px] xl:pl-[318px]" : item.title ? "pl-[80px] md:pl-[280px] xl:pl-[480px]" : "pl-[160px] md:pl-[374px] xl:pl-[574px]"}   py-5  my-aut mx-aut w-full w-fi hover:bg-[#E8E8E8] cursor-pointer `}
        >
          {item.content}
        </p>
      </div>
    );
  });

  return (
    <div
      className="mt10 aspect-[1440/1344 bg-[#f3f3f3] text-xs lg:text-base flex relative"
      // style={{
      //   backgroundImage: `url(/question_bg.png)`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <Image src={slant} alt="background" className="absolute top-0" />
      <div className="py-20 w-full">
        <h4 className="text-center mx-auto font-medium text-2xl md:text-3xl lg:text-4xl xl:text-5xl    ">
          Frequently asked questions
        </h4>

        {/* table thingy */}
        <div className=" pt-10">{rendetItems}</div>
      </div>

      {/* <Image
        src={slantblack}
        alt="background"
        className="absolute -bottom-1  "
      /> */}
      <Image
        className="absolute -mx-10 lg:mx-0 -bottom-10 lg:-bottom-[46px] xl:-bottom-[56px]"
        src={slant_light}
        alt="good hands"
        width={0}
        height={0}
      />
    </div>
  );
};

export default Questions;

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionData = [
  {
    id: 1,
    value: "item-1",
    title: "Step 1: Resume Screening",
    content: "Step 1 Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: 2,
    value: "item-2",
    title: "Step 2: Video Interview",
    content:
      "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
  },
  {
    id: 3,
    value: "item-3",
    title: "Step 3: Technical Evaluation",
    content:
      "Step 3: Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    id: 4,
    value: "item-4",
    title: "Step 4: Application Review",
    content:
      "Step 4: Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    id: 5,
    value: "item-5",
    title: "Step 5: Lets get to work",
    content:
      "Step 5: Yes. It's animated by default, but you can disable it if you prefer.",
  },
];

export default function GoodHandsAccordion() {
  const renderSteps = AccordionData.map((step) => {
    return (
      <AccordionItem
        className="rounded-lg data-[state=open]:bg-white data-[state=open]:drop-shadow-lg space-y-4 p-4"
        key={step.id}
        value={step.value}
      >
        <AccordionTrigger className="rounded-t-lg space-x-2 data-[state=open]:rounded-t-lg ">
          {step.title}
        </AccordionTrigger>
        <AccordionContent>{step.content}</AccordionContent>
      </AccordionItem>
    );
  });

  return (
    <Accordion type="single" collapsible className="w-full p2  space-y-2">
      {renderSteps}
    </Accordion>
  );
}

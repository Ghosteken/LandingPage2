"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { RiMovieFill } from "react-icons/ri";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "border rounded-lg  bg-[#Fff]  data-[state=open]:bg-[#fff] ",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex w-full rounded-t-lg  items-center  p4 font-medium transition-all hover:underlin [&[data-state=open]>div]:bg-[#8BA4FD] [&[data-state=open]>div>svg]:fill-[#fff]   data-[state=open]:bg-[#fff]  [&[data-state=open]>div>svg]:bg-[#8ba4fd] [&[data-state=closed]>div]:bg-[#ECECEC] ",
        className
      )}
      {...props}
    >
      <div className="aspect-square mr-2  rounded-full p-4">
        <RiMovieFill className="h-4 w-4 fill-current shrink-0 transition-transform duration-200 " />
      </div>
      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=open]:rounded-b-lg data-[state=closed]:rounded-b-lg  transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down  bg-[#F0F0F0]  data-[state=open]:bg-[#fff] "
    {...props}
  >
    <div className={cn("pb-4 pt-0 rounded-b-lg", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

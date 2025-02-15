"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ value, className, children, ...props }, ref) => {
  return (
    <div className="h-6 sm:h-[21px] justify-start items-start inline-flex">
      <div className="justify-start items-center gap-2 flex">
        <RadioGroupPrimitive.Item
          ref={ref}
          value={value}
          className={cn(
            "peer w-6 h-6 sm:w-[18px] sm:h-[18px] bg-white rounded-2xl sm:rounded-xl border border-black/20 hover:border-black/40 data-[state=checked]:bg-[#f62455] data-[state=checked]:border-black/30",
            className
          )}
          {...props}
        >
          <RadioGroupPrimitive.Indicator
            className={cn(
              "flex items-center justify-center",
              "w-full h-full"
            )}
          >
            <div className="w-[13.33px] h-[13.33px] sm:w-2.5 sm:h-2.5 bg-white rounded-full shadow-[inset_0px_0px_4px_1px_rgba(0,0,0,0.16)] border border-[#d3d3d3]" />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
        <div className="text-[#02223e]/80 sm:text-[#340717] text-lg sm:text-xl font-normal font-['Poppins'] leading-snug sm:leading-none tracking-wide">
          {value}
        </div>
      </div>
    </div>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };